import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'hack-app';
	
	constructor(
		private http: HttpClient,
		public router: Router,
		public route: ActivatedRoute
		) {
		// this.getData(22, 2);
	}

	ngOnInit(): void {
		this.router.navigate(['/'],{relativeTo: this.route});		
	}

}
