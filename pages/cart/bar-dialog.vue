<template>
	<view class="dialog" :class="{ 'dialog-visibility':isVisibility }">
		<view class="dialog-model" v-if="overlay"></view>
		<view class="dialog-wrap">
			<view class="dialog-title">
				<text class="xpos-font bar-text">&#xe656;</text>
				<view class="xpos-font close-button" @click="handleClose" hover-class="hover-class">&#xe7fc;</view>
			</view>
			<view class="dialog-content">
				<view class="bar-display">请输入商品条码</view>
				<view class="bar-input-box">
					<view class="bar-row">
						<view class="bar-key" hover-class="hover-class">1</view>
						<view class="bar-key" hover-class="hover-class">2</view>
						<view class="bar-key" hover-class="hover-class">3</view>
					</view>
					<view class="bar-row">
						<view class="bar-key" hover-class="hover-class">4</view>
						<view class="bar-key" hover-class="hover-class">5</view>
						<view class="bar-key" hover-class="hover-class">6</view>
					</view>
					<view class="bar-row">
						<view class="bar-key" hover-class="hover-class">7</view>
						<view class="bar-key" hover-class="hover-class">8</view>
						<view class="bar-key" hover-class="hover-class">9</view>
					</view>
					<view class="bar-row">
						<view class="bar-key" hover-class="hover-class">清空</view>
						<view class="bar-key" hover-class="hover-class">0</view>
						<view class="bar-key" hover-class="hover-class">
							<text class="xpos-font tuige">&#xe659;</text>
						</view>
					</view>
				</view>
			</view>
			<view class="dialog-footer">
				<view class="button" hover-class="hover-class" @click="handleClose">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		props: {
			title: {
				type: String,
				default: ''
			},
			message: {
				type: String,
				default: ''
			},
			// 内容对齐方式 center | left | right
			messageAlign: {
				type: String,
				default: 'center'
			},
			// 是否显示确认按钮
			showConfirmButton: {
				type: Boolean,
				default: true
			},
			// 是否显示取消按钮
			showCancelButton: {
				type: Boolean,
				default: false
			},
			// 确定按钮的文案
			confirmButtonText: {
				type: String,
				default: '确定'
			},
			// 取消按钮的文案
			cancelButtonText: {
				type: String,
				default: '取消'
			},
			// 是否显示蒙层
			overlay: {
				type: Boolean,
				default: true
			},
			// 点击蒙层是否关闭弹窗
			closeOnClickOverlay: {
				type: Boolean,
				default: false
			},
			// 是否显示关闭按钮
			showCloseButton: {
				type: Boolean,
				default: false
			}
		},
		
		data() {
			return {
				isVisibility: false
			};
		},
		
		methods: {
			__show () {
				this.isVisibility = true
			},
			__close () {
				this.isVisibility = false
			},
			alert () {
				this.__show()
			},
			confirm () {
				this.showCancelButton = true
				this.__show()
			},
			handleClose () {
				this.__close()
				this.$emit('cancelButton')
			},
			handleConfirm () {
				this.__close()
				this.$emit('confirmButton')
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	[class*='dialog-hairline']::after {
		content: ' ';
		position: absolute;
		pointer-events: none;
		box-sizing: border-box;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		border: 0 solid #ebedf0;
	}
	.dialog {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		visibility: hidden;
		-webkit-transition: 0.15s;
		&.dialog-visibility {
			visibility: visible;
		}
		.dialog-model {
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.5);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 20;
		}
		.dialog-wrap {
			width: 65%;
			position: absolute;
			left: 50%;
			top: 50%;
			overflow: hidden;			background: #ffffff;
			border-radius: 8upx;
			-webkit-transform: translate3d(-50%, -50%, 0);
			transform: translate3d(-50%, -50%, 0); 
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			z-index: 50;
			padding: 15upx;
			.dialog-title {
				font-weight: 500;
				position: relative;
				padding: 15upx 0;
				.bar-text {
					font-size: 40upx;
					transform: scaleX(1.5);
				}
				.close-button {
					position: absolute;
					top: 10upx;
					right: 10upx;
					font-size: 40upx;
				}
			}
			.dialog-content {
				color: #666;
				font-size: 30upx;
				.bar-display {
					border: 1upx solid #ddd;
					border-radius: 8upx;
					text-align: center;
					font-size: 30upx;
					padding: 15upx 0;
				}
				.bar-input-box {
					margin: 20upx 0;
					.bar-row {
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
						margin-top: 10upx;
						:first-child {
							margin-top: 0;
						}
						.bar-key {
							flex: 1;
							margin-left: 5upx;
							text-align: center;
							border: 1upx solid #ddd;
							border-radius: 8upx;
							padding: 20upx 0;
							&:first-child {
								margin-left: 0;
							}
							.tuige {
								// font-size: 35upx;
							}
						}
					}
				}
			}
			.dialog-footer {
				.button {
					font-size: 30upx;
				}
			}
		}
	}
</style>
