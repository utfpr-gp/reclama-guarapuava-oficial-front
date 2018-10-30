import {AbstractEntity} from './abstract-entity';

export class Role extends AbstractEntity {

  constructor(
    public id?: number,
    public name?: string,
    public createdAt?: Date,
    public updatedAt?: Date) {
    super(id, createdAt, updatedAt);
  }
}
