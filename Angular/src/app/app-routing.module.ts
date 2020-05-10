import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MemeComponent } from './meme/meme.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', 
    redirectTo:'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'calendar', component: CalendarComponent
  },
  {
    path: 'meme', component: MemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
