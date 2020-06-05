//
//おじさんクラス
//
const ANIME_STAND=1;
const ANIME_WALK =2;
const ANIME_BRAKE=4;
const ANIME_JUMP =8;
const ANIME_DOWN =16;
const GRAVITY    =5;
const MAX_SPEED  =32;


const TYPE_MINI = 1;
const TYPE_BIG  = 2;
const TYPE_FIRE = 4;


//ゴール用変数（次の面に行くときfalseにすること
let SGool     = false;
let GL        = 100;
let glr       = 40;
let ojiSi     = false;
let ojiSimati = 50;
let bDash     = 0; //Bダッシュ
let bJump     = 0; //Bジャンプ
let jump_non  = false;


class Ojisan
{
    constructor(x,y)
    {
        this.x=x<<4;
        this.y=y<<4;
        this.ay = 16;
        this.w=16;
        this.h=16;
        this.vx=0;
        this.vy=0;
        this.anim=0;
        this.snum=0;
        this.acou=0;
        this.dirc=0;
        this.jump=0;
        
        this.kinoko = 0;
        this.dameji = 0;
        this.type = TYPE_MINI;
    }
    
    //ゴールの判定
    checkGool()
    {
        if(SGool == true)return;
        let lx = ((this.x+this.vx)>>4);
        let ly = ((this.y+this.vy)>>4);
        
        if(field.isGool(lx+8,ly+31) ) //ゴールしたかの判定
        {
            KeyLook = true;//キー使用不可にする
            SGool = true;
            //console.log(this.x)
            
            //this.y  = 0;
            this.vx = 0;
            this.vy = 0;
            this.x  = this.x+16;
            this.jump = 0;
        }
    }
            //------ゴールした後の行動------
    
    goolEnd()
    {
        if(this.y<(160<<4))
        {
            this.y += 8;//棒を降りてくる
        }
        else　//棒を降りた後歩く
        {
            this.vx=8;
            if(glr>=0)glr--;
            else
            {
                //アニメ用のカウンタ
                this.acou++;
                if(Math.abs(this.vx)==MAX_SPEED)this.acou++;
                this.snum = ANIME_WALK+((this.acou/6)%3);
                //ちっちゃいおじさんの時は+32
                if( this.type==TYPE_MINI) this.snum +=32;
                this.x += this.vx;//実際の描画
                
            }
        }
    }
    
