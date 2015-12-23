#BigPlane

## 游戏状态
- start
	++ 登录游戏，进入主界面，并未开始游戏的初始状态为start
	++ 背景在移动
	++ 显示游戏logo等信息
- starting
	++ 过度状态，登录状态下点击鼠标后，状态转换为 starting
	++ 
- running
	++ starting 状态下加载完游戏相关图片，进入running状态
	++ 当鼠标从canvas外 移入时，如果当前游戏状态为 pausing时，游戏状态转变为running
- pausing
	++ 鼠标离开 canvas 画布，游戏暂停
	++ 
- gameover
	++ Life为0，且销毁过程结束，游戏结束
	
## 计时器 setInterval 
- 数量：1 
- 一个计时器控制所有组件，只控制刷新频率，每个组件有自己的速度 fps
- 计时器测量是否到达组件运动时机
	

## 设计元素
- 数据对象：只负责封装基本数据（属性）
- 业务对象：负责业务逻辑的计算（判断行走，碰撞等）

### 天空 
- 
