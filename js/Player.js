function Player(option){
	this._init(option);
}

Player.prototype = {
	_init : function (option){
		this.frame = null;
		this.frameIndex = 0;
		this.frames = option.frames;
		this.width = option.width;
		this.height = option.height;
		this.speed = 1000 / option.fps;
//		this.x = (option.x-option.width)/2;
//		this.y = option.y-option.height-30;
		this.x=option.x;
		this.y=option.y;
		//player的飞机分两个状态，一是飞行状态 2张图片，二是爆炸状态 4张图片
		this.baseFrameCount=2;		
		this.lastTime = 0; //上一次绘制飞机的时间
		this.shootInterval = 0; //绘制子弹的速度，根据子弹的speed
		this.shootLastTime = 0; //最后一次绘制子弹的时间
	},
	move : function (){
		var now = new Date().getTime();
		if(now - this.lastTime > this.speed){
			this.frame = this.frames[this.frameIndex % this.baseFrameCount]; 
			this.frameIndex++;
			this.lastTime = new Date().getTime();			
			console.log(this.x +":"+this.y);
		}
	},
	makeBullet : function () {
		var now = new Date().getTime();
		if(now - this.shootLastTime > this.speed){
			var bullet = new Bullet();
		}
	},
	render : function (ctx){
		ctx.drawImage(this.frame,this.x,this.y);
	}
}
