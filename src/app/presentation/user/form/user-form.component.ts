import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { UserCreateUseCase } from 'src/app/domain/usecases/user-create.usecase';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  form: FormGroup;

  constructor(private userCreateUseCase: UserCreateUseCase) {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      documentType: new FormControl('', [Validators.required]),
      documentNumber: new FormControl(''),
      gender: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  guardarElemento(): void {
    console.log(
      '🚀 ~ file: user-form.component.ts:39 ~ UserFormComponent ~ guardarElemento ~ UserEntity:'
    );
    const data: UserEntity = {
      firstName: 'andres',
      lastName: '',
      documentType: '',
      documentNumber: 12323,
      gender: '',
    };
    this.userCreateUseCase
      .execute(data)
      .subscribe((resul) => console.log('Result: ', resul));
  }

  editarElemento(): void {
    // Aquí puedes implementar la lógica para editar el elemento
  }
}
