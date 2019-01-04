import { Component, OnInit } from '@angular/core';
import {fade, slideIn} from '../animations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-num-padlock',
  templateUrl: './num-padlock.component.html',
  styleUrls: ['./num-padlock.component.css'],
  animations: [
    fade,
    slideIn
  ]
})

export class NumPadlockComponent implements OnInit {
  current = [0, 0, 0, 0];
  codes = [[0, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [3, 0, 0, 0], [4, 0, 0, 0], [5, 0, 0, 0], [6, 0, 0, 0], [7, 0, 0, 0], [8, 0, 0, 0], [9, 0, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
  code = [0, 0, 0, 0];
  ok = false;

constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        let nb = params.get('nb');
        if (parseInt(nb, 10) < this.codes.length) {
          this.code = this.codes[parseInt(nb, 10)];
        }
      }
    );
    this.checkCode();
  }

  decrease(digit) {
    this.current[digit] === 0 ? this.current[digit] = 9 : this.current[digit] -= 1;
    console.log('current: ' + this.current);
    console.log('code found ? ' + this.checkCode());
  }

  increase(digit) {
    this.current[digit] = (this.current[digit] + 1) % 10;
    console.log('current: ' + this.current);
    console.log('code found ? ' + this.checkCode());
  }

  checkCode(): boolean {
    console.log('code: ' + this.code);
    for ( let i in this.code ) {
      if (this.code[i] !== this.current[i]) {
        this.ok = false;
        return false;
      }
    }
    this.ok = true;
    this.soundSuccess();
    return true;
  }

  // TODO creer service audio
  soundSuccess() {
    let audio = new Audio();
    audio.src = '../../../assets/audio/success.wav';
    audio.volume = 0.1;
    audio.load();
    audio.play();
  }
}
