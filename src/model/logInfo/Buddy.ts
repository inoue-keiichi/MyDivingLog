export class Buddy {
  private _id: number;
  private _name: string;
  private _comment?: string;

  private static NEXT_ID = 1;

  constructor(name: string, comment?: string) {
    this._id = Buddy.NEXT_ID;
    Buddy.NEXT_ID++;
    console.log(this._id);
    this._name = name;
    this._comment = comment;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get comment() {
    return this._comment;
  }

  set comment(comment: string | undefined) {
    this._comment = comment;
  }
}
