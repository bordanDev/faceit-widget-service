import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { FaceitPlayerProfile } from '../../app';
import { UiLevelProgress } from '../../ui/level-progress';

@Component({
  selector: 'ui-base-widget',
  imports: [UiLevelProgress],
  templateUrl: './base-widget.html',
  styleUrl: './base-widget.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ui-base-widget',
  },
})
export class UiBaseWidget {
  protected api = inject(ApiService);

  protected readonly userConfig = signal<FaceitPlayerProfile>({} as FaceitPlayerProfile);
  protected readonly image = computed(() => this.userConfig().avatar);
  protected readonly nickName = computed(() => this.userConfig().nickname);
  protected readonly level = computed(() => this.userConfig().games['cs2'].skill_level);

  ngOnInit() {
    this.api.getPlayerByName('ropz').subscribe((config) => {
      console.log(config);
      this.userConfig.set(config);
    });
  }
}
