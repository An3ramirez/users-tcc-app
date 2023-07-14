import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';

export abstract class UserRepository {
  abstract findAll(): Observable<UserModel[]>;

  abstract create(params: UserEntity): Observable<UserModel>;

  abstract edit(id: number, params: UserEntity): Observable<UserModel>;

  abstract delete(id: number): Observable<void>;
}
