import Vue from 'vue'
import VueRouter from 'vue-router'


import PostsList from '../views/PostsList.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import PostView from '../views/PostView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:postId',
    name: 'PostView',
    component: PostView
  },
  {
    path: '/posts',
    name: 'PostsList',
    component: PostsList
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
