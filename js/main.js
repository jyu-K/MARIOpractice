const SCREEN_SCALE  = 2.5;//画面を拡大する倍率

//vcanは仮想キャンバス　
let vcan = document.createElement("canvas");
let vcon = vcan.getContext("2d");

let can = document.getElementById("can");
can.width = window.innerWidth;
can.height = window.innerHeight;
let con = can.getContext("2d");

vcan.width = SCREEN_SIZE_W;
vcan.height = SCREEN_SIZE_H;

can.width = SCREEN_SIZE_W*SCREEN_SCALE;
can.height = SCREEN_SIZE_H*SCREEN_SCALE;

con.mozimageSmoothingEnabled   = false;
con.msimageSmoothingEnabled    = false;
con.webktimageSmoothingEnabled = false;
con.imageSmoothingEnabled      = false;

//フレームレート維持するための変数
let frameCount = 0;
let statTime; 

let chImg    = new Image();
chImg.src    = "img/sprite.png";

//キーボード
let keyb={};

//死亡したときとゴールした時にキーを使用不可にする
//(次の面に行くときfalseにすること
let KeyLook = false;

//おじさんを作る
let ojisan = new Ojisan(128,100);

//フィールドを作る
let field = new Field();

//ブロックのオブジェクト
let block = [];
let item = [];
/*-----------------------------------------*/
/*敵のオブジェクト 
(１ｽﾌﾟﾗｲﾄ番号,
　2ｽﾌﾟﾗｲﾄｻｲｽﾞ,
　3あたり判定用(サイズが16の時は16、32の時は0,
　4ディレクトリ(右とか左むくやつは1
　5初期表示位置のx座標1/128で表示される？,
　6初期表示位置のy座標1/128で表示される？,
　7vx,
  8vy)*/
let teki = [new Teki(130,32,12,1,10,1,0,0),
            new Teki(96,16,16,0,20,1,0,0),
            new Teki(130,32,12,1,30,1,0,0),
            new Teki(96,16,16,0,50,1,0,0),
            new Teki(96,16,16,0,53,1,0,0),
            new Teki(96,16,16,0,55,1,0,0),
            new Teki(96,16,16,0,57,1,0,0),
            new Teki(130,32,12,1,60,1,0,0),
            new Teki(96,16,16,0,65,1,0,0),
            ];
/*-----------------------------------------*/

function updateObj(obj)
{
    //スプライトのブロックを更新
    for(let i=obj.length-1;i>=0;i--)
    {
        obj[i].update();
        if(obj[i].kill)obj.splice(i,1);
    }    
}

//更新処理
function update()
{
    
    if((SCREEN_SIZE_W<<4)-16 <= ojisan.x>>4)
    {
        KeyLook = false;
        stage++;
        
        if(stage <= fieldData.length-1)
        {
       
            SGool = false;
            ojisan = new Ojisan(128,100); 
            field.scx = 0;
            field.scy = 0;
            let teki = [new Teki(130,32,12,1,10,1,0,0),
                new Teki(96,16,16,0,20,1,0,0),
                new Teki(130,32,12,1,30,1,0,0),
                new Teki(96,16,16,0,50,1,0,0),
                new Teki(96,16,16,0,53,1,0,0),
                new Teki(96,16,16,0,55,1,0,0),
                new Teki(96,16,16,0,57,1,0,0),
                new Teki(130,32,12,1,60,1,0,0),
                new Teki(96,16,16,0,65,1,0,0),
                ];
        }
    }
    
     if(stage >= fieldData.length)return;   
    console.log("c");
    //マップの更新
    field.update();
    //カタヤマリオの更新
    ojisan.update();
    
    updateObj(block);
    updateObj(item);
    updateObj(teki);
}

function drawSprite(snum,x,y)
{
    let sx = (snum&15)*16;
    let sy = (snum>>4)*16;
    
    vcon.drawImage(chImg,sx,sy,16,32,x,y,16,32);
}

function drawObj(obj)
{
    //スプライトのブロックを表示
    for(let i=0;i<obj.length;i++)
        obj[i].draw();
}


//描画処理
function draw()
{
    console.log(stage,fieldData.length-1);
    if(stage >= fieldData.length)
    {
         msg("CLEAR","red");
        console.log("b");
        return;
        
    }
    console.log("a");
    //画面を水色でクリア
    vcon.fillStyle = "#66AAFF"; //水色
    vcon.fillRect(0,0,SCREEN_SIZE_W,SCREEN_SIZE_H);
    
    //マップを表示
    field.draw();
    
    //
    drawObj(block);
    drawObj(item);
    drawObj(teki);
    
    //カタヤマリオを表示
    ojisan.draw();
        
    //でバック情報を表示
    vcon.font="20px 'Impact'";
    vcon.fillStyle = "white"; //白
    vcon.fillText("TIME:"+(frameCount/60).toFixed(2),10,20);
    
    //仮想画面から日画面へ拡大転送
    con.drawImage(vcan,0,0,SCREEN_SIZE_W,SCREEN_SIZE_H,
                       0,0,SCREEN_SIZE_W*SCREEN_SCALE,SCREEN_SIZE_H*SCREEN_SCALE);
    if(ojisan.y >= 8000)
    {
        ojisan.x = 0;
        msg("GAME" + stage + "  OVER","black");
    }
    /*else if(SGool == true)
    {
        msg("STAGE" + stage + " CLEAR","red");
        
    }*/
}

