import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {
  present: any;

  constructor() {}

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {}
}
