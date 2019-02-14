<template>
	<view class="quan-box">
		<view class="unuse-quan-con">
			<text class="unuse-quan-text">不使用优惠券</text>
			<label class="radio"><radio />选中</label>
		</view>
		
		<view class="uni-padding-wrap uni-common-mt">
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
				选项卡1的内容
			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../components/uni-segmented-control.vue';
	
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: [
					'选项卡1',
					'选项卡2',
					'选项卡3'
				],
				current: 0,
				activeColor: '#4cd964',
				styleType: 'button',
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
	.quan-box {
		
	}
</style>
