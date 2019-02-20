<script>
import { gTime } from '../common/util.js';

export default {
	data() {
		return {
			gTimer: null,
		};
	},
	created() {
		console.log('this.gTimer is', this.gTimer);
		clearTimeout(this.gTimer);
		this.gTimer = setTimeout(() => {
			uni.reLaunch({
				url: '/pages/index/index',
				success: () => {
					clearTimeout(this.gTimer);
				}
			});
		}, gTime);
	},
};
</script>
