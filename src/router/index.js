import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import firebase from 'firebase';

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PageNotFound from '../views/PageNotFound.vue'
import InDetail from '../views/application/InDetail.vue'
import Dashboard from '../views/application/Dashboard.vue'
import About from '../views/application/About.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		name: 'PageNotFound',
		component: PageNotFound,
		meta: {
			requiresGuest: true
		}
	},
  {
    path: '/',
    name: 'home',
		component: Home,
		meta: {
			requiresGuest: true
		}
  },
  {
    path: '/login',
    name: 'login',
		component: Login,
		meta: {
			requiresGuest: true
		}
  },
  {
    path: '/register',
    name: 'register',
		component: Register,
		meta: {
			requiresGuest: true
		}
	},
	{ 
		path: '/indetail', 
		name:'indetail',
		component : InDetail, 
		meta: {
			requiresAuth: true
		},
      children: [
        {
					path: 'dashboard',
					name: 'dashboard',
          component: Dashboard,
					meta: {
						requiresAuth: true
					}
        },
        {
					path: 'about',
					name: 'appAbout',
          component: About,
					meta: {
						requiresAuth: true
					}
        }
			]
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.Path
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/indetail/dashboard',
        query: {
          redirect: to.Path
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
