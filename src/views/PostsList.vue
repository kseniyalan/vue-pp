<template>
  <div>
    <div v-if="ready" class="top-container">
      <div v-if="screenWidth > 1599" class="d-flex mb-16">
        <TopItem
          v-for="postItem in topPosts"
          :key="postItem.id"
          :postItem="postItem"
          :onClickPost="clickOnPost"
        />
      </div>
    </div>

    <!-- Posts list -->
    <div>
      <div v-if="ready" class="posts-list">
        <ListItem
          v-for="postItem in posts"
          :key="postItem.id"
          :postItem="postItem"
          :onClickPost="clickOnPost"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TopItem from "@/components/TopItem.vue";
import ListItem from "@/components/ListItem.vue";

export default {
  name: 'PostsList',
  components: {
    TopItem,
    ListItem
  },
  data: () => ({}),
  computed: {
    ...mapState({
      loading: state => state.posts.loading,
      ready: state => state.posts.ready,
    }),
    ...mapGetters({ 
      posts: 'posts/getPosts',
    }),
    screenWidth() {
      return parseInt(this.$vuetify.breakpoint.width, 10);
    },
    topPosts() {
      return this.posts.slice(0, 4);
    },
  },
  methods: {
    clickOnPost(postId) {
      const url = `/posts/${postId}`;
      this.$router.push(url);
    },
    getPostsList(){
      this.$store.dispatch('posts/getPostsListAction');
    },
  },
  created() {
    this.getPostsList();
  },
}
</script>

<style lang="scss">
.top-container{
  padding: 0;
  max-width: 100%;
}
</style>