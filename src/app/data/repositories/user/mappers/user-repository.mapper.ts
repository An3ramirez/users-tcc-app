import { Mapper } from 'src/app/base/maper';
import { UserModel } from 'src/app/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';
export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return {
      firstName: param.firstName,
      lastName: param.lastName,
      documentType: param.documentType,
      documentNumber: param.documentNumber,
      gender: param.gender,
    };
  }
  mapTo(param: UserModel): UserEntity {
    return {
      firstName: param.firstName,
      lastName: param.lastName,
      documentType: param.documentType,
      documentNumber: param.documentNumber,
      gender: param.gender,
    };
  }
}
