<template>
  <div class="breadcrumb-card">
    <div
      @click="changePage(0)"
      :class="{'selected-option' : !page}"
    >
      Game registration
    </div>

    <span>/</span>

    <div
      @click="changePage(1)"
      :class="{'selected-option' : page}"
    >
      Game list
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BreadCrumb',
    props: {
      page: {
        type: Number,
        default: 0,
      },
    },

    methods: {
      changePage(value) {
        this.$emit('change_page', value);
      },
    },
  }
</script>

<style scoped>
  .breadcrumb-card {
    width: 360px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    padding: 20px 40px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.130);

    display: flex;
    justify-content: center;
  }

  .breadcrumb-card div {
    min-width: 45%;
    font-weight: lighter;
    cursor: pointer;
    transition: all .2s;
  }

  .breadcrumb-card div:hover { color: #a8b3ff; }

  .breadcrumb-card div:first-child {
    display: flex;
    justify-content: flex-end;
  }

  .breadcrumb-card span {
    min-width: 10%;
    display: flex;
    justify-content: center;
  }

  .selected-option { color: #a8b3ff; }
</style>