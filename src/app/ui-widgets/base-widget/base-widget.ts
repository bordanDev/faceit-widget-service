import { Component, computed, effect, inject, signal, ViewEncapsulation } from "@angular/core";
import { ApiService } from "../../api/api.service";
import { DataService } from "../../api/data.service";
import { FaceitPlayerProfile } from "../../app";
import { UiLevelProgress } from "../../ui/level-progress";

@Component({
  selector: "ui-base-widget",
  imports: [UiLevelProgress],
  templateUrl: "./base-widget.html",
  styleUrl: "./base-widget.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-base-widget"
  }
})
export class UiBaseWidget {
  protected api = inject(ApiService);
  protected dataService = inject(DataService);

  protected readonly userConfig = signal<FaceitPlayerProfile>({} as FaceitPlayerProfile);
  protected readonly image = computed(() => this.userConfig().avatar);
  protected readonly nickName = computed(() => this.userConfig().nickname);
  protected readonly level = computed(() => this.userConfig().games["cs2"].skill_level);
  protected readonly elo = computed(() => this.userConfig().games["cs2"].faceit_elo);

  constructor() {
    effect(() => {
      this.findPlayerConfig(this.dataService.value());
    });
  }

  private findPlayerConfig(name: string): void {
    this.api.getPlayerByName(name).subscribe((config) => {
      this.userConfig.set(config);
    });
  }
}
