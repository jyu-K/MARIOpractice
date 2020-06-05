//
//定数の定義用のJS
//

const GAME_FPS 　　　= 1000/60; //FPS
const SCREEN_SIZE_W = 256;　　　//画面サイズ横
const SCREEN_SIZE_H = 224;　　　//画面サイズ縦

//一画面当たりのマップチップのサイズ
const MAP_SIZE_W    = SCREEN_SIZE_W/16;
const MAP_SIZE_H    = SCREEN_SIZE_H/16;

//マップデータのブロックの数
const FIELD_SIZE_W  = 256;
const FIELD_SIZE_H  = 14;
//



//
//スプライトの基本クラス
//
class Sprite
{
    
    constructor(sp,h,ay,d,x,y,vx,vy)
    {
        
        this.sp = sp;
        this.x = x<<8;
        this.y = y<<8;
        this.ay = ay;
        this.w = 16;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
        this.sz = 0;
        this.anim=0;
        this.acou=0;
        this.dirc=d;
        this.muteki = 0;
        this.tekiKill = false;
        
        this.kill = false;
        this.count = 0;
        
        this.curiKT=10;//くりぼーの死ぬ時間
        //console.log(this.ay);
    }
    
    //あたり判定
    checkHit(obj)
    {
        //console.log(this.ay);
        //console.log(this.muteki);
        //物体1
        let left1   = (this.x>>4)     +2;
        let right1  = left1 + this.w  -4;
        let top1    = (this.y>>4)     +5+this.ay;
        let bottom1 = top1 + this.h   -7;

        //物体２
        let left2   = (obj.x>>4)     +2;
        let right2  = left2 + obj.w  -4;
        let top2    = (obj.y>>4)     +5+obj.ay;
        let bottom2 = top2 + obj.h   -7;
        
        //敵の頭を踏んだか判定　
        if( right2  > left1    &&
            left2   < right1   &&
            bottom2+7 > top1   -5  &&
            bottom2+7 < top1   +7  &&
            this.muteki < 50)this.tekiKill=true;
            //console.log(this.tekiKill);
            
            //else {this.tekiKill=false;}
            //
        /*if( left1   <= right2 &&
            right1  >= left2  &&
            top1    <= bottom2 &&
            bottom2+7 <top1+7 )this.tekiKill=true;*/
        
        return( left1   <= right2 &&
                right1  >= left2  &&
                top1    <= bottom2 &&
                bottom1 >= top2);

    }
    
    //更新処理
    update()
    {
        if(this.vy<64)this.vy+=GRAVITY;
        this.x+=this.vx;
        this.y+=this.vy;
        
        if((this.y>>4)>FIELD_SIZE_H*16)this.kill=true;

    }
    
    //描画処理
    draw()
    {
        let an = this.sp;
        let sx = (an&15)<<4;
        let sy = (an>>4)<<4;
        let px = (this.x>>4)-(field.scx);
        let py = (this.y>>4)-(field.scy);
        let s;
        if(this.sz)s=this.sz;
        else s=16;
        
        vcon.drawImage(chImg,sx,sy,16,s,px,py,16,s);
 
    }
    
    
}
