export class LogInfo {
  private _id: number;
  private _date?: string;
  private _country?: string;
  private _location?: string;
  private _point?: string;
  private _entryTime?: string;
  private _exitTime?: string;
  private _intervalMinutes?: number;
  private _maxDepth?: number;
  private _averageDepth?: number;
  private _suit?: '3mm' | '5mm' | 'dry';
  private _visibility?: number;

  private static NEXT_ID: number = 1;

  constructor(logInfo: Partial<LogInfo>) {
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

  get date(): string | undefined {
    return this._date;
  }

  set date(date: string | undefined) {
    this._date = date;
  }

  get country(): string | undefined {
    return this._country;
  }

  set country(country: string | undefined) {
    this._country = country;
  }

  get location(): string | undefined {
    return this._location;
  }

  set location(location: string | undefined) {
    this._location = location;
  }

  get point(): string | undefined {
    return this._point;
  }

  set point(point: string | undefined) {
    this._point = point;
  }

  get entryTime(): string | undefined {
    return this._entryTime;
  }

  set entryTime(entryTime: string | undefined) {
    this._entryTime = entryTime;
  }

  get exitTime(): string | undefined {
    return this._exitTime;
  }

  set exitTime(exitTime: string | undefined) {
    this._exitTime = exitTime;
  }

  get intervalMinutes(): number | undefined {
    return this._intervalMinutes;
  }

  set intervalMinutes(intervalMinutes: number | undefined) {
    this._intervalMinutes = intervalMinutes;
  }

  get maxDepth(): number | undefined {
    return this._maxDepth;
  }

  set maxDepth(maxDepth: number | undefined) {
    this._maxDepth = maxDepth;
  }

  get averageDepth(): number | undefined {
    return this._averageDepth;
  }

  set avergeDepth(averageDepth: number | undefined) {
    this._averageDepth = averageDepth;
  }

  get suit(): '3mm' | '5mm' | 'dry' | undefined {
    return this._suit;
  }

  set suit(suit: '3mm' | '5mm' | 'dry' | undefined) {
    this._suit = suit;
  }

  get visibility(): number | undefined {
    return this._visibility;
  }

  set visibility(visibility: number | undefined) {
    this._visibility = visibility;
  }
}
