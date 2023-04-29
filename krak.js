const LivingCreature = require("./LivingCreature");

module.exports = class Krak  extends LivingCreature  {
    constructor(x, y) {
      super(x,y)
        this.multiply = 0
        this.energy = 20
    }

    eat() {
        let emptyCells = this.chooseCell(7)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy += 5
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in WatherArr) {
                if (newX == WatherArr[i].x && newY == WatherArr[i].y) {
                    WatherArr.splice(i, 1)
                    console.log(WatherArr.length);
                    break
                }
            }
            

            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 8


            this.x = newX
            this.y = newY

            if (this.energy > 22) {
                this.mul()
            }

        } 
    }
    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
    mul() {
        this.multiply++
        let emptyCells = this.chooseCell(7)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.multiply > 3 && newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 8

            var kr = new Krak(newX, newY)

            KrakArr.push(kr)
     
            this.multiply = 0

     if(KrakArr.length >= 15){
     this.move()
     }

        }

    }
    die() {
        matrix[this.y][this.x] = 0


        for (let i in KrakArr) {
            if (this.x == KrakArr[i].x && this.y == KrakArr[i].y) {
                KrakArr.splice(i, 1)
            }
        }   
    }
 

}