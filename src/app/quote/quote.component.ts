import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, 'Motivation', 'Find an online version and watch merlin find his son'),
    new Quote(2,'Attitude','I have to buy cookies for the parrot'),
    new Quote(3,'Passion','Diana has her birthday coming up soon'),
    new Quote(4,'Happiness','Pupper likes expensive snacks'),
    new Quote(5,'Change','Damn Math'),
    new Quote(6,'Inspiration','Cause I am an evil overlord'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
