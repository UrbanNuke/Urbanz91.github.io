import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-followers-widget',
  templateUrl: './followers-widget.component.html',
  styleUrls: ['./followers-widget.component.scss']
})
export class FollowersWidgetComponent implements OnInit {
  @Input() public social;

  public constructor() { }

  public ngOnInit() {
  }

}
