/**
 * @description Error class for functional Either error handling
 */
export class Left<L, R> {
  public value: L;

  private constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }

  isRight(): this is Right<L, R> {
    return false;
  }

  static create<L, R = unknown>(value: L): Left<L, R> {
    return new Left<L, R>(value);
  }
}

/**
 * @description Success class for functional Either error handling
 */
export class Right<L, R> {
  public value: R;

  private constructor(value: R) {
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return false;
  }

  isRight(): this is Right<L, R> {
    return true;
  }

  static create<R, L = unknown>(value: R): Right<L, R> {
    return new Right<L, R>(value);
  }
}

/**
 * @description A type defining the return of a functional Either error handling, where Left would be the workflow error and Right the success one
 */
export type Either<L, R> = Left<L, R> | Right<L, R>;
