import i18n from '../i18n/initI18n';

export class InputType {
  //private _id: number;
  private _name: Name;
  private _label: string;
  private _pattern: Pattern;

  //private static num: number = 0;

  constructor(name: Name, pattern: Pattern) {
    //this._id = InputType.num;
    //InputType.num++;
    this._name = name;
    this._label = i18n.t(name);
    this._pattern = pattern;
  }

  // get id(): number {
  //   return this._id;
  // }

  get name(): Name {
    return this._name;
  }

  get label(): string {
    return this._label;
  }

  get pattern(): Pattern {
    return this._pattern;
  }
}

type Pattern = "text" | "date" | "time"

export type Name = "date" | "country" | "location" | "point"
