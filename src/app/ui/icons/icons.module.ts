import { NgModule } from "@angular/core";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";

@NgModule({
  exports: [FeatherModule],
  imports: [FeatherModule.pick(allIcons)]
})
export class IconsModule {}
