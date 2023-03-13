"use strict";
exports.__esModule = true;
var Love_1 = require("./model/Love");
var LoveManager_1 = require("./manager/LoveManager");
var loverManager = new LoveManager_1.LoverManager();
var input = require('readline-sync');
function main() {
    var menu = "\n    _________Main Menu_________\n    1.add lover\n    2.show all lover\n    3.find lover\n    4.edit lover\n    5.delete lover\n    ____________________________\n    ";
    var choice = -1;
    do {
        console.log(menu);
        choice = +input.question("enter choice: ");
        switch (choice) {
            case 1:
                addLover();
                break;
            case 2:
                showLover();
                break;
            case 3:
                findLover();
                break;
            case 4:
                editLover();
                break;
            case 5:
                deleteLover();
                break;
            case 0:
                break;
        }
    } while (choice != 0);
}
function addLover() {
    var name = input.question("name (less than 20 character) : ");
    if (name.length >= 20) {
        console.log("the name cannot longer than 20 character!!");
        addLover();
    }
    else {
        var id = input.question("id: ");
        var zodiac = zodiacChoice();
        var address = input.question("address (less than 15 character): ");
        if (address.length >= 15) {
            console.log("address cannot longer than 15 character!!");
            addLover();
        }
        else {
            var dateOfBirth = input.question("Date Of Birth (positive numbers): ");
            if (dateOfBirth.value < 0) {
                console.log("date of birth must be positive numbers!! ");
                addLover();
            }
            else {
                var hobby = input.question("hobby(longer than 4 character): ");
                if (hobby.length < 4) {
                    console.log("hobby cannot less than 4 character!!");
                    addLover();
                }
                else {
                    var lover = new Love_1.Lover(id, name, zodiac, address, dateOfBirth, hobby);
                    loverManager.add(lover);
                }
            }
        }
    }
}
function showLover() {
    loverManager.displayLover();
}
function findLover() {
    var name = input.question("enter lover name: ");
    loverManager.findLover(name);
}
function editLover() {
    var idEdit = +input.question("enter lover id: ");
    var name = input.question("name (less than 20 character) : ");
    if (name.length >= 20) {
        console.log("the name cannot longer than 20 character!!");
        editLover();
    }
    else {
        var id = input.question("id: ");
        var zodiac = zodiacChoice();
        var address = input.question("address (less than 15 character): ");
        if (address.length >= 15) {
            console.log("address cannot longer than 15 character!!");
            editLover();
        }
        else {
            var dateOfBirth = input.question("Date Of Birth (positive numbers): ");
            if (dateOfBirth.value < 0) {
                console.log("date of birth must be positive numbers!! ");
                editLover();
            }
            else {
                var hobby = input.question("hobby(longer than 4 character): ");
                if (hobby.length < 4) {
                    console.log("hobby cannot less than 4 character!!");
                    editLover();
                }
                else {
                    var lover = new Love_1.Lover(id, name, zodiac, address, dateOfBirth, hobby);
                    loverManager.editLover(idEdit, lover);
                }
            }
        }
    }
}
function deleteLover() {
    var idDElete = +input.question("enter id lover: ");
    loverManager.deleteLover(idDElete);
}
function zodiacChoice() {
    var menu = "---------Choose zodiac-----------\n    1.Aries (Ram): March 21\u2013April 19\n    2.Taurus (Bull): April 20\u2013May 20\n    3.Gemini (Twins): May 21\u2013June 21\n    4.Cancer (Crab): June 22\u2013July 22\n    5.Leo (Lion): July 23\u2013August 22\n    6.Virgo (Virgin): August 23\u2013September 22\n    7.Libra (Balance): September 23\u2013October 23\n    8.Scorpius (Scorpion): October 24\u2013November 21\n    9.Sagittarius (Archer): November 22\u2013December 21\n    10.Capricornus (Goat): December 22\u2013January 19\n    11.Aquarius (Water Bearer): January 20\u2013February 18\n    12.Pisces (Fish): February 19\u2013March 20\n    0.Exit program";
    var choice = -1;
    var zodiac1;
    do {
        console.log(menu);
        choice = +input.question('Enter Choice : ');
        switch (choice) {
            case 1:
                zodiac1 = 'Aries';
                return zodiac1;
            case 2:
                zodiac1 = 'Taurus';
                return zodiac1;
            case 3:
                zodiac1 = 'Gemini';
                return zodiac1;
            case 4:
                zodiac1 = 'Cancer';
                return zodiac1;
            case 5:
                zodiac1 = 'Leo';
                return zodiac1;
            case 6:
                zodiac1 = 'Virgo';
                return zodiac1;
            case 7:
                zodiac1 = 'Libra';
                return zodiac1;
            case 8:
                zodiac1 = 'Scorpius';
                return zodiac1;
            case 9:
                zodiac1 = 'Sagittarius';
                return zodiac1;
            case 10:
                zodiac1 = 'Capricornus';
                return zodiac1;
            case 11:
                zodiac1 = 'Aquarius';
                return zodiac1;
            case 12:
                zodiac1 = 'Pisces';
                return zodiac1;
        }
    } while (choice !== 0);
    return '';
}
main();
