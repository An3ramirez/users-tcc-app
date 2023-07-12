import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserCreateUseCase } from '../domain/usecases/user-create.usecase';
import { UserImplementationRepository } from '../data/repositories/user/user-implementation.repository';

@NgModule({
  declarations: [],
  providers: [
    UserCreateUseCase,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
