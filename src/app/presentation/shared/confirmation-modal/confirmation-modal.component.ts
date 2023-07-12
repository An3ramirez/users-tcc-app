import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  message: string = '';

  constructor(public bsModalRef: BsModalRef) {}

  close() {
    this.confirm(false);
  }

  confirm(confirmed: boolean) {
    this.bsModalRef.hide();
    this.onClose.emit(confirmed);
  }
}
