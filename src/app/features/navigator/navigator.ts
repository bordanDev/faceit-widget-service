import { Component, inject } from "@angular/core";
import { DataService } from "../../api/data.service";
import { UiModule } from "../../ui";

@Component({
  selector: "ui-navigator",
  imports: [UiModule],
  templateUrl: "./navigator.html",
  styleUrl: "./navigator.scss"
})
export class Navigator {
  private dataService = inject(DataService);

  protected setPlayer(e: any): void {
    this.dataService.setValue(e);
  }
}