    //床の判定
    checkFloor()
    {
        if(ojiSi==true)
        {
            KeyLook = true;
            return;
        }
        if(this.vy<=0)return;
        let lx = ((this.x+this.vx)>>4);
        let ly = ((this.y+this.vy)>>4);
        
        let p = this.type==TYPE_MINI?2:0;
        
        if(field.isBlock(lx+1+p,ly+31) ||
           field.isBlock(lx+14-p,ly+31))
        {
            if(this.anim == ANIME_WALK)this.anim=ANIME_WALK;
            this.jump = 0;
            this.vy = 0;
            
            this.y = ((((ly+31)>>4)<<4)-32)<<4;  
        }
    }
    //天井の判定
    checkCeil()
    {
        if(this.vy>=0)return;
        let lx = ((this.x+this.vx)>>4);
        let ly = ((this.y+this.vy)>>4);
        
        let ly2 = ly+(this.type==TYPE_MINI?21:5);
        
        let bl;
        if(bl=field.isBlock(lx+8,ly2) )
        {
            this.jump = 15 + bDash;
            this.vy   = 0;
            console.log(this.jump);
            let x =(lx+8)>>4;
            let y =(ly2)>>4;
            
            if (this.type ==TYPE_MINI)
            {
                block.push( new Block(bl,x,y)); 
                if (bl==368 )item.push( new Item(218,16,0,0,x,y,0,0));
            }else if(bl==371 || bl==372){
                block.push(new Block(bl,x,y,1, 20,-60));
                block.push(new Block(bl,x,y,1,-20,-60));
                block.push(new Block(bl,x,y,1, 20,-20));
                block.push(new Block(bl,x,y,1,-20,-20));
            }else{
                block.push( new Block(bl,x,y));
                
                if (bl==368 )item.push( new Item(218,16,0,0,x,y,0,0));
            }
        }
    }
     //横の壁の判定
    checkWall()
    {
        let lx = ((this.x+this.vx)>>4);
        let ly = ((this.y+this.vy)>>4);
        //console.log(lx);
        let p = this.type==TYPE_MINI?16+8:9;
        
        //右側のチェック
        if(field.isBlock(lx+15,ly+p) ||
           (this.type==TYPE_BIG &&(
           field.isBlock(lx+15,ly+15) ||
           field.isBlock(lx+15,ly+24))))
        {
            this.vx = 0;
            this.x   -= 8;  
        }else
        //左側のチェック
        if(field.isBlock(lx,ly+p) ||
           (this.type==TYPE_BIG &&(
           field.isBlock(lx,ly+15) ||
           field.isBlock(lx,ly+24)))||
           field.scx>=lx)
        {
            this.vx  = 0;
            this.x  += 8;  
        }
        
    }
    //ジャンプ処理
    updateJump()
    {
        if(this.jump==0)jump_non=false;
        
        if(jump_non==true)return;
        if(keyb.BBUTTON==true)bJump=4;
        else bJump=0;
        //ジャンプ
        //console.log(this.y,this.vy,this.jump);
        if(keyb.ABUTTON && this.vy<=15)
        {
            if(this.jump==0)
            {
                this.anim = ANIME_JUMP;
                this.jump=1;
            }
            
            if(this.jump< 15 + bDash)this.vy = -(72-this.jump);
            //console.log(this.vy);
        }
        else if(!keyb.ABUTTON && this.jump!=0)jump_non = true;
        else if(!keyb.ABUTTON && this.jump==0)
        {
            
            if(this.vy<=0)
            {
                this.anim = ANIME_JUMP;
                this.jump=1;
                if(this.vy>-16)this.vy-=16;
            }
            else this.anim = ANIME_WALK;
        }
        if(this.jump)this.jump++;
        
        
    }
    //横方向の移動
    updateWalkSub(dir)
    {
        if(keyb.BBUTTON==true)bDash=8;
        else bDash=0;
        //最高速まで加速
        if(keyb.BBUTTON==false && this.vx >  MAX_SPEED)this.vx--;
        else if( dir==0 && this.vx <  MAX_SPEED + bDash )this.vx++;
        if(keyb.BBUTTON==false && this.vx <  -MAX_SPEED)this.vx++;
        else if( dir==1 && this.vx > -MAX_SPEED - bDash )this.vx--;
        //else if(field.scx<<4>=this.x)this.vx=1;
        //console.log(this.vx);
        //ジャンプしていない時だけ
        if(!this.jump)
        {
            //console.log(this.jump);
            //立ちポーズだったときはカウンタリセット
            if(this.anim==ANIME_STAND)this.acou=0;
            //アニメを歩きアニメ
            this.anim = ANIME_WALK;
            //方向を設定
            this.dirc   = dir;
            //逆方向の時はブレーキをかける
            if(dir==0&&this.vx<0    )this.vx++;
            if(dir==1&&this.vx>0    )this.vx--;
            //逆に強い加速の時はブレーキアニメ
            if(dir==1&&this.vx>8 ||
                dir==0&&this.vx<-8)
                this.anim=ANIME_BRAKE;
        }       
    }
    
    //しゃがむ処理
    updateDown()
    {
        if(keyb.Bottom)
        {
            if(this.type!=TYPE_MINI )
            {
                console.log(this.type,TYPE_MINI);
                if(this.vx>0)this.vx-=2;
                else if(this.vx<0)this.vx+=2;
                this.anim = ANIME_DOWN;
            }else{
                this.anim = ANIME_STAND;
                this.vx=0
            }
        }
    }
    
