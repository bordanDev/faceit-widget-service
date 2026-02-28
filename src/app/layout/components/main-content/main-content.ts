import { NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { BaseLayout } from "../base/base-layout.class";

@Component({
  selector: "ui-main-content",
  styleUrl: "./main-content.scss",
  imports: [NgTemplateOutlet],
  host: {
    class: "ui-main-content"
  },
  templateUrl: "./main-content.html"
})
export class MainContent extends BaseLayout {}
