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
  codes = ['defaultCode', 'code1', 'code2', 'code3', 'code4', 'code5', 'code6', 'code7', 'code8', 'code9', 'code10', 'code11'];

  ngOnInit() {
  }

  constructor(private modalService: NgbModal) {}

  openDialog(i: number, modal) {
    if (i === 11) {
      this.i = ('finale');
    } else {
      this.i = i;
    }
    this.code = this.codes[i];
    this.modalService.open(modal);
  }


  closeDialog(modal) {
    this.modalService.dismissAll(modal);
  }

  error() {
    console.log('wrong code');
  }

  checkCode(event: any) {
    this.codeRight = (event.target.value === this.code);
  }
}
