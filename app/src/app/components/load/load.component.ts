import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.sass']
})
export class LoadComponent implements OnInit {
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
