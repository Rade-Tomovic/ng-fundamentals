import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="[ '/events', event.id ]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}}</h2>
    <div>Date: {{event?.date | date}}</div>
    <div>Time: {{event?.time}}</div>
    <div>Price: {{event?.price | currency}}</div>
    <div [ngSwitch]="event?.time" [ngStyle]="getStartTimeClass()">
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>
      <span>Location: {{event?.location.address}}</span>
      <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
    </div>
  </div>`,
  styles: [`
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb }
  `]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  constructor() { }

  ngOnInit(): void { }

  getStartTimeClass(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    if (this.event && this.event.time === '10:00 am') {
      return {color: '#ee9b96', 'font-weight': 'bold'};
    }
    return {};
  }
}
