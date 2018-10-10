import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('show', 
        style ({
          'margin-top': '20px',
          display: 'block',
          opacity: 1
      })),
      state('hide', 
        style ({
          display: 'none',
          opacity: 0
      })),
      transition('show => hide', [
        animate('0s')
      ]),
      transition('hide => show', [
        animate('0.5s ease-out')
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'animation';
  sectionState: string = 'hide';
  changeState() {
    this.sectionState =  this.sectionState === 'hide'? 'show': 'hide';
  }
}
