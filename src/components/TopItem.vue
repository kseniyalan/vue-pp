<template>
  <div
    class="top-item"
    @click="onClickPost(postItem.id)"
  > 
    <img
      class="top-img"
      :alt="postItem.title"
      :src="postItem.img_top"
      :srcset="`${postItem.img_top_2x} 2x, ${postItem.img_top_3x} 3x,`"
    />
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
  height: 562px;
  cursor: pointer;

  &:hover{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  .top-img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 562px;
  }

  .item-content{
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 330px 55px 55px 55px;

    .item-type{
      font-size: 12px;
      line-height: 13px;
      text-transform: uppercase;
      margin-bottom: 17px;
    }

    .item-title{
      font-size: 28px;
      font-weight: 500;
      text-transform: capitalize;
      letter-spacing: 0.35;
    }

    .more-btn{
      position: absolute;
      left: calc(50% - 60px);
      bottom: 61px;
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
