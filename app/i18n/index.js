import Vue from 'vue'
import I18n from 'vue-i18n';
import Router from 'vue-router';

// init
Vue.use( Router );
Vue.use( I18n );

// i18n
import en from './languages/en.json'; // 存放英文翻譯
import tw from './languages/tw.json'; // 存放繁體中文翻譯

const messages = {
	en: en,
	tw: tw,
};

export default new I18n({
	locale: window.localStorage.language || navigator.language || 'en',
	fallbackLocale: 'en',
	messages // set locale messages
})