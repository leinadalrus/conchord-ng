import { Component } from "@angular/core"
import { Vessel } from "../vessels/vessel.component.ts"

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  title = "I-400-class submarine"
  description = "Specialized, Proto-type, Submarine, Aircraft Carrier."
  flavor = "Imperial Japanese Navy"
}
