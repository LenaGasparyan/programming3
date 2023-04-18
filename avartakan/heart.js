class Heart {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 100
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
    chooseCell(char9) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char9) {
                    found.push(this.directions[i])
                }
            }
            
        }


        return found

    }

    mul() {
        let emptyCell = this.chooseCell(0)
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
        let emptyCell = this.chooseCell(9)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy += 50
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
        let emptyCell = this.chooseCell(0)
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