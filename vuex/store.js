import Vue from 'vue';
import Vuex from 'vuex';

// 商品
import goodsListStore from './goods/store';
import configStore from './config/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        goodsList: goodsListStore,
		config: configStore,
    },
    strict: process.env.NODE_ENV !== 'production',
});
