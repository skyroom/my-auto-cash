<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef  APP-PLUS
			this.windowFull(1);
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			// #ifdef  APP-PLUS
			windowFull(pr) {
				// 安卓沉浸式 0关闭 1安卓状态栏导航栏都进入沉浸模式 2设置状态栏沉浸 3设置导航栏沉浸 
				var main = plus.android.runtimeMainActivity();  
				var windowMe = main.getWindow();  
				plus.android.importClass(windowMe);  
				var decorView = windowMe.getDecorView();  
				plus.android.importClass(decorView);  
				var View = plus.android.importClass("android.view.View");  
				if (pr === 1) {  
				    decorView.setSystemUiVisibility(  
				        View.SYSTEM_UI_FLAG_LAYOUT_STABLE |  
				        View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |  
				        View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |  
				        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |  
				        View.SYSTEM_UI_FLAG_FULLSCREEN |  
				        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
				} else if (pr === 2) {  
				    decorView.setSystemUiVisibility(  
				        View.SYSTEM_UI_FLAG_LAYOUT_STABLE |  
				        View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |  
				        View.SYSTEM_UI_FLAG_FULLSCREEN |  
				        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
				} else if (pr === 3) {  
				    decorView.setSystemUiVisibility(  
				        View.SYSTEM_UI_FLAG_LAYOUT_STABLE |  
				        View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |  
				        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |  
				        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
				} else if (pr === 0) {  
				    decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);  
				}  
			},
			// #endif
		},
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import '~@/common/var.less';
	
	uni-page-body, page,  {
		width: 100%;
		height: 100%;
	}
	.page-box {
		width: 100%;
		height: 100%;
	} 
	.hover-class {
		opacity: 0.7;
	}
	
	@font-face {
		font-family: 'iconfont';
		src: url('~@/static/iconfont/iconfont.ttf');
	}
	
	.xpos-font {
		font-family: iconfont;
	}
	
	/* 边距 公用 */
	.ml20 {
		margin-left: 20px;
	}
	.ml10 {
		margin-left: 10px;
	}
	.mt20 {
		margin-top: 20px;
	}
	
	/* 字体颜色 公用 */
	.ysaaa {
		color: #aaa;
	}
	
	/* 分割线 */
	.white-block {
		height: 20upx;
	}
	
	/* 按钮样式 */
	.button {
		background-color: @theme-color;
		display: block;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		padding-left: 20upx;
		padding-right: 20upx;
		box-sizing: border-box;
		text-align: center;
		line-height: 2.5;
		font-size: 35upx;
		color: #fff;
		overflow: hidden;
		text-decoration: none;
		border-radius: 50upx;
	}
	.button.small {
		border-radius: 25upx;
	}
	
	/* radio 样式 */
	.xpos-radio {
		font-size: 55upx;
		color: #999;
		&.disabled {
			opacity: .3;
		}
		&.checked {
			color: @theme-color;
		}
	}
</style>
