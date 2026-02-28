import { toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject } from "rxjs";

export class BaseState<T = any> {
  private $value = new BehaviorSubject<T>("" as any);
  public value = toSignal(this.$value);

  public setValue(value: T): void {
    this.$value.next(value);
  }
}
