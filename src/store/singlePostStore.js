import {
  getSinglePost,
} from "../request";

export default {
  namespaced: true,
  state: {
    ready: false,
    loading: false,
    post: {},
  },
  mutations: {
    POST_LOADING_START(state) {
      state.ready = false; 
      state.loading = true;
      state.post = {};
    },
    POST_LOADING_ERROR(state) {
      state.ready = false;
      state.loading = false;
    },
    POST_LOADING_SUCCESS(state, payload) {
      state.loading = false;
      state.post = payload.post;
      state.ready = true;
    }
  },
  actions: {
    async getSinglePostAction({ commit }, postId) { 
      commit("POST_LOADING_START");
      let post;
      try {
        post = await getSinglePost(postId);
        return commit("POST_LOADING_SUCCESS", post);
      } catch (err) {
        return commit("POST_LOADING_ERROR");
      }
    }
  },
  getters: {
    getSinglePost: state => {
      const post = state.post;
      switch (post.type) {
        case 1:
          post.typeText = 'main dish';
          break;
        case 2:
          post.typeText = 'Dessert'; 
          break;
        default:
          post.typeText = 'No type';
          break;
      }
      return post;
    },
  }
};