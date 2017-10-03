import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timestamp-list',
  templateUrl: './timestamp-list.component.html',
  styleUrls: ['./timestamp-list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  items = [];

  constructor() { }

  ngOnInit() {
  }

}
