<template>
  <div
    class="top-item"
    @click="onClickPost(postItem.id)"
  > 
    <v-img
      height="564"
      class=""
      :src="postItem.img_top"
      :srcset="`${postItem.img_top_2x} 2x, ${postItem.img_top_3x} 3x,`"
    >
      <div class="item-content">
        <div class="item-type">{{ postItem.typeText }}</div>
        <div class="item-title">{{ postItem.title }}</div>

        <!-- Button -->
        <button
          tile
          outlined
          color="white"
          class="more-btn"
        >
          Read more
        </button>
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
    color: #fff;
    padding: 320px 55px 55px 55px;

    .item-type{
      font-size: 10px;
      text-transform: uppercase;
      margin-bottom: 22px;
    }

    .item-title{
      font-size: 24px;
      font-weight: 500;
    }

    .more-btn{
      position: absolute;
      left: calc(50% - 60px);
      bottom: 55px;
      width: 120px;
      height: 40px;
      font-size: 10px;
      border: 1px solid #fff;
    }
  }
}

.top-item + .top-item{
  margin-left: 10px;
}
</style>
