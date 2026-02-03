import { Component, input, InputSignal, ViewEncapsulation } from "@angular/core";
import { UtlOptional } from "../../../../core";
import { ButtonType } from "../../types";

@Component({
  selector: "button[ui-button]",
  imports: [],
  templateUrl: "./button.html",
  styleUrl: "./button.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-button"
  }
})
export class UiButton {
  public type: InputSignal<UtlOptional<ButtonType>> = input<UtlOptional<ButtonType>>(null);
}
