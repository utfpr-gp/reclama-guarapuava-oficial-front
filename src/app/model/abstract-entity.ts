export abstract class AbstractEntity {

  protected constructor(
    public id?: number,
    public createdAt?: Date,
    public updatedAt?: Date) {
  }
}
