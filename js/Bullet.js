function Bullet(option){
	this._init(option);
}

Bullet.prototype = {
	_init : function (option) {
		this.frame = option.frame;
		this.x = option.x;
		this.y = option.y;		
		this.height= option.height;
		this.width = option.width;
		this.speed = 1000 / option.fps;		
		this.lastTime = 0;
		
	},
	move : function(){
		this.y--;
	},
	render: function (ctx){
		ctx.drawImage(this.frame,this.x,this.y);
	}
}
