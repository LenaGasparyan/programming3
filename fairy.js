let LivingCreature = require("./LivingCreature");

module.exports = class Fairy extends LivingCreature{
    constructor(x, y) {
        super(x,y) 
         this.multiply = 0;
         this.energy = 25
       
                  
        }
    

        mul() {
            this.multiply++
            let emptyCells = this.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
                 
                        if (this.multiply >= 5 && newCell )  {
                            
                  
    
                            var newX = newCell[0]
                            var newY = newCell[1]
                
                            matrix[newY][newX] = 6
                
                            var fa = new Fairy(newX, newY)
                
                            FairyArr.push(fa)
                
                            this.multiply = 0
                
                
                        
                        }
            
        }  
          move() {
            let emptyCells = this.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    
            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
    
                matrix[newY][newX] = 6
                matrix[this.y][this.x] = 0
    
                this.x = newX
                this.y = newY
    
                this.energy--
    
                if (this.energy < 10) {
                    this.die()
                }
            }
        }
         die() {
          matrix[this.y][this.x] = 0
   

    
            for (let i in FairyArr) {
                if (this.x == FairyArr[i].x && this.y == FairyArr[i].y) {
                    FairyArr.splice(i, 1)
                }
            }
        }
      
    }
    
    