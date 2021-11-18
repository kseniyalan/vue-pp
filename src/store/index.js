import Vue from 'vue'
import Vuex from 'vuex'

import posts from './postsListStore';
import post from './singlePostStore';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    posts,
    post
  }
})

export default store;
