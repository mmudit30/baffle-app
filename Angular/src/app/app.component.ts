import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'hack-app';
	private data: any = [];
	constructor(private http: HttpClient) {}

	getData(day, month) {
		// code snippet from https://coursesweb.net/javascript/zodiac-signs_cs
		var getZodiac = function(day, month) {
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
		};

		getMeme(day, month) {
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

		const zodiac = horoscope.find(({ zodiac }) => zodiac === tmp).sub;
		return zodiac;
	}

		this.http.get(`https://meme-api.herokuapp.com/gimme/${this.getMeme(day, month)}`).subscribe((res) => {
			this.data = res;
			console.log(this.data);
		});
	}
}
