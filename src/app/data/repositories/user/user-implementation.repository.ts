import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';

import { UserRepository } from 'src/app/domain/repositories/user.repository';
import { UserModel } from 'src/app/domain/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  domainApi = environment.urlApi;

  constructor(private http: HttpClient) {
    super();
  }
  create(params: UserEntity): Observable<UserModel> {
    return of(this.userMapper.mapFrom(params)).pipe(delay(2000));
    /* return this.http
      .post<UserEntity>('https://example.com/login', params)
      .pipe(map(this.userMapper.mapFrom)); */
  }

  all(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('assets/users.json');
  }

  edit(params: UserEntity): Observable<UserModel> {
    return of().pipe(delay(2000));
  }

  delete(id: number): Observable<UserModel> {
    return of().pipe(delay(2000));
  }
}
