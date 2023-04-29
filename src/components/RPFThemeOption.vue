<template>
  <div class="float-container">
    <DayNightSwitch
      @model="setValue"
      :value="night_theme"
      label="Debug mode"
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  import DayNightSwitch from '@/components/inputs/DayNightSwitch.vue';

  export default {
    name: 'DebugOption',
    components: { DayNightSwitch },
    data() {
      return {
        night_theme: false,
      };
    },

    methods: {
      ...mapActions(['setTheme']),
      setValue(value) {
        this.night_theme = value;
        this.setTheme(value)
      }
    }
  }
</script>

<style scoped>
  .message {
    font-weight: bold;
    margin-left: 6px;
    color: rgba(0, 0, 0, 0.24);
  }

  .float-container {
    position: absolute;
    top: 0;
    padding: 10px;
    display: flex;
    height: 20px;
  }

  .v-enter-active, .v-leave-active { transition: opacity 0.3s ease; }
  .v-enter-from, .v-leave-to { opacity: 0; }
</style>