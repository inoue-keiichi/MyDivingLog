import i18n from '../i18n/initI18n';

export class InputField {
  private _name: string;
  private _label: string;
  private type: InputType;
  private _value?: string;

  constructor(name: string, type: InputType, value?: string) {
    this._name = name;
    this._label = i18n.t(`log.${name}`);
    this.type = type;
    this._value = value;
  }

  get name(): string {
    return this._name;
  }

  get label(): string {
    return this._label;
  }

  get pattern(): InputType {
    return this.type;
  }

  get value(): string | undefined {
    return this._value;
  }
}

type InputType = 'text' | 'date' | 'time' | 'number' | 'decimal';

export type Name =
  | 'diveNumber'
  | 'date'
  | 'country'
  | 'location'
  | 'point'
  | 'entryTime'
  | 'exitTime';
