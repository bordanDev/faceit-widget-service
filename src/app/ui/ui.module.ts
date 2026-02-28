import { NgModule } from "@angular/core";
import { UiButtonModule } from "./button";
import { UiEntityBox } from "./entity-box";
import { UiInput } from "./input";
import { UiLevelProgress } from "./level-progress";
import { UiSearch } from "./search";
import { UiText } from "./text";
import { UiWrapper } from "./wrapper";

@NgModule({
  imports: [UiLevelProgress, UiSearch, UiText, UiButtonModule, UiInput, UiEntityBox, UiWrapper],
  exports: [UiLevelProgress, UiSearch, UiText, UiButtonModule, UiInput, UiEntityBox, UiWrapper]
})
export class UiModule {}
