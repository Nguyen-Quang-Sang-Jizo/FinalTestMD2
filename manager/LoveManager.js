"use strict";
exports.__esModule = true;
exports.LoverManager = void 0;
var LoverManager = /** @class */ (function () {
    function LoverManager() {
        this.listLover = [];
    }
    LoverManager.prototype.add = function (t) {
        this.listLover.push(t);
        console.log("add lover access!!");
    };
    LoverManager.prototype.displayLover = function () {
        if (this.listLover.length == 0) {
            console.log("you are alone! ");
        }
        else {
            for (var i = 0; i < this.listLover.length; i++) {
                console.log("\n            id: ".concat(this.listLover[i].getId(), " | name:  ").concat(this.listLover[i].getName(), " | zodiac:  ").concat(this.listLover[i].getZodiac(), "| address: ").concat(this.listLover[i].getAddress(), " | dete of birth: ").concat(this.listLover[i].getDateOfBirth(), "| hobby: ").concat(this.listLover[i].getHobby(), "\n            "));
            }
        }
    };
    LoverManager.prototype.findIndex = function (id) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (id == this.listLover[i].getId()) {
                return i;
            }
        }
        return -1;
    };
    LoverManager.prototype.editLover = function (id, t) {
        var index = this.findIndex(id);
        if (index == -1) {
            console.log(" can't find id lover !!");
        }
        else {
            this.listLover[index] = t;
            console.log("edit success!!");
        }
    };
    LoverManager.prototype.deleteLover = function (id) {
        var index = this.findIndex(id);
        if (index == -1) {
            console.log(" can't find id lover !!");
        }
        else {
            this.listLover.splice(index, 1);
            console.log("delete success!!");
        }
    };
    LoverManager.prototype.findLover = function (nameFind) {
        var find = this.listLover.filter(function (Lover) { return Lover.getName().toLowerCase().includes(nameFind.toLowerCase()); });
        console.log("Find success: ");
        console.log("\n                    id: ".concat(find[0].getId(), " | name:  ").concat(find[0].getName(), " | zodiac:  ").concat(find[0].getZodiac(), "| address: ").concat(find[0].getAddress(), " | dete of birth: ").concat(find[0].getDateOfBirth(), "| hobby: ").concat(find[0].getHobby(), "\n                    "));
    };
    return LoverManager;
}());
exports.LoverManager = LoverManager;
