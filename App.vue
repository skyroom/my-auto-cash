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

<style>
	/*每个页面公共css */
	uni-page-body, 
	.page-box {
		width: 100%;
		height: 100%;
	}
	
	.hover-class {
		opacity: 0.7;
	}
</style>
