import { Component } from '@angular/core';
import { UserModel } from 'src/app/domain/models/user.model';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { ToastrService } from 'ngx-toastr';
import { UserImplementationRepositoryMapper } from 'src/app/data/repositories/user/mappers/user-repository.mapper';
import {
  UserDeleteUseCase,
  UserAllUseCase,
  UserCreateUseCase,
  UserEditUseCase,
} from 'src/app/domain/usecases';

declare var window: any;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  userEdit?: UserModel;
  formModalRef: any;
  userMapper = new UserImplementationRepositoryMapper();

  users: UserModel[] = [];
  loader = {
    create: false,
    edit: false,
    delete: false,
  };

  constructor(
    private toastr: ToastrService,
    private userAllUseCase: UserAllUseCase,
    private userCreateUseCase: UserCreateUseCase,
    private userEditUseCase: UserEditUseCase,
    private userDeleteUseCase: UserDeleteUseCase
  ) {}

  ngOnInit(): void {
    this.formModalRef = new window.bootstrap.Modal(
      document.getElementById('formModal')
    );
    this.getUsers();
  }

  getUsers() {
    this.userAllUseCase.execute().subscribe({
      next: (result) => {
        this.users = result;
        console.log(
          '🚀 ~ file: container.component.ts:50 ~ ContainerComponent ~ this.userAllUseCase.execute ~ result:',
          result
        );
      },
      error: (error) => {
        console.log(
          '🚀 ~ file: container.component.ts:40 ~ ContainerComponent ~ getUsers ~ error:',
          error
        );
      },
    });
  }

  savedForm(user: UserModel) {
    console.log('saved form: ', user);
    this.formModalRef.hide();
    if (!!this.userEdit) {
      this.handleUpdateUser(user);
    } else {
      this.handleCreateUser(user);
    }
  }

  handleCreateUser(user: UserModel) {
    this.loader.create = true;
    const newUser = this.userMapper.mapTo(user);

    this.userCreateUseCase.execute(newUser).subscribe({
      next: (value) => {
        console.log('response: ', value);
      },
      error: (error) => {
        console.log('error');
      },
      complete: () => {
        this.loader.create = false;
      },
    });
  }

  handleUpdateUser(user: UserModel) {
    this.loader.edit = true;
    const newUser = this.userMapper.mapTo(user);

    this.userEditUseCase.execute(newUser).subscribe({
      next: (value) => {
        console.log('response');
      },
      error: (error) => {
        console.log('error');
      },
      complete: () => {
        console.log('Complete');
        this.loader.edit = false;
      },
    });
  }

  setEditUser(id: number) {
    this.userEdit = this.users.find((user) => user.id == id);
    if (this.userEdit) {
      this.formModalRef.show();
    } else {
      console.error('no se encontro el usuario');
      this.toastr.warning(
        'Ocurrio un error inesperado, intentalo de nuevo mas tarde',
        'Error'
      );
    }
  }

  deteUser(id: number) {
    this.loader.delete = true;
    this.userDeleteUseCase.execute(id).subscribe({
      next: (value) => {
        console.log('response');
        this.toastr.success('Exito!', 'El usuario fue eliminado correctamente');
      },
      error: (error) => {
        console.log('error');
      },
      complete: () => {
        console.log('Complete');
        this.loader.delete = false;
      },
    });
  }
}
