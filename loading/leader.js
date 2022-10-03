// import { Hexagram2 } from './Hexagram2.js'
import { DrowStar2 } from './DrowStar2.js'

var unit = 100, 
    canvasList,
    info = {};

function init(){
    info.seconds = 0;
    info.t = 0;
    canvasList = new Set();

    // declare first canvas
    canvasList.add(document.getElementById("Hexagram"));

    // declare second canvas
    canvasList.add(document.getElementById("DrowStar"));

    // Initialize each camvas
    for (var canvas in vanvasList) {
        canvas.width = 200;
        canvas.height = 200;
        canvas.contextCache = canvas.getContext("2d");
    }

    // Common update process call
    update();
}

function update(){
    DrowStar2([100, 100]);
}