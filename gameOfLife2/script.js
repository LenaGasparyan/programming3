function matrixGenerator(matrixSize, grass,grassEater,predator,hrashagorc,gishatichaspan,Fairy,Wather,Krak,Sky,Heart) {
        var matrix = []
       
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        

         for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }

        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }

        for (let i = 0; i < hrashagorc; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }

        for (let i = 0; i < gishatichaspan; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
        }

        for (let i = 0; i < Fairy; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6
        }

        for (let i = 0; i < Wather; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 7
        }

        for (let i = 0; i < Krak; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 8
        }

        for (let i = 0; i < Sky; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 9
        }
        for (let i = 0; i < Heart; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 10
        }

       
        return matrix
}

let matrix = matrixGenerator(50, 17,7,4,5,4,6,8,10,12,9)
let side = 20

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var HrashagorcArr = []
var gishatichaspanArr = []
var FairyArr = []
var WatherArr = []
var KrakArr = []
var SkyArr = []
var HeartArr = []

function setup() {
        frameRate(10)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        } else if(matrix[y][x] == 2){
                             let grEat = new  GrassEater(x,y)
                             grassEaterArr.push(grEat)
                        } else if(matrix[y][x] == 3){
                                let pre = new  Predator(x,y)
                               predatorArr.push(pre)
                           }else if(matrix[y][x] == 4){
                                let hr = new  Hrashagorc(x,y)
                                HrashagorcArr.push(hr)
                           }else if(matrix[y][x] == 5){
                                let gi = new  Gishatichaspan(x,y)
                                gishatichaspanArr.push(gi)
                           }  else if(matrix[y][x] == 6){
                                let fa = new  Fairy(x,y)
                                FairyArr.push(fa)
                           }
                           else if(matrix[y][x] == 7){
                                let wa = new  Wather(x,y)
                                WatherArr.push(wa)
                           }
                           else if(matrix[y][x] == 8){
                                let ka = new  Krak(x,y)
                                KrakArr.push(ka)
                           }
                           else if(matrix[y][x] == 9){
                                let sk = new  Sky(x,y)
                                SkyArr.push(sk)
                           }
                           else if(matrix[y][x] == 10){
                                let he = new  Heart(x,y)
                                HeartArr.push(he)
                           }
                          
                      
        }
                }
}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if(matrix[y][x] == 2){
                                fill ("yellow")
                        }else if(matrix[y][x] == 3){
                                fill ("red")
                        }else if(matrix[y][x] == 4){
                                fill ("pink")
                        }else if(matrix[y][x] == 5){
                                fill ("orange")
                        }else if(matrix[y][x] == 6){
                                fill ("black") 
                        } else if(matrix[y][x] == 7){
                                fill ("blue") 
                        }else if(matrix[y][x] == 8){
                                fill ("purple") 
                        }else if(matrix[y][x] == 9){
                                fill ("magenta")
                        }else if(matrix[y][x] == 10){
                                 fill ("white")         
                        } else {
                                fill("gray")
                        }
                       
                        
                        rect(x * side, y * side, side, side)

                }
        }
        for (let i in grassArr) {
                grassArr[i].mul()
        }
     
        for(let i in grassEaterArr){
                grassEaterArr[i].eat()
        }
      
        for(let i in predatorArr){
                predatorArr[i].eat()
        }
        
        for(let i in HrashagorcArr){
               HrashagorcArr[i].eat()
        }
        
        for(let i in grassEaterArr){
                grassEaterArr[i].eat()
         }
      
         for(let i in gishatichaspanArr){
                gishatichaspanArr[i].eat()
        }
        
        for (let i in FairyArr) {
               FairyArr[i].mul()
        }
        for(let i in WatherArr){
                WatherArr[i].eat()
        }
        for(let i in KrakArr){
                KrakArr[i].eat()
        }
        for(let i in SkyArr){
                SkyArr[i].eat()
        }
        for(let i in HeartArr){
                HeartArr[i].eat()
        }



              

}
