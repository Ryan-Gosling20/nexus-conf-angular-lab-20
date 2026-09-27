import { Component, Input } from '@angular/core';
import { Speaker } from '../../models/speaker';

@Component({
  selector: 'app-speaker-card',
  standalone: false,
  styleUrl: './speaker-card.component.css',
  templateUrl: './speaker-card.component.html',
})
export class SpeakerCardComponent {
  @Input({ required: true }) speaker!: Speaker;
}
