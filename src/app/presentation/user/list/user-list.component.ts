import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { UserModel } from 'src/app/domain/models/user.model';
import { ConfirmationModalComponent } from 'src/app/presentation/shared/confirmation-modal/confirmation-modal.component';
import { subTypesI } from '../../interfaces/sub-types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Output() onDeleteEvent = new EventEmitter<number>();
  @Output() onEditEvent = new EventEmitter<number>();
  @Output() onCreateEvent = new EventEmitter<number>();

  @Input() users: UserEntity[] = [];
  @Input() documentTypes: subTypesI[] = [];
  @Input() genders: subTypesI[] = [];
  @Input() loaderEdit: boolean = false;
  @Input() loaderDelete: boolean = false;
  @Input() loaderCreate: boolean = false;

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  onDelete(id: number) {
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState: {
        message: '¿Estás seguro de eliminar el usuario?',
      },
    });

    this.bsModalRef.content.onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onDeleteEvent.emit(id);
      }
    });
  }

  onEdit(id: number) {
    this.onEditEvent.emit(id);
  }

  nameDocumentType(id: number): string {
    const documentType = this.documentTypes.find((item) => item.id == id);
    return documentType?.name ?? id.toString();
  }

  nameGender(id: number): string {
    const gender = this.genders.find((item) => item.id == id);
    return gender?.name ?? id.toString();
  }
}
