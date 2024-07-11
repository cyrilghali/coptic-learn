import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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

  loadSound(src: string) {
    this.audio.load();
  }

  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
