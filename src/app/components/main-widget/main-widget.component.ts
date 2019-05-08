import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICountry } from './../../../models/index';
import { countries$ } from 'src/mocks/countries';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.scss']
})
export class MainWidgetComponent implements OnInit {
  @Input() public country: ICountry;
  @Output() public typeEmitter: EventEmitter<string> = new EventEmitter();

  public countries: ICountry[] = [];
  public allTypes: string[] = [];
  public constructor() { }

  public changeType(type: string): void {
    this.typeEmitter.emit(type);
  }

  public ngOnInit(): void {
    countries$.subscribe((countries: ICountry[]) => {
      countries.forEach((country: ICountry) => {
        if (!this.allTypes.includes(country.type.countryName)) {
          this.allTypes.push(country.type.countryName);
        }
      });
    });

  }

}
