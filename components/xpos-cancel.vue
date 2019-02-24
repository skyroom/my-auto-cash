<template>
	<view class="cancel-box">
		<view class="button cancel-btn" hover-class="hover-class" @click="showConfirmHandler">
			<text>
				取消交易(
				<text v-text="cancelDuration"></text>
				秒)
			</text>
		</view>
		<xpos-dialog 
			ref="xdialog"
			:title="title"
			showCancelButton
			@confirmButton="clickConfirmButtonHandler"
			></xpos-dialog>
	</view>
</template>

<script>
	import xposDialog from '../components/xpos-dialog.vue';
	import { cancelDuration } from '../common/config.js';
	
	export default {
		name: 'xpos-cancel',
		props: {
			cancelDuration: {
				type: Number,
				default: cancelDuration
			},
		},
		components: {
			xposDialog,
		},
		data() {
			return {
				title: '确定要取消交易吗？',
			}
		},
		computed: {
			
		},
		methods: {
			showConfirmHandler() {
				this.$refs.xdialog.__show();
			},
			clickConfirmButtonHandler() {
				uni.navigateTo({
					url: '/pages/index/index'
				});
			},
		},
		mounted() {
			console.log('cancel mounted');
		},
		onLoad() {
			console.log('cancel onLoad');
		},
		onUnload(){
			console.log('cancel onUnload');
		},
		onHide() {
			console.log('cancel onHide');
		}
	}
</script>

<style lang="less">
	@import '~@/common/var.less';
	
	.cancel-box {
		position: fixed;
		top: var(--status-bar-height);
		right: 20upx;
		.cancel-btn {
			color: #fff;
			// border: 1px solid #fff;
			display: inline-block;
			background-color: #479e17;
			// background: linear-gradient(left, #6de42b, #479e17);
			font-size: 30upx;
			// border-radius: 35upx;
			padding: 0 40upx;
		}
	}
</style>
