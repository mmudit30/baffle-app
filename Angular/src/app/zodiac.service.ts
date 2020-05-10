import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  zodiac;
  data:any;
  
	getDataByDate(day, month) {
		// code snippet from https://coursesweb.net/javascript/zodiac-signs_cs
		let memezod= this.getMemeByDate(day, month);
		this.http.get(`https://meme-api.herokuapp.com/gimme/${this.zodiac}`).subscribe((res) => {
			this.data = (res);
			console.log(this.data);
			this.router.navigate(['/meme'],{relativeTo: this.route});      
		});
	}
	getDataByZodiac(passedZodiac) {
		// code snippet from https://coursesweb.net/javascript/zodiac-signs_cs
		let memezod= this.getMemeByZodiac(passedZodiac);
		this.http.get(`https://meme-api.herokuapp.com/gimme/${this.zodiac}`).subscribe((res) => {
			this.data = (res);
			console.log(this.data);
			this.router.navigate(['/meme'],{relativeTo: this.route});
		});
	}

	getMemeByDate(day, month) {
		const horoscope = [
			{ zodiac: 'Capricorn', sub: 'capricorns' },
			{ zodiac: 'Aquarius', sub: 'aquarius' },
			{ zodiac: 'Pisces', sub: 'piscesastrology' },
			{ zodiac: 'Aries', sub: 'astrologymemes' },
			{ zodiac: 'Taurus', sub: 'astrologymemes' },
			{ zodiac: 'Gemini', sub: 'astrologymemes' },
			{ zodiac: 'Cancer', sub: 'astrologymemes' },
			{ zodiac: 'Leo', sub: 'LeoAstrology' },
			{ zodiac: 'Virgo', sub: 'virgoseason' },
			{ zodiac: 'Libra', sub: 'astrologymemes' },
			{ zodiac: 'Scorpio', sub: 'Scorpio' },
			{ zodiac: 'Sagittarius', sub: 'astrologymemes' }
		];
		var tmp = this.getZodiac(day, month);
		this.zodiac = tmp;
		const zodiac = horoscope.find(({ zodiac }) => zodiac === tmp).sub;
		return zodiac;
  	}
  
	getMemeByZodiac(passedZodiac) {
		const horoscope = [
			{ zodiac: 'Capricorn', sub: 'capricorns' },
			{ zodiac: 'Aquarius', sub: 'aquarius' },
			{ zodiac: 'Pisces', sub: 'piscesastrology' },
			{ zodiac: 'Aries', sub: 'astrologymemes' },
			{ zodiac: 'Taurus', sub: 'astrologymemes' },
			{ zodiac: 'Gemini', sub: 'astrologymemes' },
			{ zodiac: 'Cancer', sub: 'astrologymemes' },
			{ zodiac: 'Leo', sub: 'LeoAstrology' },
			{ zodiac: 'Virgo', sub: 'virgoseason' },
			{ zodiac: 'Libra', sub: 'astrologymemes' },
			{ zodiac: 'Scorpio', sub: 'Scorpio' },
			{ zodiac: 'Sagittarius', sub: 'astrologymemes' }
		];
		var tmp = passedZodiac;
		this.zodiac=tmp;
		const zodiac = horoscope.find(({ zodiac }) => zodiac === tmp).sub;
		return zodiac;
	}


	getZodiac(day, month) {
		var zodiac = [
			'',
			'Capricorn',
			'Aquarius',
			'Pisces',
			'Aries',
			'Taurus',
			'Gemini',
			'Cancer',
			'Leo',
			'Virgo',
			'Libra',
			'Scorpio',
			'Sagittarius',
			'Capricorn'
		];
		var last_day = [ '', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19 ];
		return day > last_day[month] ? zodiac[month * 1 + 1] : zodiac[month];
	}

}
