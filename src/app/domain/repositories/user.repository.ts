import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';

export abstract class UserRepository {
  abstract all(): Observable<UserModel[]>;

  abstract create(params: UserEntity): Observable<UserModel>;

  abstract edit(params: UserEntity): Observable<UserModel>;

  abstract delete(id: number): Observable<UserModel>;
}
