import { Mapper } from 'src/app/base/maper';
import { UserModel } from 'src/app/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';
export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      first_name: param.firstName,
      last_name: param.lastName,
      document_type_id: param.documentTypeId,
      document_number: param.documentNumber,
      gender_id: param.genderId,
    };
  }
  mapTo(param: UserModel): UserEntity {
    return {
      id: param.id,
      firstName: param.first_name,
      lastName: param.last_name,
      documentTypeId: param.document_type_id,
      documentNumber: param.document_number,
      genderId: param.gender_id,
    };
  }
}
