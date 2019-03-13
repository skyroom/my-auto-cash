<script>
import { cancelDuration } from '../common/config.js';

export default {
	data() {
		return {
			cancelDuration: cancelDuration,
			cancelTimer: '',
		};
	},
	methods: {
		startCancelDuration() {
			this.cancelTimer = setInterval(() => {
				this.cancelDuration = this.cancelDuration - 1;
				if (this.cancelDuration <= 0) {
					this.stopCancelDuration();
					uni.reLaunch({
						url: '/pages/index/index'
					});
				}
			}, 1000);
		},
		stopCancelDuration() {
			clearInterval(this.cancelTimer);
		},
	}
};
</script>
