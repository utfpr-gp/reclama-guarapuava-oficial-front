import {AbstractEntity} from './abstract-entity';

export class City extends AbstractEntity {

  constructor(
    public id?: number,
    public createdAt?: Date,
    public updatedAt?: Date,
    public name?: string
  ) {
    super(id, createdAt, updatedAt);
  }
}
