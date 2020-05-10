import { Component, OnInit } from '@angular/core';
import {zodiacs} from '../../assets/zodiacs';
import { ZodiacService } from '../zodiac.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlopen='url(\'';
  urlclose='\')';

  zodiacs = zodiacs;

  constructor(
    private zodiacService: ZodiacService
  ) { }

  ngOnInit() {
  }

  sendData(name){
    this.zodiacService.getDataByZodiac(name);
  }



}
