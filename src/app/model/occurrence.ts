import {AbstractEntity} from './abstract-entity';
import {Category} from './category';
import {Problem} from './problem';

export class Occurrence extends AbstractEntity{

  constructor(public id?: number,
              public description?: string,
              public category?: Category,
              public problem?: Problem,
              public createdAt?: Date,
              public updatedAt?: Date) {
    super(id, createdAt, updatedAt);
  }
}
