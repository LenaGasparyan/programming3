let LivingCreature = require("./LivingCreature");

module.exports = class heart  extends LivingCreature{
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
    chooseCell(char9) {
        this.getNewCoordinates()
        return  super.chooseCell(char9)

    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 10

            let he = new Heart(newX, newY)

            HeartArr.push(he)




        }
    }

    eat() {
        let emptyCells = this.chooseCell(9)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy += 8
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in SkyArr) {
                if (newX == SkyArr[i].x && newY == SkyArr[i].y) {
                    SkyArr.splice(i, 1)
                    break
                }
            }
         

            matrix[newY][newX] = 10
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

            matrix[newY][newX] = 10
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

        for (let i in HeartArr) {
            if (this.x == HeartArr[i].x && this.y == HeartArr[i].y) {
                HeartArr.splice(i, 1)
            }
        }
    }



}