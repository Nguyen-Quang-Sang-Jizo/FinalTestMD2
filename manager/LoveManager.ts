import {Lover} from "../model/Love";

export class LoverManager {
    listLover: Lover[] = [];

    add(t: Lover) {
        this.listLover.push(t)
        console.log(`add lover access!!`)
    }

    displayLover() {
        if (this.listLover.length==0){
            console.log(`you are alone! `)
        }else {
            for (let i = 0; i < this.listLover.length; i++) {
                console.log(`
            id: ${this.listLover[i].getId()} | name:  ${this.listLover[i].getName()} | zodiac:  ${this.listLover[i].getZodiac()}| address: ${this.listLover[i].getAddress()} | dete of birth: ${this.listLover[i].getDateOfBirth()}| hobby: ${this.listLover[i].getHobby()}
            `)
            }
        }
    }
    findIndex(id: number) {
        for (let i = 0; i < this.listLover.length; i++) {
            if (id == this.listLover[i].getId()) {
                return i;
            }
        }
        return -1
    }

    editLover(id: number, t: Lover) {
        let index = this.findIndex(id)
        if (index == -1) {
            console.log(` can't find id lover !!`)
        } else {
            this.listLover[index] = t;
            console.log(`edit success!!`)
        }
    }

    deleteLover(id: number) {
        let index = this.findIndex(id)
        if (index == -1) {
            console.log(` can't find id lover !!`)
        } else {
            this.listLover.splice(index, 1)
            console.log(`delete success!!`)
        }
    }

    findLover(nameFind: string) {
        let find = this.listLover.filter(Lover => Lover.getName().toLowerCase().includes(nameFind.toLowerCase()))
        console.log(`Find success: `)
        console.log(`
                    id: ${find[0].getId()} | name:  ${find[0].getName()} | zodiac:  ${find[0].getZodiac()}| address: ${find[0].getAddress()} | dete of birth: ${find[0].getDateOfBirth()}| hobby: ${find[0].getHobby()}
                    `)
    }
}