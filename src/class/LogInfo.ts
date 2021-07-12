export class LogInfo {
    private _id: number;
    private _date: string | null;
    private _country: string | null;
    private _location: string | null;
    private _point: string | null;

    private static NEXT_ID: number = 1;

    constructor(logInfo: Partial<LogInfo>) {
        this._date = null;
        this._country = null;
        this._location = null;
        this._point = null;

        Object.assign(this, logInfo);
        this._id = LogInfo.NEXT_ID;
        LogInfo.NEXT_ID++;
    }

    get id(): number {
        return this._id;
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
}