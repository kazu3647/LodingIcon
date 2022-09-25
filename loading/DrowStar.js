onload = function() {
    dorw();
};

var cvs;
var length = 30;
var radius = 100;
var center = [200, 100];

function dorw(){
    var canvas = document.getElementById('DorwStar');
    if (!canvas || !canvas.getContext) {
        return false;
    }
    cvs = canvas.getContext('2d');

    // starの描画をする(黒)
    cvs.clearRect(0, 0, 200, 200);
    cvs.beginPath();
    for (let i = 0; i <= 2*Math.PI; i = 2*Math.PI/5){
        cvs.lineTo(
            center[0] + radius * Math.cos(i),
            center[0] + radius * Math.sin(i)
        );
    }
    cvs.stroke();

    // ここから描画を開始
    window.requestAnimationFrame((ts) => loop(ts));
}

function loop(){
    // 描画のクリア
    // cvs.clearRect(0, 0, 640, 480);

}