let LivingCreature = require("./LivingCreature");

module.exports = class gishatichaspan  extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 20
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
  
    chooseCell(char4) {
        this.getNewCoordinates()
        return super.chooseCell(char4)

    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5

            let gi = new Gishatichaspan(newX, newY)

            gishatichaspanArr.push(gi)




        }
    }

    eat() {
        let emptyCells = this.chooseCell(4)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy += 9
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in HrashagorcArr) {
                if (newX == HrashagorcArr[i].x && newY == HrashagorcArr[i].y) {
                    HrashagorcArr.splice(i, 1)
                    break
                }
            }
            

            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 35) {
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

            matrix[newY][newX] = 5
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

        for (let i in gishatichaspanArr) {
            if (this.x == gishatichaspanArr[i].x && this.y == gishatichaspanArr[i].y) {
                gishatichaspanArr.splice(i, 1)
            }
        }
    }



}