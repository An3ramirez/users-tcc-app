import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';

export abstract class UserRepository {
  abstract findAll(): Observable<UserEntity[]>;

  abstract create(params: UserModel): Observable<UserEntity>;

  abstract edit(id: number, params: UserModel): Observable<UserEntity>;

  abstract delete(id: number): Observable<void>;
}
