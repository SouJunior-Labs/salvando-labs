import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// user
import RegistryView from '../views/user/RegistryView.vue'
import LoginView from '@/views/user/LoginView.vue'
import ProfileView from '../views/user/ProfileView.vue'

// product 
import ProductsView from '../views/product/ProductsView.vue'
import ProductView from '../views/product/ProductView.vue'
import ProductRegistryView from '../views/product/RegistryView.vue'

// squad 
import SquadsView from '../views/squad/SquadsView.vue'
import SquadView from '../views/squad/SquadView.vue'
import SquadCreateView from '../views/squad/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registry',
      name: 'registry',
      component: RegistryView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta : {
          auth: true
      }
    },
    {
      path: '/product/1',
      name: 'product-by-id',
      component: ProductView,
        meta : {
            auth: true
        }
    },
    {
      path: '/product/create',
      name: 'product-create',
      component: ProductRegistryView,
        meta : {
            auth: true
        }
    },
    {
      path: '/squads',
      name: 'squads',
      component: SquadsView
    },
    {
      path: '/squad/:id',
      name: 'squad-by-id',
      component: SquadView,
      props: true, 
    },
    {
      path: '/squad/create',
      name: 'squad-create',
      component: SquadCreateView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth === true) {
        console.log('protected route: ', to.name)
        if (true == true) {
            return next()
        } else {
            router.push({ name: 'not-found' })
        }
    } else {
        return next()
    }
});

export default router
