import { AppService } from "../../app.service"

// Angular
import { Component } from "@angular/core"
import { HttpClient } from "@angular/common/http"

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
  constructor(private app: AppService, private http: HttpClient) {
    this.http.get("/resource").subscribe(d => d)
    this.app.authenticate(undefined, undefined)
  }
}
