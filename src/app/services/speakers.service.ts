import { Injectable } from '@angular/core';
import { Speaker } from '../models/speaker';

@Injectable({ providedIn: 'root' })
export class SpeakersService {
  private readonly speakers: Speaker[] = [
    { id: 1, name: 'Анна Волкова', topic: 'Как дизайн-системы ускоряют продукт', photoUrl: 'assets/speakers/anna.svg', role: 'Lead Product Designer', company: 'CloudLab', time: '14:30', room: 'Зал A', accent: 'coral' },
    { id: 2, name: 'Михаил Орлов', topic: 'Масштабируемая архитектура Angular', photoUrl: 'assets/speakers/mikhail.svg', role: 'Frontend Architect', company: 'PixelCraft', time: '15:40', room: 'Зал B', accent: 'blue' },
    { id: 3, name: 'Елена Соколова', topic: 'Практичный искусственный интеллект', photoUrl: 'assets/speakers/elena.svg', role: 'ML Engineer', company: 'Nova AI', time: '17:20', room: 'Главная сцена', accent: 'violet' },
    { id: 4, name: 'Денис Ковалёв', topic: 'Dependency Injection без магии', photoUrl: 'assets/speakers/denis.svg', role: 'Angular Developer', company: 'NorthStack', time: '18:10', room: 'Зал A', accent: 'cyan' },
  ];

  getSpeakers(): Speaker[] {
    return this.speakers.map((speaker) => ({ ...speaker }));
  }
}
