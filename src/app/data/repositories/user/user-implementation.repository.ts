import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  create(params: UserModel): Observable<UserEntity> {
    return this.http
      .post<UserModel>(this.domainApi + '/user', params)
      .pipe(map(this.userMapper.mapTo));
  }

  findAll(): Observable<UserEntity[]> {
    return this.http.get<UserModel[]>(this.domainApi + '/user').pipe(
      map((response: UserModel[]) => {
        return response.map((userModel: UserModel) =>
          this.userMapper.mapTo(userModel)
        );
      })
    );
  }

  edit(id: number, params: UserModel): Observable<UserEntity> {
    return this.http
      .put<UserModel>(this.domainApi + '/user/' + id, params)
      .pipe(map(this.userMapper.mapTo));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.domainApi + '/user/' + id);
  }
}
