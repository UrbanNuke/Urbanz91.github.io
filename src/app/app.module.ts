import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainWidgetComponent } from './components/main-widget/main-widget.component';
import { TemperaturWidgetComponent } from './components/temperatur-widget/temperatur-widget.component';
import { FollowersWidgetComponent } from './components/followers-widget/followers-widget.component';
import { CountryFilter } from './country-filter.pipe';
import { SelectedTypePipe } from './selected-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    TemperaturWidgetComponent,
    FollowersWidgetComponent,
    CountryFilter,
    SelectedTypePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
