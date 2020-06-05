//
//敵のクラス
//
let tekiSiMati = 10;
class Teki extends Sprite
{
    
    //壁の判定
    checkWall()
    {
        let lx = ((this.x+this.vx)>>4);
        let ly = ((this.y+this.vy)>>4);
        
        //左右のチェック
        if( field.isBlock(lx+15,ly+19-(this.h-16))  ||
            field.isBlock(lx+15,ly+28) ||
            field.isBlock(lx,ly+19-(this.h-16))     ||
            field.isBlock(lx,ly+28))
        {
            this.vx   *= -1;
            //console.log(this.dirc);
            if(this.dirc==1)
            {
                this.sp +=32;
                this.dirc =2;
                
            }else if(this.dirc==2){
                this.sp -=32;
                this.dirc =1;
            }
        }
    }
    //床の判定
    checkFloor()
    {
         //重力
        if(this.vy<64)this.vy+=GRAVITY;
        
        if(this.vy<=0)return;
        let lx = ((this.x+this.vx)>>4);
        let ly = ((this.y+this.vy)>>4);

        if(field.isBlock(lx+1,ly+31) ||
           field.isBlock(lx+14,ly+31))
        {
            this.vy = 0;
            
        }
    }
    /*
    checkDeth()
    {
        if(this.tekiKill==true)
        {
            switch(this.sp)
            {
                case (96,97):  //クリボー
                    console.log("a");
                    
                    break;
                case 130: //亀
                    
                    break;
            }
        }
    }*/
    
    //更新処理
    update()
    {
        if(KeyLook==false)
        {
            //console.log(this.tekiKill);
            if(this.kill)return;
            if(ojisan.dameji)return;
            if(this.muteki>0)this.muteki--;

            //console.log(this.tekiKill);
            if(this.tekiKill == true )
            {
               
                console.log(ojisan.vy);
                if(ojisan.vy>0)
                {
                    ojisan.vy = 0;
                    //ojisan.y = ojisan.y + ojisan.vy;
                }
                //ojisan.vy -= 8;
                //ojisan.y = ojisan.y+ojisan.vy;


                ojisan.jump = 0;
                    //this.vx = 0;
                if(tekiSiMati>0)
                {
                    if(this.snum==96||this.snum ==97)this.snum = 98;
                    //console.log(this.snum);
                }
                else
                {
                    tekiSiMati = 10;
                    this.kill = true;
                }
                tekiSiMati--;
            }
            else
            {
                if(this.checkHit(ojisan))
                {       
                    if(this.muteki<=0)
                    {
                        ojisan.dameji=1;
                        this.muteki = 100;
                        return;
                    }
                } 
            }
        }
        if(this.tekiKill == false )
        {
            this.acou++;
            if(this.vx>=0)this.vx=8;//敵のスピードここで変えてる
        
            this.snum = Math.floor(this.sp+((this.acou/20)%2));
        }
        this.draw();
        
        //床のチェック
        this.checkFloor();
        //壁の判定
        this.checkWall();
        this.x += this.vx;
        this.y += this.vy;
        
        //this.checkDeth();
    }
    
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