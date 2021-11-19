<template>
  <div
    class="list-item"
    @click="onClickPost(postItem.id)"
  >
    <div class="posts-list-item">
      <v-img
        height="250"
        class="mb-6"
        :src="postItem.img"
        :srcset="`${postItem.img_2x} 2x, ${postItem.img_3x} 3x, ${postItem.img_4x} 4x`"
      ></v-img>
      <div class="text-caption text-uppercase">{{ postItem.typeText }}</div>
      <div class="d-flex justify-center">
        <h4 class="text-h5 text-md-h4 text-capitalize">{{ postItem.title }}</h4> 
      </div>

      <div class="d-flex justify-center">
        <div>
          <div class="item-line" />
        </div>
      </div>
      
      <div class="text-body-2 text-xl-body-1">
        <p class="mb-3">{{ postItem.description_short }}</p>
        <p class="font-weight-bold">Read more</p>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    postItem: {
      type: Object,
      require: true,
    },
    onClickPost: {
      type: Function,
      require: true,
    },
  },
}
</script>

<style lang="scss">
.list-item{
  cursor: pointer;

  &:hover{
    .posts-list-item{
      box-shadow: 5px 5px 5px rgba(0,0,0,0.15);
      transition: box-shadow 0.3s ease-in-out;
    }
  }
}
</style>
