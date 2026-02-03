import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-text, span[ui-text]",
  imports: [],
  templateUrl: "./text.html",
  styleUrl: "./text.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-text"
  }
})
export class UiText {}
