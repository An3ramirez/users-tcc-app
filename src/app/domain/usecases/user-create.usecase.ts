import { Observable } from 'rxjs';
import { UseCase } from 'src/app/base/use-case';
import { UserRepository } from '../repositories/user.repository';
import { UserModel } from '../models/user.model';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class UserCreateUseCase implements UseCase<UserEntity, UserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(params: UserEntity): Observable<UserModel> {
    return this.userRepository.create(params);
  }
}
