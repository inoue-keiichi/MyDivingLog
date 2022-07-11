export class LogInfo {
  private _id: number;
  private _date: string | null;
  private _country: string | null;
  private _location: string | null;
  private _point: string | null;
  private _entryTime: string | null;
  private _exitTime: string | null;
  private _intervalMinutes: number | null;

  private static NEXT_ID: number = 1;

  constructor(logInfo: Partial<LogInfo>) {
    this._date = null;
    this._country = null;
    this._location = null;
    this._point = null;
    this._entryTime = null;
    this._exitTime = null;
    this._intervalMinutes = null;
    this._id = LogInfo.NEXT_ID;

    Object.assign(this, logInfo);
    if (logInfo.id == null) {
      LogInfo.NEXT_ID++;
    }
  }

  public update(logInfo: Partial<LogInfo>) {
    Object.assign(this, logInfo);
  }

  get id(): number {
    return this._id;
  }

  get diveNumber(): string {
    return `${this._id}`;
  }

  get date(): string | null {
    return this._date;
  }

  set date(date: string | null) {
    this._date = date;
  }

  get country(): string | null {
    return this._country;
  }

  set country(country: string | null) {
    this._country = country;
  }

  get location(): string | null {
    return this._location;
  }

  set location(location: string | null) {
    this._location = location;
  }

  get point(): string | null {
    return this._point;
  }

  set point(point: string | null) {
    this._point = point;
  }

  get entryTime(): string | null {
    return this._entryTime;
  }

  set entryTime(entryTime: string | null) {
    this._entryTime = entryTime;
  }

  get exitTime(): string | null {
    return this._exitTime;
  }

  set exitTime(exitTime: string | null) {
    this._exitTime = exitTime;
  }

  get intervalMinutes(): number | null {
    return this._intervalMinutes;
  }

  set intervalMinutes(intervalMinutes: number | null) {
    this._intervalMinutes = intervalMinutes;
  }
}
