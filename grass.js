
let LivingCreature = require('./LivingCreature')


module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }
    mul() {
        this.multiply++;
        if (this.multiply >= 3) {
            let emptyCells = this.chooseCell(0)
          
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
         
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                matrix[y][x] = 1
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
                this.multiply = 0;
            }
        }
    }
}