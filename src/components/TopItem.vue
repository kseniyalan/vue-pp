<template>
  <div
    class="top-item"
    @click="onClickPost(postItem.id)"
  > 
    <v-img
      height="564"
      class="mb-6"
      :src="postItem.img_top"
      :srcset="`${postItem.img_top_2x} 2x, ${postItem.img_top_3x} 3x,`"
    >
      <div class="item-content fluid fill-height">
        <div class="text-caption text-uppercase white--text text-center">{{ postItem.typeText }}</div>
        <v-card-title class="d-flex justify-center mb-16">
          <h4 class="text-h5 text-md-h4 white--text text-capitalize">{{ postItem.title }}</h4>
        </v-card-title>

        <!-- Button -->
        <v-btn
          tile
          outlined
          color="white"
          class="more-btn"
        >
          Read more
        </v-btn>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'TopItem',
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
.top-item{
  position: relative;
  width: calc((100% - 30px)/4);
  height: 564px;
  cursor: pointer;

  &:hover{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  .item-content{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 320px 55px 55px 55px;

    .more-btn{
      position: absolute;
      left: calc(50% - 60px);
      bottom: 55px;
      width: 120px;
    }
  }
}

.top-item + .top-item{
  margin-left: 10px;
}
</style>
