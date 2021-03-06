/**
 * Created by wujincun on 2016/8/2.
 */
function StarObj() {
    this.x;
    this.y;
    this.picNo;
    this.timer;
    this.xSpd;
    this.ySpd;
}
StarObj.prototype.init = function () {
    this.x = Math.random() * 600 + 100;
    this.y = Math.random() * 300 + 150;
    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;
    this.xSpd = Math.random() * 3 - 1.5;
    this.ySpd = Math.random() * 3 - 1.5;
};
StarObj.prototype.update = function () {
    this.x += this.xSpd * deltaTime * 0.004;
    this.y += this.ySpd * deltaTime * 0.004;
    //this.x超过范围init
    //this.y超过范围init
    if (this.x < 100 || this.x > 700) {
        this.init();
        return
    }
    if (this.y < 150 || this.y > 450) {
        this.init();
        return
    }
    this.timer += deltaTime;
    if (this.timer > 50) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
};
StarObj.prototype.draw = function () {
    //save()
    ctx.save();
    //globalAlpha全局透明度
    ctx.globalAlpha = life;//[0,1]

    //drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7)
    //restore()
    ctx.restore();
};
function drawStars() {
    for (var i = 0; i < num; i++) {
        starts[i].update();
        starts[i].draw()
    }
}
function aliveUpdate() {
    if (switchy) {//in area
        //show stars
        life += 0.03 * deltaTime * 0.05;//0.05调整速度
        if (life > 1) {
            life = 1
        }
    } else {//out area
        //hide stars
        life -= 0.03 * deltaTime * 0.05;
        if (life < 0) {
            life = 0
        }

    }
    console.log(switchy)
}

