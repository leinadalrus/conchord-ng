import { Component } from "@angular/core"
import { Vessel } from "../../models/vessels/vessel"
import { FiveStars } from "../../models/vessels/five-stars"
import { CombatFacade } from "../../models/vessels/combat-facade"

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  vessel: Vessel = {
    title: "I-400-class submarine",
    description: "Specialized, Proto-type, Submarine, Aircraft Carrier.",
    flavor: "Imperial Japanese Navy"
  }

  combatFacade: CombatFacade = {
    healthPoints: 1,
    damageAmount: 1
  }

  fiveStars: FiveStars = FiveStars.FiveStars

  avatarURL = ""
}
