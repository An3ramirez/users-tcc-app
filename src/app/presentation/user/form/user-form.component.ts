import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { UserModel } from 'src/app/domain/models/user.model';
import { UserCreateUseCase } from 'src/app/domain/usecases/user-create.usecase';

interface subTypesI {
  id: string;
  name: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Input() userEdit?: UserModel;
  @Output() submitForm = new EventEmitter();

  userForm: FormGroup;
  documentTypes: subTypesI[] = [
    {
      id: '1',
      name: 'Cedula',
    },
    {
      id: '2',
      name: 'Passaporte',
    },
  ];
  genders: subTypesI[] = [
    {
      id: '1',
      name: 'Mujer',
    },
    {
      id: '2',
      name: 'Hombre',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [this.userEdit?.firstName || '', Validators.required],
      lastName: [this.userEdit?.lastName || '', Validators.required],
      documentType: [this.userEdit?.documentType || '', Validators.required],
      documentNumber: [
        this.userEdit?.documentNumber || '',
        Validators.required,
      ],
      gender: [this.userEdit?.gender || '', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmitForm(): void {
    if (this.userForm.invalid) {
      return;
    }

    console.log('🚀 ~ send form');
    this.submitForm.emit(this.userForm.value);
  }

  showError(inputNane: string) {
    const { pristine, errors, touched } = this.userForm.controls[inputNane];
    return !pristine && errors && touched;
  }
}
