<template>
  <v-dialog
    v-model="isOpen"
    max-width="95%"
    max-height="95%"
    persistent
    scrollable
    :fullscreen="fullscreen"
    :hide-overlay="hideOverlay"
    transition="fab-transition"
  >
    <v-card>
      <v-card-title class="headline">{{ header }}</v-card-title>
      <v-card-text style="height: 95%;" class="d-flex justify-center align-center">

        <!-- Image for mobiles -->
        <v-img
          v-if="fullscreen" 
          max-width="800"
          max-height="600"
          class="d-flex align-end"
          :src="postItem.img_600"
          :srcset="`${postItem.img_2x} 2x, ${postItem.img_3x} 3x, ${postItem.img_4x} 4x`"
        />

        <!-- Big image -->
        <v-img
          v-else
          max-width="1600"
          max-height="900"
          class="d-flex align-end"
          :src="postItem.img_1920"
          :srcset="`${postItem.img_1920_2x} 1920w 2x, ${postItem.img_1600} 1366w, ${postItem.img_1024} 876w`"
          sizes="(min-width: 1920px) 1920px,
                  (min-width: 1600px) 1366px,
                  (min-width: 1024px) 876px"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="amber darken-3" text @click="onSubmit">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalDialog",
  props: {
    header: {
      type: String,
      require: true,
    },
    isOpen: {
      type: Boolean,
      require: true,
    },
    postItem: {
      type: Object,
      require: true,
    },
    onSubmit: {
      type: Function,
      require: true,
    },
    fullscreen: {
      type: Boolean,
      require: false,
    },
    hideOverlay: {
      type: Boolean,
      require: false,
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
</style>