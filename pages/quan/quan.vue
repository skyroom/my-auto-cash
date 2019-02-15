<template>
	<view class="quan-box">
		<view class="segmented-control-con">
			<uni-segmented-control 
				:current="current" 
				:values="items" 
				v-on:clickItem="onClickItem" 
				:styleType="styleType"
				:activeColor="activeColor"
			></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<xpos-quan-item></xpos-quan-item>
			</view>
			<view v-show="current === 1">
				已使用
			</view>
			<view v-show="current === 2">
				已过期
			</view>
		</view>
		<view class="unuse-quan-con">
			<text class="unuse-quan-text">不使用优惠券</text>
			<label class="radio"><radio color="#5eaf31" />选中</label>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../components/uni-segmented-control.vue';
	import xposQuanItem from '../../components/xpos-quan-item.vue';
	
	export default {
		components: {
			uniSegmentedControl,
			xposQuanItem
		},
		data() {
			return {
				items: [
					'未使用',
					'已使用',
					'已过期'
				],
				current: 0,
				activeColor: '#5eaf31',
				styleType: 'text',
			};
		},
		methods: {
			showActionHandler() {
				// console.log(0);
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			showToastHandler() {
				uni.showToast({
					title: '标题',
					icon: 'success',
					duration: 2000
				});
			},
			goPayTypePageHandler() {
				uni.navigateTo({
					url: '/pages/payType/payType'
				});
			},
			goChoosePageHandler() {
				uni.showModal({
					content: '确定要取消交易吗？',
					success: function (res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/index/index'
							});
						} else if (res.cancel) {
							
						}
					}
				});
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
		},
	}
</script>

<style lang="less">
	@import '~@/common/var.less';
	
	uni-page-body,
	page {
		background-color: #f5f5f5;
	}
	.quan-box {
		.segmented-control-con {
			padding-top: 20upx;
		}
		.content {
			padding: 20upx;
		}
	}
</style>
