import { AppService } from "../../app.service"

// Angular
import { Component, effect, signal } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"

// Lodash
import _ from "lodash"

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly wasAuthentic = signal([false], {equal: _.isEqual})
  private Param = {}

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.http.get("/resource").subscribe(datum => this.Param = datum)
    this.app.authenticate(undefined, undefined)
  }

  logout(): void {
    effect(() => {
      this.wasAuthentic.set([false])
      this.http.post("logout", this.wasAuthentic)
      // this.http.post(url: string, body: any, options { headers?: HttpHeaders })
    }, {app: this.app})
  }
}
