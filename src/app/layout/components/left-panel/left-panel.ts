import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayout } from '../base';

@Component({
  selector: 'ui-left-panel',
  styleUrl: './left-panel.scss',
  imports: [NgTemplateOutlet],
  host: {
    class: 'ui-left-panel',
  },
  templateUrl: './left-panel.html',
})
export class LeftPanel extends BaseLayout {}
