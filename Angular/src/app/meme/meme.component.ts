import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ZodiacService } from '../zodiac.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  urlopen='url(\'';
  urlclose='\')';
  data;
  zodiac;

  constructor(
    public zodiacService: ZodiacService
  ) { }

  ngOnInit() {
    this.data = this.zodiacService.data;
    // this.data={
    //   postLink: "https://redd.it/f6j8rz"
    //   ,
    //   subreddit: "piscesastrology"
    //   ,
    //   title: "Happy Pisces season lol. I saw this on insta."
    //   ,
    //   url: "https://i.redd.it/l2a9w61upyh41.jpg"
    //   }

    this.zodiac = this.zodiacService.zodiac.toUpperCase();
  }

}
