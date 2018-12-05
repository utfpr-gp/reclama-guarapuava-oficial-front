import {AbstractEntity} from './abstract-entity';
import {User} from './user';
import {Problem} from './problem';
import {Address} from './address';
import {Comment} from './comment';

export class Occurrence extends AbstractEntity {

  constructor(public id?: number,
              public title?: string,
              public likes?: User[],
              public unlikes?: User[],
              public views?: number,
              public user?: User,
              public comments?: Comment[],
              public status?: OccurrenceStatus,
              public address?: Address,
              public problem?: Problem,
              public createdAt?: Date,
              public updatedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
    this.unlikes = [];
    this.likes = [];
    this.comments = [];
  }

  removeComment(comment: Comment) {
    if (!this.comments.includes(comment)) {
      const index = this.comments.indexOf(comment);
      if (index !== -1) {
        this.comments.splice(index, 1);
      }
    }
  }

  addLike(user: User) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
      this.removeUnlike(user);
    } else this.removeLike(user);
  }

  addUnlike(user: User) {
    if (!this.unlikes.includes(user)) {
      this.unlikes.push(user);
      this.removeLike(user);
    } else {
      this.removeUnlike(user);
    }
  }

  removeLike(user: User) {
    if (this.likes.includes(user)) {
      const index = this.likes.indexOf(user);
      if (index !== -1) {
        this.likes.splice(index, 1);
      }
    }
  }

  removeUnlike(user: User) {
    if (this.unlikes.includes(user)) {
      const index = this.unlikes.indexOf(user);
      if (index !== -1) {
        this.unlikes.splice(index, 1);
      }
    }
  }
}

export enum OccurrenceStatus {
  SOLVED, UNRESOLVED, URGENT
}
