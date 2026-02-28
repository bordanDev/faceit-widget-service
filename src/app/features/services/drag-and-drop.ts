import { Injectable } from "@angular/core";
import { BaseState } from "../../core";

@Injectable({
  providedIn: "root"
})
export class DragAndDropService extends BaseState {
  // private cdkDrag = inject(CdkDrag);

  constructor() {
    super();
  }
}
