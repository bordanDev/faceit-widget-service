import { Component, forwardRef, signal, ViewEncapsulation, WritableSignal } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const CUSTOM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiInput),
  multi: true
};
@Component({
  selector: "ui-input",
  imports: [],
  templateUrl: "./input.html",
  styleUrl: "./input.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-input",
    "[attr.disabled]": "isDisabled()"
  },
  providers: CUSTOM_CONTROL_VALUE_ACCESSOR
})
export class UiInput implements ControlValueAccessor {
  // TODO: Type implementation for value accessor

  public readonly value: WritableSignal<any> = signal(null);

  public isDisabled: WritableSignal<boolean> = signal(false);

  public writeValue(value: any): void {
    this.value.set(value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  protected onChange?(value: any): () => void;
  protected onTouched?(): () => void;
}
