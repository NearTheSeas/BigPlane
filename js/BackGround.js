function BackGround(option){
	this._init(option);
}

BackGround.prototype = {
	//初始化
	_init:function(option){
		console.log('开始初始化');
		this.img=option.img;
		this.width=option.width;
		this.height= option.height;
		this.speed = 1000/option.fps;
		//第一幅图的 x,y 坐标
		this.x1=0; 
		this.y1=0;
		//第二幅图 x,y 
		this.x2=0; 
		this.y2= -this.height; //第二幅图位于第一幅图上方 与轮播类似			
		this.lastTime = 0; //上一次执行动画的时间，用于判断是否到达背景移动的时机
	},
//	背景移动
	move:function(){
//		console.log("开始移动");
//		console.log('y1:'+this.y1);
//		console.log('y2:'+this.y2);
		var currentTime = new Date().getTime();
		//判断是否到达运动的时间
		if(currentTime - this.lastTime >= this.speed){
			this.y1++;
			this.y2++;
			this.lastTme = new Date().getTime();
		}
		//判断背景图是否超出画布
		if(this.y1>=this.height){
			this.y1 = -this.height;
		}
		if(this.y2>=this.height){
			this.y2 = -this.height;
		}
	},
	//绘制背景
	render:function(ctx){
//		console.log('开始渲染');
		//没有使用img.onload 不使用计时器 无法看到效果
		ctx.drawImage(this.img, this.x1,this.y1);
		ctx.drawImage(this.img, this.x2,this.y2);
	}
		
}
