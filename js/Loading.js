function Loading (option){
	this._init(option);
}

Loading.prototype = {
	_init : function (option){
		//当前图片 及索引
		this.frameIndex = 0;
		//图片组
		this.frames = option.frames;		
		this.frame = this.frames[0];
		this.width = option.width;
		this.height = option.height;
		this.x = option.x;
		this.y = option.y;
		this.speed = 1000 / option.fps;
		this.lastTime = 0;
		
	},
	move : function(){
		var currentTime = new Date().getTime();
		if (currentTime - this.lastTime >= this.speed){
			this.frame = this.frames[this.frameIndex];			
			this.frameIndex ++ ;			
			this.lastTime = new Date().getTime();
		}
	},
	render: function (ctx){
		ctx.drawImage(this.frame,this.x,this.y);
	}
}
