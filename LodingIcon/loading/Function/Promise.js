
// setTimeout ('コールバック関数', 'タイムアウト時間' );
function waitTime( sec ) {

    console.log( sec + "秒の処理を開始" );
    // resolve()が実行されたら戻り値を返す
    return new Promise( function( resolve ) {
        // sec秒後に処理を実行
        setTimeout( function() {
            console.log( sec + "秒かかる処理を完了" );
            // Promiseはresolveすると戻り値を返す
            resolve();
        }, sec * 1000 );
    });
}

waitTime( 3 );
waitTime( 5 );
waitTime( 9 );
console.log( "全ての処理が完了しました！" );