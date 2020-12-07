import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "upvote",
  templateUrl: "./upvote.component.html",
  styleUrls: ["./upvote.component.css"]
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();
  constructor() {}

  onClick() {
    this.vote.emit({});
  }
}
