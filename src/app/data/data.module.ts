import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserImplementationRepository } from '../data/repositories/user/user-implementation.repository';
import { UserCreateUseCase } from '../domain/usecases/user-create.usecase';
import { UserFindAllUseCase } from '../domain/usecases/user-find-all.usecase';
import { UserEditUseCase } from '../domain/usecases/user-edit.usecase';
import { UserDeleteUseCase } from '../domain/usecases/user-delete.usecase';

@NgModule({
  declarations: [],
  providers: [
    UserCreateUseCase,
    UserFindAllUseCase,
    UserEditUseCase,
    UserDeleteUseCase,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
