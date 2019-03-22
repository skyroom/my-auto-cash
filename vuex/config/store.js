import Vue from 'vue';
import actions from './actions';
import getters from './getters';

const initState = {
    theme: 'gray',
	// theme: 'qlife',
};

const mutations = {
};

export default {
    state: initState,
    mutations,
    actions,
    getters,
};
