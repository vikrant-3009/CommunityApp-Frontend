import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() confirmEvent = new EventEmitter<boolean> ();

  constructor() { }

  ngOnInit(): void { }

  confirm() {
    this.confirmEvent.emit(true);
  }

  dismiss() {
    this.confirmEvent.emit(false);
  }

}
