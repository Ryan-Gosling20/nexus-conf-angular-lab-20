# NEXUS CONF — Angular

Учебный проект для лабораторной работы №20. Лендинг IT-конференции реализован на Angular с модульной архитектурой, компонентами и сервисом данных.

## Реализованная архитектура

- `AppModule` — корневой модуль, объявленный через `@NgModule`.
- `HeaderComponent` — шапка лендинга и навигация.
- `SpeakersListComponent` — получает данные из сервиса в `ngOnInit` и отображает коллекцию через `*ngFor`.
- `SpeakerCardComponent` — принимает объект спикера через `@Input()`.
- `SpeakersService` — singleton-сервис с `@Injectable({ providedIn: 'root' })`, возвращающий четыре mock-объекта.

Поток данных:

```text
SpeakersService → SpeakersListComponent → SpeakerCardComponent
      DI                 *ngFor                 @Input
```

## Требования

- Node.js 20.19+ либо актуальная совместимая версия;
- npm 11+.

Глобально устанавливать Angular CLI не требуется: локальная версия находится в зависимостях проекта.

## Установка и запуск

```bash
npm install
npm start
```

После запуска откройте `http://localhost:4200`.

## Production-сборка

```bash
npm run build
```

Результат будет создан в каталоге `dist/nexus-conf-angular`.

## Структура

```text
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── speaker-card/
│   │   └── speakers-list/
│   ├── models/speaker.ts
│   ├── services/speakers.service.ts
│   ├── app-module.ts
│   ├── app.html
│   └── app.ts
├── assets/
│   ├── speakers/
│   └── conference-banner.png
└── styles.css
```

## Основные учебные элементы

```ts
@Injectable({ providedIn: 'root' })
export class SpeakersService {}
```

```ts
constructor(private speakersService: SpeakersService) {}

ngOnInit(): void {
  this.speakers = this.speakersService.getSpeakers();
}
```

```html
<app-speaker-card
  *ngFor="let speaker of speakers"
  [speaker]="speaker"
></app-speaker-card>
```
