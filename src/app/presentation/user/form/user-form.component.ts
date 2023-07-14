import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserModel } from 'src/app/domain/models/user.model';

interface subTypesI {
  id: number;
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
      id: 1,
      name: 'Cedula',
    },
    {
      id: 2,
      name: 'Passaporte',
    },
  ];
  genders: subTypesI[] = [
    {
      id: 1,
      name: 'Mujer',
    },
    {
      id: 2,
      name: 'Hombre',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      documentType: [null, Validators.required],
      documentNumber: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  ngOnChanges() {
    console.log('onChangess');
    if (!!this.userEdit) {
      this.userForm.patchValue(this.userEdit);
    } else {
      this.userForm.reset();
    }
  }

  onSubmitForm(): void {
    if (this.userForm.invalid) {
      return;
    }
    const user = this.userForm.value;
    user.documentType = parseInt(user.documentType);
    user.gender = parseInt(user.gender);

    this.submitForm.emit(user);
    this.userForm.reset();
  }

  showError(inputNane: string) {
    const { pristine, errors, touched } = this.userForm.controls[inputNane];
    return !pristine && errors && touched;
  }
}
