import { Component, HostBinding, input, InputSignal, ViewEncapsulation } from "@angular/core";
import { UiIcon } from "../icons/icon";
import { IconsModule } from "../icons/icons.module";

@Component({
  selector: "ui-avatar",
  imports: [IconsModule, UiIcon],
  templateUrl: "./avatar.html",
  styleUrl: "./avatar.scss",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ui-avatar"
  },
  styles: []
})
export class Avatar {
  public type: InputSignal<AvatarType> = input<AvatarType>("data");
  public value = input();
  public size: InputSignal<AvatarSize> = input<AvatarSize>("middle");

  @HostBinding("class")
  protected get elementSize() {
    return `ui-avatar-${this.size()}`;
  }

  @HostBinding("style.background-image")
  protected get backgroundImage() {
    return this.type() === "photo" ? `url(${this.value()})` : "none";
  }
}

export type AvatarType = "data" | "photo" | "icon";

export type AvatarSize = "large" | "middle" | "small";
