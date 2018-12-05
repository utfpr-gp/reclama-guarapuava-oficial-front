import {AbstractEntity} from './abstract-entity';
import {User} from './user';

export class Comment extends AbstractEntity {

  constructor(public id?: number,
              public comment?: string,
              public author?: User,
              public likes?: User[],
              public answers?: Comment[],
              public createdAt?: Date,
              public updatedAt?: Date) {
    super(id, createdAt, updatedAt);
    this.answers = [];
    this.likes = [];
  }

  addLike(user: User) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    } else this.removeLike(user);
  }

  removeAnswer(comment: Comment) {
    if (!this.answers.includes(comment)) {
      const index = this.answers.indexOf(comment);
      if (index !== -1) {
        this.answers.splice(index, 1);
      }
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
}
