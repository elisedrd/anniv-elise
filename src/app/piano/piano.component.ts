import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  counterRight = 0;
  code = ['b3', 'w4', 'w3', 'b6', 'w8', 'w6', 'w6', 'w7', 'b1', 'w12'];
  clue = 'BRUN';
  right = false;

  constructor() { }

  ngOnInit() {
  }

  pushKey(i) {
    if (!this.right) {
      if (i === this.code[this.counterRight]) {
        this.soundRight();
        this.counterRight += 1;
      } else if (this.counterRight !== 0) {
        this.reset();
      }
      this.checkCode();
      console.log(this.counterRight);
      console.log(i);
    }
  }

  checkCode() {
    if (this.counterRight === this.code.length) {
      this.success();
    } else {
      this.right = false;
    }
    console.log(this.right);
  }

  reset() {
    this.right = false;
    this.counterRight = 0;
    this.soundWrong();
  }

  success() {
    this.soundSuccess();
    this.right = true;
  }

  soundSuccess() {
    let audio = new Audio();
    audio.src = '../../../assets/audio/success.wav';
    audio.volume = 0.1;
    audio.load();
    audio.play();
  }

  soundWrong() {
    let audio = new Audio();
    audio.src = '../../../assets/audio/rewind.wav';
    audio.volume = 0.1;
    audio.load();
    audio.play();
  }

  soundRight() {
    let audio = new Audio();
    audio.src = '../../../assets/audio/a1s.wav';
    audio.volume = .01;
    audio.load();
    audio.play();
  }

}