    //歩く処理
    updateWalk()
    {
           //横移動
        if(keyb.Left ){
            this.updateWalkSub(1);
        }else if(keyb.Riget){
            this.updateWalkSub(0);
        }else{
            if(!this.jump)
            {
                if(this.vx>0||this.jump)this.vx-=1;
                if(this.vx<0||this.jump)this.vx+=1;
                if(!this.vx )this.anim=ANIME_STAND;
            }
        }
    }
    //スプライトを買える処理
    updateAnim()
    {
        //スプライトの決定
        switch(this.anim)
        {
            case ANIME_STAND:
                this.snum = 0;
                break;
            case ANIME_WALK:
                if(MAX_SPEED < this.vx || -MAX_SPEED > this.vx)this.snum = 2+((this.acou/2)%3);
                else this.snum = 2+((this.acou/6)%3);
                break;
            case ANIME_JUMP:
                this.snum = 6;
                break;
            case ANIME_BRAKE:
                this.snum = 5;
                break;
            case ANIME_DOWN:
                this.snum = 1;
                break;
        }
        //ちっちゃいおじさんの時は+32
        if( this.type==TYPE_MINI) this.snum +=32;
        
        //左向きの時は+48を使う
        if(this.dirc)this.snum +=48;
    }
    

    //マイフレームごとの更新処理
    update()
    {
        
        if(SGool==false)
        {
            //ゴールのチェック
            this.checkGool();
            //キノコを採った時のエフェクト
            if(this.kinoko)
            {
                let anim =[32,14,32,14,32,14,0,32,14,0];
                this.snum = anim[this.kinoko>>2];
                this.h = this.snum ==32?16:32;
                if(this.dirc)this.snum +=48;
                if(++this.kinoko ==40)
                {
                    this.type = TYPE_BIG
                    this.ay = 0;
                    this.kinoko=0;
                }
                return;
            }

            //ダメージを受けた時のエフェクト
            if(this.dameji)
            {
                if(this.type == TYPE_MINI)
                {
                    if (ojiSi == false)this.vy=0;
                    ojiSi = true;
                    this.snum = 46;
                    //console.log(ojiSimati);
                    if(ojiSimati>13)ojiSimati--;
                    else if(ojiSimati>0 && ojiSimati<=13)
                    {
                        ojiSimati--;
                        this.vy-=GRAVITY;
                        this.y = this.y+this.vy;
                    }
                    else{
                        //console.log("a");
                        this.vy+=GRAVITY;
                        this.y = this.y+this.vy;
                    }
                    
                    return;
                }else{
                    let anim =[0,14,0,14,0,14,32,0,14,32];
                    this.snum = anim[this.dameji>>2];
                    this.h = this.snum ==32?16:32;

                    if(this.dirc)this.snum +=48;

                    if(++this.dameji ==40)
                    {
                        this.type = TYPE_MINI
                        this.ay = 16;
                        this.dameji=0;
                    }
                    /*//ダメージを受けた後点滅させたい
                    if(teki.muteki>=0)
                    {
                        console.log(teki.muteki);
                        let anim1 =[352,32,352,32,352,32];
                        this.snum = anim1[this.dameji>>20]; 
                        if(this.dirc && !anim1==352)this.snum +=48;
                    }*/
                    return;
                }
            }
 
        }
        if(SGool==true)
        {
            
            //ゴールした後のポーズ
            if(this.type == TYPE_MINI)this.snum=8+32;
            if(this.type == TYPE_BIG )this.snum=8;
            if(this.type == TYPE_FIRE)this.snum=264;
            if(--GL>0)return;
            this.goolEnd();//ゴールした時の処理
            this.updateWalkSub(0);
            
            
            this.checkFloor();//test
            
            return;
        }
       
        //アニメ用のカウンタ
        this.acou++;
        if(Math.abs(this.vx)==MAX_SPEED)this.acou++;
        
        this.updateJump();//ジャンプ処理
        if(!keyb.Bottom)this.updateWalk();
        this.updateDown();
        this.updateAnim();
       
        
        this.checkWall();               //横の壁のチェック
        this.checkFloor();              //床のチェック
        this.checkCeil();//天井のチェック
        if(this.vy<64)this.vy+=GRAVITY; //重力
        //実際に座標を変えてる
        this.x += this.vx;
        if(this.y <= 10000 )this.y += this.vy;
        
    }
    //毎フレームごとの描写処理
    draw()
    {
        let px = (this.x>>4)-field.scx;
        let py = (this.y>>4)-field.scy;
        
        let sx = (this.snum&15)*16;
        let sy = (this.snum>>4)*16;
        let w = this.w;
        let h = this.h;
        
        py +=(32-h);
        
        vcon.drawImage(chImg,sx,sy,w,h,px,py,w,h);
    }
}