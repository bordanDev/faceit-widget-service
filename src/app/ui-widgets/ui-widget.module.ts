import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { UiBaseWidget } from './base-widget';

@NgModule({
  imports: [UiBaseWidget, UiModule],
  exports: [UiBaseWidget, UiModule],
})
export class UiWidgetModule {}
