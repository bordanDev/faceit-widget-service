import { Component, signal, ViewEncapsulation, WritableSignal } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "ui-input",
  imports: [],
  templateUrl: "./input.html",
  styleUrl: "./input.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-input",
    "[attr.disabled]": "isDisabled()"
  }
})
export class UiInput implements ControlValueAccessor {
  // TODO: Type implementation for value accessor

  public readonly value: WritableSignal<any> = signal(null);
  public isDisabled: WritableSignal<boolean> = signal(false);

  constructor(private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

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

  protected onChange(value: any) {}
  protected onTouched() {}
}
