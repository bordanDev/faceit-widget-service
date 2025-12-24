import { NgModule } from '@angular/core';
import { UiBaseWidget } from './base-widget';

@NgModule({
  imports: [UiBaseWidget],
  exports: [UiBaseWidget],
})
export class UiWidgetModule {}
