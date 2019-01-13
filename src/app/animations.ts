import {animate, state, style, transition, trigger} from '@angular/animations';
import {translateType} from '@angular/compiler-cli/src/ngtsc/translator';


export let fade = trigger('fade', [
  state('void', style({ opacity: 0})),
  transition(':enter, :leave', [
    animate(1500)
  ]),
]);


export let slideIn = trigger('slideIn', [
  state('void', style({ transform: 'translateX(-50%)'})),
  transition(':enter, :leave', [
    animate(1000)
  ]),
]);
