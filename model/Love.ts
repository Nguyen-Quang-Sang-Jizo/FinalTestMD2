export class Lover{
    private _id:number;
    private _name:string;
    private _zodiac:string;
    private _address:string;
    private _dateOfBirth:string;
    private _hobby:string;

    constructor(id: number, name: string, zodiac: string, address: string, dateOfBirth: string, hobby: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._dateOfBirth = dateOfBirth;
        this._hobby = hobby;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getZodiac(): string {
        return this._zodiac;
    }

    setZodiac(value: string) {
        this._zodiac = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getDateOfBirth(): string {
        return this._dateOfBirth;
    }

    setDateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    getHobby(): string {
        return this._hobby;
    }

    setHobby(value: string) {
        this._hobby = value;
    }
}