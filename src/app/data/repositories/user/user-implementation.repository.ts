import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';

import { UserRepository } from 'src/app/domain/repositories/user.repository';
import { UserModel } from 'src/app/domain/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }
  create(params: UserEntity): Observable<UserModel> {
    return of(this.userMapper.mapFrom(params));
    /* return this.http
      .post<UserEntity>('https://example.com/login', params)
      .pipe(map(this.userMapper.mapFrom)); */
  }
}
