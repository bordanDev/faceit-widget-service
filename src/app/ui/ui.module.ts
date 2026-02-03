import { NgModule } from "@angular/core";
import { UiButtonModule } from "./button";
import { UiInput } from "./input/input";
import { UiLevelProgress } from "./level-progress";
import { UiSearch } from "./search";
import { UiText } from "./text";

@NgModule({
  imports: [UiLevelProgress, UiSearch, UiText, UiButtonModule, UiInput],
  exports: [UiLevelProgress, UiSearch, UiText, UiButtonModule, UiInput]
})
export class UiModule {}
