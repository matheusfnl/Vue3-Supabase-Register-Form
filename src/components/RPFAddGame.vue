<template>
  <div>
    <div class="title">
      Game registration
    </div>

    <div class="input-container">
      <InputText
        id="gameName"
        label="Name"
        placeholder="Type the game name"
        :value="game_name"
        @model="game_name = $event"
        @input="clearFeedbackErrors('game_name')"
      />

      <Transition>
        <span v-if="v$.game_name.$error && v$.game_name.required ">
          Game's name is required!
        </span>
      </Transition>
    </div>

    <div class="input-container">
      <InputText
        id="gameLink"
        label="Link"
        placeholder="Type the game link"
        :value="link"
        @model="link = $event"
        @input="clearFeedbackErrors('link')"
      />

      <Transition>
        <span v-if="v$.link.$error && v$.link.required ">
          Game's link is required!
        </span>
      </Transition>
    </div>

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
  import { required } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  import InputText from '@/components/inputs/InputText.vue';

  export default {
    name: 'AddGame',
    components: { InputText },
    setup () { return { v$: useVuelidate() } },
    data() {
      return {
        game_name: '',
        link: '',
      };
    },

    validations() {
      return {
        game_name: { required },
        link: { required },
      };
    },

    methods: {
      ...mapActions(['createGame']),
      async handleClick() {
        this.v$.$touch();

        if (! this.v$.$invalid) {
          const status = await this.createGame({
            name: this.game_name,
            link: this.link,
          });

          if(~~(status / 100) === 2 ) {
            this.game_name = '';
            this.link = '';
            this.v$.$reset();
          }
        }
      },

      clearFeedbackErrors(field) {
        this.v$[field].$reset();
      },
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

  .input-container { position: relative; }
  .input-container span {
    position: absolute;
    bottom: 6px;
    right: 0;
    color: #ff5552;
    font-size: 12px;
  }

  .v-enter-active, .v-leave-active { transition: opacity 0.3s ease; }
  .v-enter-from, .v-leave-to { opacity: 0; }
</style>