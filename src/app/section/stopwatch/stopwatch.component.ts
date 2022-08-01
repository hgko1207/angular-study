import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  //providers: [PageToggleService],
})
export class StopwatchComponent implements OnInit {
  present: any;

  constructor(private pageToggleService: PageToggleService) {}

  goClock() {
    this.pageToggleService.goPage('/clock');
  }

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {}
}
