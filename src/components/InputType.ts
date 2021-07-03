class InputType {
  private _id: number;
  private _label: string;
  private _pattern: Pattern;

  private static num: number = 0;

  constructor(label: string, pattern: Pattern) {
    this._id = InputType.num;
    InputType.num++;
    this._label = label;
    this._pattern = pattern;
  }

  get id(): number {
    return this._id;
  }

  get label(): string {
    return this._label;
  }

  get pattern(): Pattern {
    return this._pattern;
  }
}

type Pattern = "text" | "date" | "time"