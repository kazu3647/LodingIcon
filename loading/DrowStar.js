window.addEventListener("DOMContentLoaded", function() {
    console.log("DrowStar!!");
    draw();
});

var cvs;
var length = 30;
var radius = 100;
var center = [100, 300];
// 5つの点が参照できる
// 現在地から線を引いて移動させる
// 移動した場所の長さが未満なら、次の点への残りの線を引く


function draw(){
    var canvas = document.getElementById('DrowStar');
    if (!canvas || !canvas.getContext) {
        return false;
    }
    cvs = canvas.getContext('2d');

    // starの描画をする(黒)
    // cvs.clearRect(0, 200, 200, 400);
    cvs.beginPath();
    for (let i = 0; i <= 4*Math.PI; i += 4*Math.PI/5){
        cvs.lineTo(
            center[0] + radius * Math.sin(i),
            center[0] - radius * Math.cos(i)
        );
    }
    cvs.stroke();

    // ここから描画を開始
    window.requestAnimationFrame((ts) => loop(ts));
}

function loop(){
    // starをなぞり続ける(赤)
    cvs.beginPath();
    cvs.strokeStyle = 'red';


    window.requestAnimationFrame((ts) => loop(ts))
}