import { NgModule } from "@angular/core";
import { UiButtonModule } from "./button";
import { UiEntityBox } from "./entity-box";
import { UiInput } from "./input";
import { UiLevelProgress } from "./level-progress";
import { UiSearch } from "./search";
import { UiText } from "./text";

@NgModule({
  imports: [UiLevelProgress, UiSearch, UiText, UiButtonModule, UiInput, UiEntityBox],
  exports: [UiLevelProgress, UiSearch, UiText, UiButtonModule, UiInput, UiEntityBox]
})
export class UiModule {}
