import { NgModule } from "@angular/core";
import { UiButton } from "./components";
import { UiButtonGroup } from "./components/group/group";

@NgModule({
  imports: [UiButton, UiButtonGroup],
  exports: [UiButton, UiButtonGroup]
})
export class UiButtonModule {}
