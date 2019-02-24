<template>
	<view :class="['quan-item-con', { unuse: isUnuse }]">
		<view class="quan-price">
			<text class="symbol">¥</text>
			<text class="price">338.2</text>
		</view>
		<view class="quan-info">
			<view class="info-top">
				<view class="top-left">
					<view class="quan-title">优惠券名称</view>
					<view class="quan-rep ysaaa">即日起至2019-02-28</view>
				</view>
				<view class="top-right">
					<text class="xpos-font xpos-radio kong">&#xecee;</text>
					<text class="xpos-font xpos-radio disabled">&#xecee;</text>
					<text class="xpos-font xpos-radio checked">&#xec3b;</text>
				</view>
			</view>
			<view class="info-bottom ysaaa">
				<view>优惠券描述</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'xpos-quan-item',
		props: {
			current: {
				type: Number,
				default: 0
			},
			isUnuse: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				currentIndex: this.current
			}
		},
		computed: {
			
		},
		methods: {
			onClick(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index;
					this.$emit('clickItem', index);
				}
			}
		},
	}
</script>

<style lang="less">
	@import '~@/common/var.less';
	
	.quan-item-con {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		&.unuse {
			.quan-price {
				background-color: #aaa;
			}
			.quan-info {
				.info-top {
					.top-left {
						.quan-title {
							color: #aaa;
						}
					}
				}
			}
		}
		.quan-price {
			width: 25%;
			position: relative;
			color: #fff;
			background-image: radial-gradient(circle at right top, #f5f5f5, #f5f5f5 15upx, transparent 16upx),
							radial-gradient(circle at right bottom, #f5f5f5, #f5f5f5 15upx, transparent 16upx);
			background-color: @theme-color;
			display: flex;
			justify-content: center;
			align-items: center;
			&:after {
				content: '';
				position: absolute;
				top: 0upx;
				bottom: 0upx;
				left: -10upx;
				width: 20upx;
				height: 100%;
				background: radial-gradient(circle, #f5f5f5, #f5f5f5 8upx, transparent 10upx);
				background-size: 20upx 20upx;
			}
			.symbol {
				font-size: 28upx;
			}
			.price {
				font-size: 45upx;
				margin-left: 10upx;
			}
		}
		.quan-info {
			background-color: #fff;
			flex: 1;
			background-image: radial-gradient(circle at left top, #f5f5f5, #f5f5f5 15upx, transparent 16upx),
							radial-gradient(circle at left bottom, #f5f5f5, #f5f5f5 15upx, transparent 16upx);
			.info-top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding-left: 20upx;
				.top-left {
					.quan-title {
						padding-top: 20upx;
						font-size: 35upx;
						font-weight: 500;
						color: #000;
					}
					.quan-rep {
						font-size: 30upx;
						line-height: 2.5;
					}
				}
				.top-right {
					padding-right: 20upx;
				}
			}
			.info-bottom {
				border-top: 1px dashed #ddd;
				padding-left: 20upx;
				padding-top: 10upx;
				padding-bottom: 10upx;
				line-height: 1.5;
				font-size: 30upx;
			}
		}
	}
</style>
