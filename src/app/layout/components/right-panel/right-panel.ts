import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayout } from '../base';

@Component({
  selector: 'ui-right-panel',
  styleUrl: './right-panel.scss',
  imports: [NgTemplateOutlet],
  host: {
    class: 'ui-right-panel',
  },
  templateUrl: './right-panel.html',
})
export class RightPanel extends BaseLayout {}
