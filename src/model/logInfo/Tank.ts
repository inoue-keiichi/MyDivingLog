export type Kind = 'aluminum' | 'steel' | 'nitrox';

export class Tank {
  private _kind?: Kind;
  private _volume?: number;

  constructor(tank: Partial<Tank>) {
    Object.assign(this, tank);
  }

  get kind(): Kind | undefined {
    return this._kind;
  }

  set kind(kind: Kind | undefined) {
    this._kind = kind;
  }

  get volume(): number | undefined {
    return this._volume;
  }

  set volume(volume: number | undefined) {
    this._volume = volume;
  }
}
