import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HeaderComponent } from './components/header/header.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { SpeakersListComponent } from './components/speakers-list/speakers-list.component';

@NgModule({
  declarations: [App, HeaderComponent, SpeakerCardComponent, SpeakersListComponent],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
