<template>
  <div class="form-container">
    <RPFThemeOption />

    <RPFBreadCrumb
      :page="page"
      @change_page="changePage"
    />

    <div class="card">
      <Transition mode="out-in">
        <RPFAddGAme v-if="!page" />

        <RPFGameList v-else />
      </Transition>
    </div>
  </div>
</template>

<script>
  import RPFBreadCrumb from '@/components/RPFBreadCrumb.vue';
  import RPFAddGAme from '@/components/RPFAddGame.vue';
  import RPFGameList from '@/components/RPFGameList.vue';
  import RPFThemeOption from '@/components/RPFThemeOption.vue'

  export default {
    name: 'MainPage',
    components: {
      RPFAddGAme,
      RPFBreadCrumb,
      RPFGameList,
      RPFThemeOption,
    },

    data() {
      return { page: 0 }
    },

    methods: {
      changePage(value) {
        this.page = value;
      }
    },
  }
</script>

<style scoped>
  .form-container {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    transition: all .1s;
  }

  .card {
    width: 360px;
    min-height: 294px;
    max-height: 294px;

    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    padding: 40px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.130);
  }

  .v-enter-active, .v-leave-active { transition: opacity 0.3s ease; }
  .v-enter-from, .v-leave-to { opacity: 0; }
</style>