import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-wrapper",
  imports: [],
  templateUrl: "./wrapper.html",
  styleUrl: "./wrapper.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-wrapper"
  }
})
export class UiWrapper {}
