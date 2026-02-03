import { NgModule } from "@angular/core";
import { UiButtonModule } from "./button";
import { UiLevelProgress } from "./level-progress";
import { UiSearch } from "./search";
import { UiText } from "./text";

@NgModule({
  imports: [UiLevelProgress, UiSearch, UiText, UiButtonModule],
  exports: [UiLevelProgress, UiSearch, UiText, UiButtonModule]
})
export class UiModule {}
