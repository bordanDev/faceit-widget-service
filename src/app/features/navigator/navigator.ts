import { Component, inject } from "@angular/core";
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { debounceTime } from "rxjs";
import { DataService } from "../../api/data.service";
import { UiModule } from "../../ui";

@Component({
  selector: "ui-navigator",
  imports: [UiModule, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: "./navigator.html",
  styleUrl: "./navigator.scss"
})
export class Navigator {
  protected search = new FormControl<string>("ptzhno");
  protected templatesMock = [
    "assets/template-list/base-widget.png",
    "assets/template-list/base-widget-1.png"
  ];

  private dataService = inject(DataService);

  constructor() {
    this.setPlayer(this.search.value);
    this.search.valueChanges.pipe(debounceTime(500)).subscribe((x) => this.setPlayer(x));
  }

  protected setPlayer(e: any): void {
    this.dataService.setValue(e);
  }
}
