import { Component } from '@angular/core';
import { UserModel } from 'src/app/domain/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { UserImplementationRepositoryMapper } from 'src/app/data/repositories/user/mappers/user-repository.mapper';
import {
  UserDeleteUseCase,
  UserFindAllUseCase,
  UserCreateUseCase,
  UserEditUseCase,
} from 'src/app/domain/usecases';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';

declare var window: any;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  userEdit?: UserEntity;
  formModalRef: any;
  userMapper = new UserImplementationRepositoryMapper();

  users: UserEntity[] = [];
  loader = {
    create: false,
    edit: false,
    delete: false,
  };

  constructor(
    private toastr: ToastrService,
    private userFindAllUseCase: UserFindAllUseCase,
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
    this.userFindAllUseCase.execute().subscribe({
      next: (result) => {
        this.users = result;
      },
      error: (error) => {
        console.log(
          '🚀 ~ file: container.component.ts:40 ~ ContainerComponent ~ getUsers ~ error:',
          error
        );
      },
    });
  }

  savedForm(user: UserEntity) {
    console.log('saved form: ', user);

    this.formModalRef.hide();
    if (!!this.userEdit) {
      this.handleUpdateUser(user);
    } else {
      this.handleCreateUser(user);
    }
  }

  handleCreateUser(user: UserEntity) {
    this.loader.create = true;
    const newUser = this.userMapper.mapFrom(user);

    this.userCreateUseCase.execute(newUser).subscribe({
      next: (response) => {
        this.users = [...this.users, response];
      },
      error: (error) => {
        console.log('error');
        this.loader.create = false;
      },
      complete: () => {
        this.loader.create = false;
      },
    });
  }

  handleUpdateUser(user: UserEntity) {
    this.loader.edit = true;
    const newUser = this.userMapper.mapFrom(user);
    let id = this.userEdit?.id || 0;
    this.userEdit = undefined;

    this.userEditUseCase.execute(id, newUser).subscribe({
      next: (response) => {
        const index = this.users.findIndex((user) => user.id === response.id);

        if (index !== -1) {
          this.users[index] = response;
        }
      },
      error: (error) => {
        console.log('error');
        this.loader.edit = false;
      },
      complete: () => {
        console.log('Complete');
        this.loader.edit = false;
      },
    });
  }

  deteUser(id: number) {
    this.loader.delete = true;
    this.userDeleteUseCase.execute(id).subscribe({
      next: (value) => {
        console.log('response');
        this.toastr.success('Exito!', 'El usuario fue eliminado correctamente');
      },
      error: (error) => {
        this.toastr.error('Error inesperado');
        this.loader.delete = false;
      },
      complete: () => {
        const indice = this.users.findIndex((user) => user.id === id);

        if (indice !== -1) {
          this.users.splice(indice, 1);
        }
        this.loader.delete = false;
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

  setCreateUser() {
    this.userEdit = undefined;
    console.log('create open modal', this.userEdit);
    this.formModalRef.show();
  }
}
