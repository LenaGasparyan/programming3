
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

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

 matrix = matrixGenerator(30, 17,7,4,5,4,6,8,10,12,9)

    io.sockets.emit('send matrix', matrix)
    

    grassArr = [];
    grassEaterArr = []
    predatorArr = []
    HrashagorcArr = []
    gishatichaspanArr = []
    FairyArr = []
    WatherArr = []
    KrakArr = []
    SkyArr = []
    HeartArr = []
   
  
    Grass = require("./grass")
    GrassEater = require("./grassEater")
    Predator = require("./predator")
    Hrashagorc = require("./hrashagorc")
    Gishatichaspan = require("./gishatichaspan")
    Fairy = require("./fairy")
    Wather = require("./wather")
    Krak = require("./krak")
    Sky = require("./sky")
    Heart = require("./heart")
   

     function createObject() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y);
                    grassArr.push(gr)
                }
                else if (matrix[y][x] == 2) {
                    var grEater = new GrassEater(x, y);
                    grassEaterArr.push(grEater)

                }
               else if(matrix[y][x] == 3){
                    let pre = new  Predator(x,y)
                    predatorArr.push(pre)
               }
               else if(matrix[y][x] == 4){
                    let hr = new  Hrashagorc(x,y)
                    HrashagorcArr.push(hr)
               }
               else if(matrix[y][x] == 5){
                    let gi = new  Gishatichaspan(x,y)
                    gishatichaspanArr.push(gi)
               }
              else if(matrix[y][x] == 6){
                    let fa = new  Fairy(x,y)
                    FairyArr.push(fa)
               }
               else if(matrix[y][x] == 7){
                    let wa = new  Wather(x,y)
                    WatherArr.push(wa)
               }
               else if(matrix[y][x] == 8){
                    let kr = new  Krak(x,y)
                    KrakArr.push(kr)
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
       
        io.sockets.emit('send matrix', matrix)


    }


    function avartakan() {
    for (var i in grassArr) {
          grassArr[i].mul()
        }
    for (var i in grassEaterArr) {
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
    
        io.sockets.emit("send matrix", matrix);
    }

    
    setInterval(avartakan, 400)
    


io.on('connection', function () {
    createObject()
})

