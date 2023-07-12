import { Observable } from 'rxjs';
import { UseCaseId } from 'src/app/base/use-case';
import { UserRepository } from '../repositories/user.repository';
import { UserModel } from '../models/user.model';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class UserDeleteUseCase implements UseCaseId<number, UserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(id: number): Observable<UserModel> {
    return this.userRepository.delete(id);
  }
}
