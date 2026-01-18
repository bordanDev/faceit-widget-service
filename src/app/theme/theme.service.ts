import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Theme } from './types/theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _value: WritableSignal<Theme> = signal<Theme>('system');

  public readonly value: Signal<Theme> = this._value.asReadonly();

  public set(theme: Theme): void {
    this._value.set(theme);
  }

  public get(): Theme {
    return this.value();
  }

  public getNativeTheme(): Theme {
    const themeVariants = ['dark', 'light', 'no-preference'] as Theme[];
    const result = themeVariants.find((theme) => {
      let result = window.matchMedia(`(prefers-color-scheme: ${theme})`);
      return result.matches;
    });

    return result ?? 'light';
  }

  public init(): void {
    const theme = this.getNativeTheme();
    this.set(theme);
  }
}
