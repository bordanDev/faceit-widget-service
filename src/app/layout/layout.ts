import { Component, input, InputSignal, TemplateRef } from '@angular/core';
import { LeftPanel, MainContent, RightPanel } from './components';

@Component({
  selector: 'ui-layout',
  imports: [RightPanel, LeftPanel, MainContent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  public mainContent: InputSignal<TemplateRef<any>> = input.required();
  public leftPanel: InputSignal<TemplateRef<any>> = input.required();
  public rightPanel: InputSignal<TemplateRef<any>> = input.required();
}
