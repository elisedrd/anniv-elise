import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i;
  codeRight = false;
  code = 'defaultCode';
  codes = ['defaultCode', 'C0D3', 'L2HzKu', 'g6VJVA', 'Sn5ayZ', '3c2XKf', 'VD9rTb', '83241', '7ewKAU', 'DJM6DX', 'TweP8Y', 'ySH8Mjq'];
  wrongCode = false;
  dateIsGucci;
  targetDate;
  currentDate;
  days;
  hours;
  minutes;
  seconds;

  ngOnInit() {
    const self = this;
    setInterval(function() {
      if (!self.dateIsGucci) {
        self.updateCountdown();
      }
      }, 1000);
  }

  constructor(private modalService: NgbModal) {
    this.targetDate = new Date('2019/01/17 19:17');
    this.currentDate = new Date();
    this.checkDate();
    this.days = this.targetDate.getDay() - this.currentDate.getDay();
    this.hours = this.targetDate.getHours() - this.currentDate.getHours();
    this.minutes = this.targetDate.getMinutes() - this.currentDate.getMinutes();
    this.seconds = this.targetDate.getSeconds() - this.currentDate.getSeconds();
    if (this.seconds < 0) {
      this.minutes -= 1;
      this.seconds += 60;
    }
    if (this.minutes < 0) {
      this.hours -= 1;
      this.minutes += 60;
    }
    if (this.hours < 0) {
      this.days -= 1;
      this.hours += 24;
    }
  }

  updateCountdown() {
    this.currentDate = new Date();
    this.seconds -= 1;
    if (this.seconds === -1) {
      this.seconds += 60;
      this.minutes -= 1;
      if (this.minutes === -1) {
        this.minutes += 60;
        this.hours -= 1;
        if (this.hours === -1) {
          this.hours += 24;
          this.days -= 1;
        }
      }
    }

    console.log('days' + this.days);
    console.log('hours' + this.hours);
    console.log('minutes' + this.minutes);
    console.log('seconds' + this.seconds);

    this.checkDate();
  }

  checkDate() {
    if (this.targetDate.valueOf() <= this.currentDate.valueOf()) {
      this.dateIsGucci = true;
    }
  }

  openDialog(i: number, modal) {
    this.i = i;
    this.wrongCode = false;
    this.code = this.codes[i];
    this.modalService.open(modal);
  }


  closeDialog(modal) {
    this.wrongCode = false;
    this.modalService.dismissAll(modal);
  }


  isCodeRight() {
      this.codeRight ? this.closeDialog(this.modalService) : this.wrongCode = true;
  }

  checkCode(event: any) {
    this.codeRight = (event.target.value === this.code);
    if (event.keyCode !== 13 ) {
      this.wrongCode = false;
    }
  }

}
