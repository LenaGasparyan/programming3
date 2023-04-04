class Krak {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0
        this.energy = 20
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            

           
        ]

    }

    chooseCell(char7) {
        let found = [];

        for (let i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char7) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    eat() {
        let emptyCell = this.chooseCell(7)
        let newCell = random(emptyCell)

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
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

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
        let emptyCell = this.chooseCell(7)
        let newCell = random(emptyCell)
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


        for (let i in krakArr) {
            if (this.x == krakArr[i].x && this.y == krakArr[i].y) {
                krakArr.splice(i, 1)
            }
        }   
    }
 

}