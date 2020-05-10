import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ZodiacService } from './zodiac.service';
import { MemeComponent } from './meme/meme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CalendarComponent,
    MemeComponent,
  ],
  imports: [ 
    FormsModule,  
    MbscModule, 
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ZodiacService],
  bootstrap: [AppComponent]
})
export class AppModule {}
