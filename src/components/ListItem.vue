<template>
  <div
    class="list-item"
    @click="onClickPost(postItem.id)"
  >
    <img
      :alt="postItem.title"
      class="item-img"
      :src="postItem.img"
      :srcset="`${postItem.img_2x} 2x, ${postItem.img_3x} 3x, ${postItem.img_4x} 4x`"
    />
    <div class="item-type">{{ postItem.typeText }}</div>
    <div class="item-title">{{ postItem.title }}</div>

    <div class="item-line-wrap">
      <div class="item-line" />
    </div>
    
    <div class="item-content">
      <p class="item-text">{{ postItem.description_short }}</p>
      <p class="item-more">Read more</p>
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
$gray: rgba(0,0,0,0.5);

.list-item{
  width: calc(33% - 32px);
  margin: 16px;
  cursor: pointer;

  &:hover{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  .item-img{
    height: 250px;
    margin-bottom: 27px;
  }

  .item-type{
    font-size: 14px;
    color: $gray;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .item-title{
    font-size: 24px;
    font-weight: 500;
    color: #000;
    margin-bottom: 24px;
    text-transform: capitalize;
  }

  .item-line-wrap{
    height: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;

    .item-line{
      width: 100px;
      height: 2px;
      background-color: $gray;
    }
  }

  .item-content{
    color: $gray;

    .item-text{
      font-size: 14px;
    }

    .item-more{
      font-size: 12px;
      font-weight: bold;
      padding-bottom: 20px;
    }
  }
}

@media (min-width: 320px) {
  .list-item{
    width: calc(100% - 32px);
  }
}

@media (min-width: 600px) {
  .list-item{
    width: calc(50% - 32px);
  }
}

@media (min-width: 986px) {
  .list-item{
    width: calc(33% - 32px);
  }
}

</style>
