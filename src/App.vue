<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    watch: {
      getTheme(state) {
        const body = document.querySelector('body');

        console.log(state)

        if(state) {
          body.classList.remove('light-theme')
          return body.classList.add('dark-theme')
        }

        body.classList.remove('dark-theme')
        return body.classList.add('light-theme')
      }
    },

    mounted() {
      const body = document.querySelector('body');

      body.classList.add('light-theme');
    },

    computed: {
      ...mapGetters(['getTheme']),
    },
  }
</script>

<style>
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #273542;
  }

  body { transition: all .3s; }
  .dark-theme { background-color: rgb(25, 25, 27) }
  .light-theme { background-color: rgb(246, 235, 255); }
</style>
