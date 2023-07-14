import { Observable } from 'rxjs';
import { UseCase } from 'src/app/base/use-case';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { Injectable, inject } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserCreateUseCase implements UseCase<UserModel, UserEntity> {
  constructor(private userRepository: UserRepository) {}

  execute(params: UserModel): Observable<UserEntity> {
    return this.userRepository.create(params);
  }
}
