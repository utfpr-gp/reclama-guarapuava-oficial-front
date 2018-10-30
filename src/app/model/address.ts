import {AbstractEntity} from './abstract-entity';
import {Neighborhood} from './neighborhood';

export class Address extends AbstractEntity {

  constructor(
    public id?: number,
    public createdAt?: Date,
    public updatedAt?: Date,
    public neighborhood?: Neighborhood,
    public street?: string,
    public number?: number) {
    super(id, createdAt, updatedAt);
  }
}
