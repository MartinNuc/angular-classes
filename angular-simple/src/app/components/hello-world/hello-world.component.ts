import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input()
  count: number;

  @Output()
  onIncrement = new EventEmitter<void>();

  increment() {
    this.count++;
    this.onIncrement.emit();
    console.log(this.count);
  }

  ngOnInit() {
    this.count = 0;
  }

}
