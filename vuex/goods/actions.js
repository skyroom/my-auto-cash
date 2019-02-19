// import goodsService from '../../../services/goodsService';

import {
    SET_MERCHANT_GOODS_LIST,
} from '../mutation-types';


let data = 
[
	{
		name: '健力宝橙味汽水250ml',
		showYh: true,
		dj: '¥92590.00',
		amount: '99',
		hj: '¥236050.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: false,
		dj: '¥9.00',
		amount: '2',
		hj: '¥18.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: true,
		dj: '¥23.00',
		amount: '12',
		hj: '¥230.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: true,
		dj: '¥200.00',
		amount: '10',
		hj: '¥2000.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: true,
		dj: '¥92590.00',
		amount: '99',
		hj: '¥23605.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: false,
		dj: '¥9.00',
		amount: '2',
		hj: '¥18.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: true,
		dj: '¥23.00',
		amount: '12',
		hj: '¥230.00'
	},
	{
		name: '健力宝橙味汽水250ml',
		showYh: true,
		dj: '¥200.00',
		amount: '10',
		hj: '¥2000.00'
	}
]


// 分页查看查看某个商户的商品列表
const getMerchantGoodsList = async (
    { commit, state },
) => (await new Promise((resolve, reject) => {
		commit(SET_MERCHANT_GOODS_LIST, data);
		resolve(data);
	}))

export default {
    getMerchantGoodsList,
};