function msg(m,c)
{
    KeyLook=true;
    let s=m;
    con.font = "80px 'MS ゴシック'";
    let w = con.measureText(s).width;
    let x = SCREEN_SIZE_W*SCREEN_SCALE/2-w/2;
    let y = SCREEN_SIZE_H*SCREEN_SCALE/2;
    con.lineWidth = 4;
    con.strokeText(s,x,y);
    con.fillStyle=c;
    con.fillText(s,x,y);
}
//setInterval(mainLoop,1000/60);

//ループ開始
window.onload = function()
{
    //console.log("a");
    //if(ojisan.SGool)return;
    startTime = performance.now();
    
    mainLoop();
     
}

//メインループ
function mainLoop()
{
    //console.log("i");
    let nowTime  = performance.now();
    let nowFrame = (nowTime-startTime)/GAME_FPS;
    
    if(nowFrame >frameCount)
    {
        let c=0;
        while(nowFrame > frameCount)
        {
            frameCount++;
            //更新処理
            update();
            if( ++c>=4)break;
        }
        //描画処理
        draw();
    }       
    requestAnimationFrame(mainLoop);
}




/*-------------------スマホでスクロールを止める処理------------------------------*/
let movefun = function( event ){
	event.preventDefault();
}
 
// スクロール停止の処理
window.addEventListener( 'touchmove' , movefun , { passive: false } );

/*let scrollOff = function( e ){
	e.preventDefault();
}
// スクロールをキャンセル
document.addEventListener( 'touchmove',scrollOff, false);*/
//removeEventListenerで「スクロールをキャンセル」をキャンセル
//document.removeEventListener( 'touchmove', scrollOff, false );
/*---------------------------ここまで----------------------------------------*/

/*------------------------スマホでの処理--------------------------------------*/
//スマホがタップされたら
document.getElementById("A_BTN").addEventListener("touchstart", function(){
keyb.ABUTTON = true;
});
document.getElementById("B_BTN").addEventListener("touchstart", function(){
keyb.BBUTTON = true;
});
document.getElementById("LEFT_BTN").addEventListener("touchstart", function(){
keyb.Left = true;
});
document.getElementById("TOP_BTN").addEventListener("touchstart", function(){
keyb.Top = true;
});
document.getElementById("RIGHT_BTN").addEventListener("touchstart", function(){
keyb.Riget = true;
});
document.getElementById("BOTTOM_BTN").addEventListener("touchstart", function(){
keyb.Bottom = true;
});

//スマホから指が離れたら
document.getElementById("A_BTN").addEventListener("touchend", function(){
keyb.ABUTTON = false;
});
document.getElementById("B_BTN").addEventListener("touchend", function(){
keyb.BBUTTON = false;
});
document.getElementById("LEFT_BTN").addEventListener("touchend", function(){
keyb.Left = false;
});
document.getElementById("TOP_BTN").addEventListener("touchend", function(){
keyb.Top = false;
});
document.getElementById("RIGHT_BTN").addEventListener("touchend", function(){
keyb.Riget = false;
});
document.getElementById("BOTTOM_BTN").addEventListener("touchend", function(){
keyb.Bottom = false;
});
/*---------------------------ここまで----------------------------------------*/ 

/*---------------------------PCでの処理--------------------------------------*/
//キーボードが押されたときに呼ばれる
document.onkeydown = function(e)
{
    if(KeyLook==false)
    {
        if(e.keyCode ==37)keyb.Left = true;
        if(e.keyCode ==39)keyb.Riget = true;
        if(e.keyCode ==40)keyb.Bottom = true;
        if(e.keyCode ==90)keyb.BBUTTON = true;
        if(e.keyCode ==88)keyb.ABUTTON = true;

        //if(e.keyCode ==65)field.scx--;
        //if(e.keyCode ==83)field.scx++;
    }
}

//キーボードが離されたときに呼ばれる
document.onkeyup = function(e)
{
    if(e.keyCode ==37)keyb.Left = false;
    if(e.keyCode ==39)keyb.Riget = false;
    if(e.keyCode ==40)keyb.Bottom = false;
    if(e.keyCode ==90)keyb.BBUTTON = false;
    if(e.keyCode ==88)keyb.ABUTTON = false;
}
/*---------------------------ここまで----------------------------------------*/   