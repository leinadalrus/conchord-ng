import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"

import { finalize, of } from "rxjs"

export class Login {
  constructor(private httpCliental: HttpClient, private appRouter: Router) {}

  logout(): void {
    of(this.httpCliental.post("logout", {})).subscribe({
      next: () => {
        finalize(() => {
          this.appRouter.navigateByUrl("/login")
        })
      },
      error: () => {
        finalize(() => {
          this.appRouter.navigateByUrl("/")
        })
      },
      complete: () => console.info("Completed.")
    })
  }
}
