import i18n from '../i18n/initI18n';

export class InputType {
  private _name: Name;
  private _label: string;
  private _pattern: Pattern;

  constructor(name: Name, pattern: Pattern) {
    this._name = name;
    this._label = i18n.t(`log.${name}`);
    this._pattern = pattern;
  }

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

export type Name = "diveNumber" | "date" | "country" | "location" | "point" | "entryTime" | "exitTime"
