import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DataService } from './api/data.service';
import { Layout } from './layout/layout';
import { ThemeService } from './theme/theme.service';
import { UiWidgetModule } from './ui-widgets/ui-widget.module';
import { UiModule } from './ui/ui.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UiModule, UiWidgetModule, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('faceit-pro-widget');
  private dataService = inject(DataService);
  protected setPlayer(e: any): void {
    this.dataService.setValue(e);
  }

  constructor(private themeService: ThemeService) {
    console.log(themeService.getNativeTheme());
    console.log(themeService.get());
  }
}

// 1. Детали конкретной игры (внутри объекта games)
export interface FaceitGameDetails {
  faceit_elo: number;
  game_player_id: string;
  game_player_name: string;
  game_profile_id: string;
  region: string;
  regions: Record<string, string> | null; // Часто null, но может быть объектом регионов
  skill_level: number;
  skill_level_label: string;
}

// 2. Настройки пользователя
export interface FaceitPlayerSettings {
  language: string;
}

// 3. Главный интерфейс профиля игрока
export interface FaceitPlayerProfile {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  cover_featured_image: string;

  // Ключевые поля
  verified: boolean;
  activated_at: string; // ISO Date string
  faceit_url: string;
  membership_type: string;
  memberships: string[];

  // Steam данные
  new_steam_id: string;
  steam_id_64: string;
  steam_nickname: string;

  // Сложные объекты
  friends_ids: string[];

  // Самое важное: динамические ключи (например, "cs2", "csgo")
  // Мы говорим: ключом является строка (название игры), а значением — детали игры
  games: Record<string, FaceitGameDetails>;

  // То же самое для платформ (например, "steam": "id")
  platforms: Record<string, string>;

  settings: FaceitPlayerSettings;

  // Infractions может быть null или объектом с данными о банах
  // Лучше использовать any или unknown, если структура бана неизвестна,
  // но часто это объект.
  infractions: any | null;
}
