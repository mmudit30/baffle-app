import { Component, OnInit } from '@angular/core';
import {zodiacs} from '../../assets/zodiacs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlopen='url(\'';
  urlclose='\')';

  zodiacs = zodiacs;

  constructor() { }

  ngOnInit() {
  }

}
