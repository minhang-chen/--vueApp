// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// 引用的组件
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/sass/index.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */
const routes = [
	{path: '/', component: goods},
	{path: '/goods', component: goods},
	{path: '/ratings', component: ratings},
	{path: '/seller', component: seller}
]

const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})

