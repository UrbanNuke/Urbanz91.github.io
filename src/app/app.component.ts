import { countries$ } from 'src/mocks/countries';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Новостной виджет';
  public countries$: Observable<ICountry[]> = countries$;
  public selectedType: string = 'Россия';

  public ngOnInit() {

  }
}
