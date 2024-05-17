export default class TrackingCode{
    constructor(private _code: string){}

    public get code() : string {
        return this._code;
    }
}