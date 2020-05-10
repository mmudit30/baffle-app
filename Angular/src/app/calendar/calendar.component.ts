import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { mobiscroll, MbscCalendarOptions } from '@mobiscroll/angular';
import { ZodiacService } from '../zodiac.service';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'dark'
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  
  dateofbirth: Date;
    
  calendarCenterSettings: MbscCalendarOptions = {
      display: 'center'
  };
  
  constructor( public zodiacService : ZodiacService) {
   }

  ngOnInit() {
  }
  setDate() {
    if(this.dateofbirth == undefined){
      alert('Add Date to submit');
      return;
    }
    let strdate = this.dateofbirth.toLocaleDateString();
    let month = strdate.substring(0,strdate.indexOf('/'));
    let day = strdate.substring(strdate.indexOf('/')+1, strdate.lastIndexOf('/'));
    console.log("month "+month);
    console.log("day "+day);
    this.zodiacService.getDataByDate(day, month);
  }

}
