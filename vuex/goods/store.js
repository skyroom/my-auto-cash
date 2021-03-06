import Vue from 'vue';
import actions from './actions';
import getters from './getters';
import {
    SET_MERCHANT_GOODS_LIST,
	ADD_GOODS_INTO_LIST,
} from '../mutation-types';

const initState = {
    merchantGoodsList: [],
};

const mutations = {
    [SET_MERCHANT_GOODS_LIST](state, data) {
        Vue.set(state, 'merchantGoodsList', data || []);
    },
	[ADD_GOODS_INTO_LIST](state, data) {
		state.merchantGoodsList.unshift(data);
    },
};

export default {
    state: initState,
    mutations,
    actions,
    getters,
};
