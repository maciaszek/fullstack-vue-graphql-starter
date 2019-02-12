import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import AddPost from './components/Post/AddPost.vue'
import Posts from './components/Post/Posts.vue'

import Profile from './components/Auth/Profile.vue'
import Signin from './components/Auth/Signin.vue'
import Signup from './components/Auth/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/add',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})