import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  playSound(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
  }

  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
