import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.sass']
})
export class InputTextComponent implements OnInit {
  @Output() emitValue = new EventEmitter();
  @Output() clearSearch = new EventEmitter();

  text: any = null;

  constructor() { }

  ngOnInit() {}

  buttonEvent(event: string) {
    if (event == 'search') {
      this.emitValue.emit(this.text);
      this.text = null;
    } else if (event == 'clear') {
      this.text = null;
      this.clearSearch.emit();
    };
  }

}
