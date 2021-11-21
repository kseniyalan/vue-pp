<template>
  <div
    class="list-item"
    @click="onClickPost(postItem.id)"
  >
    <div class="posts-list-item">
      <v-img
        height="250"
        class=""
        :src="postItem.img"
        :srcset="`${postItem.img_2x} 2x, ${postItem.img_3x} 3x, ${postItem.img_4x} 4x`"
      ></v-img>
      <div class="">{{ postItem.typeText }}</div>
      <div class="">
        <h4 class="">{{ postItem.title }}</h4> 
      </div>

      <div class="">
        <div>
          <div class="item-line" />
        </div>
      </div>
      
      <div class="">
        <p class="">{{ postItem.description_short }}</p>
        <p class="">Read more</p>
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
  width: 33.333333%;
  cursor: pointer;

  &:hover{
    .posts-list-item{
      box-shadow: 5px 5px 5px rgba(0,0,0,0.15);
      transition: box-shadow 0.3s ease-in-out;
    }
  }
}

.list-item + .list-item{
  padding-left: 32px;
}
</style>
