import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-entity-box",
  imports: [],
  templateUrl: "./entity-box.html",
  styleUrl: "./entity-box.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-entity-box"
  }
})
export class UiEntityBox {
  // TODO: alignment config
}
