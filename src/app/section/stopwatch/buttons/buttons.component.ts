import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  executeButton(command: string) {
    // 부모 컴포넌트에게 이벤트를 전달
    this.clickEvent.emit(command);
  }

  ngOnInit(): void {}
}
