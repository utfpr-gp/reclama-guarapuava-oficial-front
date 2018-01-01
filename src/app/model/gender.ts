import {AbstractEntity} from './abstract-entity';

export class Gender extends AbstractEntity {

  constructor(public description?: string,
              public initial?: string,
              public id?: number,
              public createdAt?: Date,
              public updatedAt?: Date) {
    super(id, createdAt, updatedAt);
  }
}
