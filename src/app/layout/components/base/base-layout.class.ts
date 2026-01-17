import { Directive, input, InputSignal, TemplateRef } from '@angular/core';

@Directive()
export class BaseLayout<ContextT = unknown> {
  public content: InputSignal<TemplateRef<ContextT>> = input.required();
}
