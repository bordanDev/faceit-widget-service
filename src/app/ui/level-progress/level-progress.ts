import { Component, input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-level-progress",
  imports: [],
  templateUrl: "./level-progress.html",
  styleUrl: "./level-progress.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-level-progress"
  }
})
export class UiLevelProgress {
  public readonly level = input.required<number>();

  protected getLoaderValue() {
    return 167.5 - 167.5 * (this.level() * 0.1);
  }

  protected getColorStateByLevel() {
    if (isWithinInclusive(this.level(), 0, 1)) {
      return "#" + ColorLevelState.SUPPER_LOW;
    } else if (isWithinInclusive(this.level(), 1, 3)) {
      return "#" + ColorLevelState.LOW;
    } else if (isWithinInclusive(this.level(), 4, 7)) {
      return "#" + ColorLevelState.MIDDLE;
    } else if (isWithinInclusive(this.level(), 8, 9)) {
      return "#" + ColorLevelState.PRE_HIGH;
    } else {
      return "#" + ColorLevelState.HIGH;
    }
  }
}

function isWithinInclusive(number: number, min: number, max: number) {
  return number >= min && number <= max;
}

enum ColorLevelState {
  SUPPER_LOW = "EFF1EF",
  LOW = "2BFF2B",
  MIDDLE = "FFDC2B",
  PRE_HIGH = "FF592B",
  HIGH = "FE1F00"
}
