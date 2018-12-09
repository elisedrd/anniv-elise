import { Component, OnInit } from '@angular/core';
import {toInteger} from '@ng-bootstrap/ng-bootstrap/util/util';
import {isNull, isNullOrUndefined} from 'util';

@Component({
  selector: 'app-num-padlock',
  templateUrl: './num-padlock.component.html',
  styleUrls: ['./num-padlock.component.css']
})
export class NumPadlockComponent implements OnInit {
  current = [2, 4, 0, 2];
  code = [2, 4, 0, 5];
  ok = false;

  constructor() { }

  onChange(digit, newValue) {
    this.current[digit] = +newValue;
    console.log(digit);
    console.log(this.current);
    console.log(this.checkCode());
  }

  decrease(digit) {
    this.current[digit] === 0 ? this.current[digit] = 9 : this.current[digit] -= 1;
    console.log(this.current);
    console.log(this.checkCode());
  }

  increase(digit) {
    this.current[digit] = (this.current[digit] + 1) % 10;
    console.log(this.current);
    console.log(this.checkCode());
  }

  checkCode(): boolean {
    console.log(this.code);
    for ( let i in this.code ) {
      if (this.code[i] !== this.current[i]) {
        this.ok = false;
        return false;
      }
    }
    this.ok = true;
    return true;
  }

  ngOnInit() {
  }

}
