import {AbstractEntity} from './abstract-entity';
import {Gender} from './gender';
import {Address} from './address';
import {Role} from './role';

export class User extends AbstractEntity {
  constructor(public name?: string,
              public email?: string,
              public password?: string,
              public id?: number,
              public gender?: Gender,
              public role?: Role,
              public createdAt?: Date,
              public updatedAt?: Date,
              public dateOfBirth?: Date,
              public address?: Address) {
    super(id, createdAt, updatedAt);
  }
}
