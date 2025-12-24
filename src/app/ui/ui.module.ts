import { NgModule } from '@angular/core';
import { UiLevelProgress } from './level-progress';
import { UiSearch } from './search';

@NgModule({
  imports: [UiLevelProgress, UiSearch],
  exports: [UiLevelProgress, UiSearch],
})
export class UiModule {}
