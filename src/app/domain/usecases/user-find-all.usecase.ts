import { Observable } from 'rxjs';
import { UseCase } from 'src/app/base/use-case';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class UserFindAllUseCase implements UseCase<UserEntity, UserEntity[]> {
  constructor(private userRepository: UserRepository) {}

  execute(): Observable<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
