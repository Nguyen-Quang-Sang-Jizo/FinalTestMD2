import {Lover} from "./model/Love";
import {LoverManager} from "./manager/LoveManager";

let loverManager = new LoverManager()

let input = require('readline-sync')

function main() {
    let menu = `
    _________Main Menu_________
    1.add lover
    2.show all lover
    3.find lover
    4.edit lover
    5.delete lover
    ____________________________
    `
    let choice: number = -1;
    do {
        console.log(menu)
        choice = +input.question(`enter choice: `)
        switch (choice) {
            case 1:
                addLover()
                break;
            case 2:
                showLover()
                break;
            case 3:
                findLover();
                break
            case 4:
                editLover();
                break;
            case 5:
                deleteLover();
                break;
            case 0:
                break;
        }

    } while (choice != 0)
}

function addLover() {
    let name = input.question(`name (less than 20 character) : `)
    if (name.length >= 20) {
        console.log(`the name cannot longer than 20 character!!`)
        addLover()
    } else {
        let id = input.question(`id: `)
        let zodiac = zodiacChoice()
        let address = input.question(`address (less than 15 character): `)
        if (address.length >= 15) {
            console.log(`address cannot longer than 15 character!!`)
            addLover()
        } else {
            let dateOfBirth = input.question(`Date Of Birth (positive numbers): `)
            if (dateOfBirth.value < 0) {
                console.log(`date of birth must be positive numbers!! `)
                addLover()
            } else {
                let hobby = input.question(`hobby(longer than 4 character): `)
                if (hobby.length < 4) {
                    console.log(`hobby cannot less than 4 character!!`)
                    addLover();
                } else {
                    let lover = new Lover(id, name, zodiac, address, dateOfBirth, hobby)
                    loverManager.add(lover)
                }
            }
        }
    }

}

function showLover() {

    loverManager.displayLover()
}

function findLover() {
    let name = input.question(`enter lover name: `)
    loverManager.findLover(name)
}

function editLover() {
    let idEdit = +input.question(`enter lover id: `)
    let name = input.question(`name (less than 20 character) : `)
    if (name.length >= 20) {
        console.log(`the name cannot longer than 20 character!!`)
        editLover()
    } else {
        let id = input.question(`id: `)
        let zodiac = zodiacChoice()
        let address = input.question(`address (less than 15 character): `)
        if (address.length >= 15) {
            console.log(`address cannot longer than 15 character!!`)
            editLover()
        } else {
            let dateOfBirth = input.question(`Date Of Birth (positive numbers): `)
            if (dateOfBirth.value < 0) {
                console.log(`date of birth must be positive numbers!! `)
                editLover()
            } else {
                let hobby = input.question(`hobby(longer than 4 character): `)
                if (hobby.length < 4) {
                    console.log(`hobby cannot less than 4 character!!`)
                    editLover()
                } else {
                    let lover = new Lover(id, name, zodiac, address, dateOfBirth, hobby)
                    loverManager.editLover(idEdit, lover)
                }
            }
        }
    }
}


function deleteLover() {
    let idDElete = +input.question(`enter id lover: `)
    loverManager.deleteLover(idDElete);
}

function zodiacChoice(): string {
    let menu = `---------Choose zodiac-----------
    1.Aries (Ram): March 21–April 19
    2.Taurus (Bull): April 20–May 20
    3.Gemini (Twins): May 21–June 21
    4.Cancer (Crab): June 22–July 22
    5.Leo (Lion): July 23–August 22
    6.Virgo (Virgin): August 23–September 22
    7.Libra (Balance): September 23–October 23
    8.Scorpius (Scorpion): October 24–November 21
    9.Sagittarius (Archer): November 22–December 21
    10.Capricornus (Goat): December 22–January 19
    11.Aquarius (Water Bearer): January 20–February 18
    12.Pisces (Fish): February 19–March 20
    0.Exit program`
    let choice = -1;
    let zodiac1: string;
    do {
        console.log(menu)
        choice = +input.question('Enter Choice : ');
        switch (choice) {
            case 1:
                zodiac1 = 'Aries'
                return zodiac1;
            case 2:
                zodiac1 = 'Taurus'
                return zodiac1;
            case 3:
                zodiac1 = 'Gemini'
                return zodiac1;
            case 4:
                zodiac1 = 'Cancer'
                return zodiac1;
            case 5:
                zodiac1 = 'Leo'
                return zodiac1;
            case 6:
                zodiac1 = 'Virgo'
                return zodiac1;
            case 7:
                zodiac1 = 'Libra'
                return zodiac1;
            case 8:
                zodiac1 = 'Scorpius'
                return zodiac1;
            case 9:
                zodiac1 = 'Sagittarius'
                return zodiac1;
            case 10:
                zodiac1 = 'Capricornus'
                return zodiac1;
            case 11:
                zodiac1 = 'Aquarius'
                return zodiac1;
            case 12:
                zodiac1 = 'Pisces'
                return zodiac1;

        }
    } while (choice !== 0)
    return '';

}

main()