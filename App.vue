<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
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
</style>
