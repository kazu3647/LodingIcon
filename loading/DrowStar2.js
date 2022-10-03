
export const drowStar = function(center) {
/*
    var canvas = document.getElementById('DrowStar');
    if (!canvas || !canvas.getContext) {
        return false;
    }
    cvs = canvas.getContext('2d');
*/
    
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

}