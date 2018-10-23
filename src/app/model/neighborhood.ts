import {AbstractEntity} from './abstract-entity';
import {City} from './city';

export class Neighborhood extends AbstractEntity {

  constructor(
    public id?: number,
    public createdAt?: Date,
    public updatedAt?: Date,
    public city?: City) {
    super(id, createdAt, updatedAt);
  }
}
