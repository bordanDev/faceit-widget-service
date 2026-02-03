import { Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Theme } from "./types/theme.type";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  public get value(): Signal<Theme> {
    return this._value.asReadonly();
  }

  private _value: WritableSignal<Theme> = signal<Theme>("system");

  public set(theme: Theme): void {
    this._value.set(theme);
  }

  public getNativeTheme(): Theme {
    const themeVariants = ["dark", "light", "system"] as Theme[];
    const result = themeVariants.find((theme) => {
      let result = window.matchMedia(`(prefers-color-scheme: ${theme})`);
      return result.matches;
    });

    return result ?? "light";
  }

  public init(): void {
    const theme = this.getNativeTheme();
    this.set(theme);
    document.body.classList.add(this.value());
  }
}
