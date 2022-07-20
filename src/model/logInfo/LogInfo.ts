import { Buddy } from './Buddy';
import { Tank } from './Tank';

export type DivingType = 'beach' | 'boat';
export type Suit = '3mm' | '5mm' | 'dry';
export type Weather = 'sunny' | 'partlySunny' | 'cloudy' | 'rainy' | 'snowy';

export class LogInfo {
  private _id: number;
  private _date?: string;
  private _country?: string;
  private _location?: string;
  private _point?: string;
  private _divingType?: DivingType;
  private _shop?: string;
  private _entryTime?: string;
  private _exitTime?: string;
  private _intervalMinutes?: number;
  private _maxDepth?: number;
  private _averageDepth?: number;
  private _suit?: Suit;
  private _visibility?: number;
  private _weather?: Weather;
  private _tankStart?: number;
  private _tankEnd?: number;
  private _waterTemp?: number;
  private _tank?: Tank;
  private _weight?: number;
  private _daikon?: boolean;
  private _camera?: boolean;
  private _light?: boolean;
  private _buddies: Buddy[];

  private static NEXT_ID: number = 1;

  constructor(logInfo: Partial<LogInfo>) {
    this._id = LogInfo.NEXT_ID;
    this._buddies = [];

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

  get divingType(): DivingType | undefined {
    return this._divingType;
  }

  set divingType(divingType: DivingType | undefined) {
    this._divingType = divingType;
  }

  get shop(): string | undefined {
    return this._shop;
  }

  set shop(shop: string | undefined) {
    this._shop = shop;
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

  get suit(): Suit | undefined {
    return this._suit;
  }

  set suit(suit: Suit | undefined) {
    this._suit = suit;
  }

  get visibility(): number | undefined {
    return this._visibility;
  }

  set visibility(visibility: number | undefined) {
    this._visibility = visibility;
  }

  get weather(): Weather | undefined {
    return this._weather;
  }

  set weather(weather: Weather | undefined) {
    this._weather = weather;
  }

  get tankStart(): number | undefined {
    return this._tankStart;
  }

  set tankStart(tankStart: number | undefined) {
    this._tankStart = tankStart;
  }

  get tankEnd(): number | undefined {
    return this._tankEnd;
  }

  set tankEnd(tankEnd: number | undefined) {
    this._tankEnd = tankEnd;
  }

  get waterTemp(): number | undefined {
    return this._waterTemp;
  }

  set waterTemp(waterTemp: number | undefined) {
    this._waterTemp = waterTemp;
  }

  get tank(): Tank | undefined {
    return this._tank;
  }

  set tank(tank: Tank | undefined) {
    this._tank = tank;
  }

  get weight(): number | undefined {
    return this._weight;
  }

  set weight(weight: number | undefined) {
    this._weight = weight;
  }

  get daikon(): boolean | undefined {
    return this._daikon;
  }

  set daikon(daikon: boolean | undefined) {
    this._daikon = daikon;
  }

  get camera(): boolean | undefined {
    return this._camera;
  }

  set camera(camera: boolean | undefined) {
    this._camera = camera;
  }

  get light(): boolean | undefined {
    return this._light;
  }

  set light(light: boolean | undefined) {
    this._light = light;
  }

  get buddies(): Buddy[] {
    return this._buddies;
  }

  set buddies(buddies: Buddy[]) {
    this._buddies = buddies;
  }
}
