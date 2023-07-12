import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserEntity } from 'src/app/data/repositories/user/entities/user-entity';

export abstract class UserRepository {
  abstract create(params: UserEntity): Observable<UserModel>;
}
