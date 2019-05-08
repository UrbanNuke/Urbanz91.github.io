import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatur-widget',
  templateUrl: './temperatur-widget.component.html',
  styleUrls: ['./temperatur-widget.component.scss']
})
export class TemperaturWidgetComponent implements OnInit {
  @Input() public weather;
  public constructor() { }

  public ngOnInit() {
  }

}
