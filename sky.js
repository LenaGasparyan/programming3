let LivingCreature = require("./LivingCreature");

module.exports = class Sky extends LivingCreature {
    constructor(x, y) {
       super(x,y)
        this.energy = 40
        this.directions = []
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char6) {
        this.getNewCoordinates()
      return super.chooseCell(char6)

    }

    mul() {
        let emptyCells = this.chooseCell(6)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 9

            let sk = new Sky(newX, newY)

            SkyArr.push(sk)




        }
    }

    eat() {
        let emptyCells = this.chooseCell(6)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy += 10
            let newX = newCell[0]
            let newY = newCell[1]

           
            for (let i in FairyArr) {
                if (newX == FairyArr[i].x && newY == FairyArr[i].y) {
                    FairyArr.splice(i, 1)
                    break
                }
            }

            matrix[newY][newX] = 9
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 20) {
                this.mul()
            }

        } else {
            this.move()
        }
    }


    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 9
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0

        for (let i in SkyArr) {
            if (this.x == SkyArr[i].x && this.y == SkyArr[i].y) {
                SkyArr.splice(i, 1)
            }
        }
    }



}