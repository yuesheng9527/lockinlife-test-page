/*
入口
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import { PullRefresh, Toast, Actionsheet, DatetimePicker, Icon, Popup } from 'vant';
Vue.use(PullRefresh).use(Toast).use(Actionsheet).use(DatetimePicker).use(Icon).use(Popup);

import Axios from "axios"
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Axios.defaults.baseURL = "https://www.crenative.cn/lockinlife";

import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state:{
        a: 1,
        b: 1
    },
    mutations:{

    }
})

new Vue({
    el:'#app',
    render:h => h(App),
    router,
    store
})