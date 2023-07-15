import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { subTypesI } from '../../interfaces/sub-types';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Input() userEdit?: UserEntity;
  @Input() documentTypes: subTypesI[] = [];
  @Input() genders: subTypesI[] = [];
  @Output() submitForm = new EventEmitter();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      documentTypeId: [null, Validators.required],
      documentNumber: [null, Validators.required],
      genderId: [null, Validators.required],
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
    user.documentTypeId = parseInt(user.documentTypeId);
    user.genderId = parseInt(user.genderId);

    this.submitForm.emit(user);
    this.userForm.reset();
  }

  showError(inputNane: string) {
    const { pristine, errors, touched } = this.userForm.controls[inputNane];
    return !pristine && errors && touched;
  }
}
