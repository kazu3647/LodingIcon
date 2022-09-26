var cvs;
var addLen = 0;
var center = [100, 100];
var radius = 100;
var angle = Math.PI / 2;

window.addEventListener("DOMContentLoaded", function() {
    console.log("Hexagram!!");
    draw();
});

function draw() {
    var canvas = document.getElementById('Hexagram');
    if (!canvas || !canvas.getContext) {
        return false;
    }
    cvs = canvas.getContext('2d');

    // ここから描画を開始
    window.requestAnimationFrame((ts) => loop(ts));
}

function loop(timeStamp) {
    // 描画のクリア
    cvs.clearRect(0, 0, 200, 200);

    angle = angle < Math.PI*3/2 ? angle + Math.PI/99 : Math.PI/2

    // 正六角形の描画
    cvs.beginPath();
    for (let i = 0; i < 2*Math.PI; i = i + Math.PI/3){
        cvs.lineTo(
            center[0] + radius * Math.cos(i + angle),
            center[1] + radius * Math.sin(i + angle));
    }
    cvs.stroke();

    // 六芒星の描画
    // つまり三角形を上下逆さに2つ描画する
    for (let i = 0; i < 2*Math.PI; i += Math.PI){
        cvs.beginPath();
        for (let j = 0; j <= 2*Math.PI; j += Math.PI*2/3){
            cvs.lineTo(
                center[0] + radius * (Math.cos(j + i + angle)), 
                center[1] + radius * (Math.sin(j + i + angle)));
        }
        cvs.stroke();
        // cvs.fill();
    }

    // 繰り返す
    // window.requestAnimationFrame((ts) => loop(ts));

}
