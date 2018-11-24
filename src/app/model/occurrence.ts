import {AbstractEntity} from './abstract-entity';
import {User} from './user';
import {Problem} from './problem';
import {Address} from './address';

export class Occurrence extends AbstractEntity {

  constructor(public id?: number,
              public title?: string,
              public like?: User[],
              public unlike?: User[],
              public views?: number,
              public user?: User,
              public status?: OccurrenceStatus,
              public address?: Address,
              public problem?: Problem,
              public createdAt?: Date,
              public updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
    this.unlike = [];
    this.like = [];
  }

  addLike(user: User) {
    if (!this.like.includes(user)) {
      this.like.push(user);
      this.removeUnlike(user);
    } else this.removeLike(user);
  }

  addUnlike(user: User) {
    if (!this.unlike.includes(user)) {
      this.unlike.push(user);
      this.removeLike(user);
    } else {
      this.removeUnlike(user);
    }
  }

  removeLike(user: User) {
    if (this.like.includes(user)) {
      const index = this.like.indexOf(user);
      if (index !== -1) {
        this.like.splice(index, 1);
      }
    }
  }

  removeUnlike(user: User) {
    if (this.unlike.includes(user)) {
      const index = this.unlike.indexOf(user);
      if (index !== -1) {
        this.unlike.splice(index, 1);
      }
    }
  }
}

export enum OccurrenceStatus {
  SOLVED, UNRESOLVED, URGENT
}
