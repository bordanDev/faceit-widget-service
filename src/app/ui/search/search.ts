import { Component, effect, output, OutputEmitterRef, Signal, signal } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { FormsModule } from "@angular/forms";
import { debounceTime } from "rxjs";

@Component({
  selector: "ui-search",
  imports: [FormsModule],
  templateUrl: "./search.html",
  styleUrl: "./search.scss"
})
export class UiSearch {
  public uiValueChanged: OutputEmitterRef<string> = output();
  protected value = signal("ptzhno");
  protected debouncer = this.debounceTimeSignal(this.value, 500);

  constructor() {
    effect(() => {
      this.uiValueChanged.emit(this.debouncer());
    });
  }

  private debounceTimeSignal<T>(valueSignal: Signal<T>, time: number = 0): Signal<T> {
    return toSignal(toObservable(valueSignal).pipe(debounceTime(time)), {
      initialValue: valueSignal()
    });
  }
}
