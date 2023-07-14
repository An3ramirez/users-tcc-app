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
    return this.http.post<UserEntity>(this.domainApi + '/user', params);
  }

  findAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.domainApi + '/user');
  }

  edit(id: number, params: UserEntity): Observable<UserModel> {
    return this.http.put<UserModel>(this.domainApi + '/user/' + id, params);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.domainApi + '/user/' + id);
  }
}
