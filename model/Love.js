"use strict";
exports.__esModule = true;
exports.Lover = void 0;
var Lover = /** @class */ (function () {
    function Lover(id, name, zodiac, address, dateOfBirth, hobby) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._dateOfBirth = dateOfBirth;
        this._hobby = hobby;
    }
    Lover.prototype.getId = function () {
        return this._id;
    };
    Lover.prototype.setId = function (value) {
        this._id = value;
    };
    Lover.prototype.getName = function () {
        return this._name;
    };
    Lover.prototype.setName = function (value) {
        this._name = value;
    };
    Lover.prototype.getZodiac = function () {
        return this._zodiac;
    };
    Lover.prototype.setZodiac = function (value) {
        this._zodiac = value;
    };
    Lover.prototype.getAddress = function () {
        return this._address;
    };
    Lover.prototype.setAddress = function (value) {
        this._address = value;
    };
    Lover.prototype.getDateOfBirth = function () {
        return this._dateOfBirth;
    };
    Lover.prototype.setDateOfBirth = function (value) {
        this._dateOfBirth = value;
    };
    Lover.prototype.getHobby = function () {
        return this._hobby;
    };
    Lover.prototype.setHobby = function (value) {
        this._hobby = value;
    };
    return Lover;
}());
exports.Lover = Lover;
