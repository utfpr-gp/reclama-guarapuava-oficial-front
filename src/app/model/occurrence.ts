import {AbstractEntity} from './abstract-entity';
import {User} from './user';
import {Problem} from './problem';
import {Address} from './address';

export class Occurrence extends AbstractEntity {

  constructor(public id?: number,
              public title?: string,
              public like?: number,
              public unlike?: number,
              public views?: number,
              public user?: User,
              public status?: OccurrenceStatus,
              public address?: Address,
              public problem?: Problem,
              public createdAt?: Date,
              public updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
}

export enum OccurrenceStatus {
  SOLVED, UNRESOLVED, URGENT
}
