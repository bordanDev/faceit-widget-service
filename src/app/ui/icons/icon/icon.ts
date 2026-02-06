import { Component, input, InputSignal } from "@angular/core";
import { FeatherComponent, FeatherModule } from "angular-feather";

@Component({
  selector: "ui-icon",
  imports: [FeatherModule],
  templateUrl: "./icon.html",
  styleUrl: "./icon.scss"
})
export class UiIcon extends FeatherComponent {
  public size: InputSignal<IconSize> = input<IconSize>("middle");
}

export type IconSize = "large" | "middle" | "small";
