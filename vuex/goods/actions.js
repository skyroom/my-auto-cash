// import goodsService from '../../../services/goodsService';

import {
    SET_MERCHANT_GOODS_LIST,
	ADD_GOODS_INTO_LIST,
} from '../mutation-types';


let data = 
[
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: true,
// 		dj: '¥92590.00',
// 		amount: '99',
// 		hj: '¥236050.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: false,
// 		dj: '¥9.00',
// 		amount: '2',
// 		hj: '¥18.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: true,
// 		dj: '¥23.00',
// 		amount: '12',
// 		hj: '¥230.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: true,
// 		dj: '¥200.00',
// 		amount: '10',
// 		hj: '¥2000.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: true,
// 		dj: '¥92590.00',
// 		amount: '99',
// 		hj: '¥23605.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: false,
// 		dj: '¥9.00',
// 		amount: '2',
// 		hj: '¥18.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: true,
// 		dj: '¥23.00',
// 		amount: '12',
// 		hj: '¥230.00'
// 	},
// 	{
// 		name: '健力宝橙味汽水250ml',
// 		showYh: true,
// 		dj: '¥200.00',
// 		amount: '10',
// 		hj: '¥2000.00'
// 	}
]

// 获取商品
const getMerchantGoodsList = async (
    { commit, state },
) => (await new Promise((resolve, reject) => {
		commit(SET_MERCHANT_GOODS_LIST, data);
		resolve(data);
	}))
	
// 增加商品
const addGoodsIntoList = async (
    { commit, state },
) => (await new Promise((resolve, reject) => {
		const goodsTemp = {
			name: '手动添加的商品',
			showYh: true,
			dj: '¥200.00',
			amount: '10',
			hj: '¥2000.00'
		};
		goodsTemp.name = goodsTemp.name + String(Math.random()).substring(0, 5);
		commit(ADD_GOODS_INTO_LIST, goodsTemp);
		resolve(goodsTemp);
	}))	

export default {
    getMerchantGoodsList,
	addGoodsIntoList,
};
