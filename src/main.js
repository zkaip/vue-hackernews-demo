import Vue from 'vue'
import Router from 'vue-router'
import {domain, fromNow} from './filters'
import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'

Vue.use(Router)
Vue.filter('domain', domain)
Vue.filter('fromNow', fromNow)

var router = new Router()

router.map({
	'/news/:page': {
		component: NewsView
	},
	'/user/:id': {
		component: UserView
	},
	'/item/:id': {
		component: ItemView
	}
})

router.beforeEach(() => {
	window.scroll(0, 0)
})

router.redirect({
	'*' : '/news/1'
})

router.start(App, '#app')