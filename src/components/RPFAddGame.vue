<template>
  <div>
    <div class="title">
      Game registration
    </div>

    <InputText
      id="gameName"
      label="Name"
      placeholder="Type the game name"
      :value="game_name"
      @model="game_name = $event"
    />

    <InputText
      id="gameLink"
      label="Link"
      placeholder="Type the game link"
      :value="link"
      @model="link = $event"
    />

    <button
      type="button"
      class="button-style"
      @click="handleClick"
    >
      Register
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  import InputText from '@/components/inputs/InputText.vue';

  export default {
    name: 'AddGame',
    components: { InputText },
    data() {
      return {
        game_name: '',
        link: '',
      };
    },

    methods: {
      ...mapActions(['createGame']),
      async handleClick() {
        const status = await this.createGame({
          name: this.game_name,
          link: this.link,
        });

        if(~~(status / 100) === 2 ) {
          this.game_name = '';
          this.link = '';
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 40px;

    font-weight: bold;
    font-size: 32px;
  }

  .button-style {
    position: relative;
    width: 100%;
    height: 46px;
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    border: 0px;
    color: white;
    margin-top: 1rem;
    background-image: linear-gradient(to left, rgb(255, 154, 238) , rgb(166, 234, 255));
    z-index: 1;
  }

  .button-style::before {
    position: absolute;
    border-radius: 30px;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, rgb(255, 154, 238) , rgb(166, 234, 255));
    z-index: -1;
    transition: opacity 0.2s linear;
    opacity: 0;
  }

  .button-style:hover::before { opacity: 1; }
</style>