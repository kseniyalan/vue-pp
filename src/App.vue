<template>
  <v-app :class="{ isHomePage: isHomePage }">
    <v-app-bar
      app
      height="98px"
      color="white"
      elevate-on-scroll
    >
      <div class="header-logo"></div>
      <v-spacer></v-spacer>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Blog</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  computed: {
    isHomePage() {
      if (this.$route.path === '/') return true;
      return false;
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-logo{
  width: 150px;
  height: 100%;
  background: transparent url('./assets/logo.png') center center no-repeat;
}

#nav {
  padding: 10px 279px 10px 10px;
  a {
    font-size: 14px;
    font-weight: 400;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover{
      color: #FFA000;
    }

    &.router-link-exact-active {
      position: relative;
      padding-right: 24px;

      &::after{
        content: ''; 
        position: absolute;
        right: 6px; bottom: -1px;
        border: 6px solid transparent;
        border-top: 6px solid #000;
      }
    }
  }

  a + a{
    margin-left: 30px;
  }
}
</style>
