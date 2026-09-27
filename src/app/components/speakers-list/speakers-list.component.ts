import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../models/speaker';
import { SpeakersService } from '../../services/speakers.service';

@Component({
  selector: 'app-speakers-list',
  standalone: false,
  styleUrl: './speakers-list.component.css',
  templateUrl: './speakers-list.component.html',
})
export class SpeakersListComponent implements OnInit {
  speakers: Speaker[] = [];

  constructor(private speakersService: SpeakersService) {}

  ngOnInit(): void {
    this.speakers = this.speakersService.getSpeakers();
  }
}
