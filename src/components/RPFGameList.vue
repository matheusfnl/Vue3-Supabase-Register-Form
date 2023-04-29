<template>
  <div>
    <div class="title">
      Game list
    </div>

    <div class="items-container">
      <tempalte v-if="request_pending">
        <div class="centralized-feedback">
          <ClipLoader color="#99d7ff" size="32px" />
        </div>
      </tempalte>

      <template v-else>
        <Transition name="swap">
          <template v-if="getGames.length">
            <TransitionGroup>
              <div
                v-for="(game, index) in getGames"
                :key="index"
                class="game-item"
              >
                <hr />

                <div class="game-content">
                  <div class="game-info">
                    <span class="game-title">
                      {{ game.name }}
                    </span>

                    <span class="game-link-title">
                      Link:

                      <a
                        :href="game.link"
                        class="game-link"
                        target="_blank"
                      >
                        {{ game.link }}
                      </a>
                    </span>
                  </div>

                  <div class="game-delete">
                    <button @click="handleDelete(game.id)">
                      <img src="@/assets/trash.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </template>

          <template v-else>
            <div class="centralized-feedback empty-feedback">
              There's no games here :/
            </div>
          </template>
        </Transition>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

  export default {
    name: 'GameList',
    components: { ClipLoader },
    data() {
      return {
        request_pending: false,
      };
    },

    async mounted() {
      this.request_pending = true;

      this.games = await this.fetchGames();

      this.request_pending = false;
    },

    computed: {
      ...mapGetters(['getGames'])
    },

    methods: {
      ...mapActions([
        'fetchGames',
        'deleteGame',
      ]),

      async handleDelete(id) {
        await this.deleteGame({ id })
      },
    },
  }
</script>

<style scoped>
  hr {
    border: 0;
    clear:both;
    display:block;
    width: 100%;
    background-color:rgb(235, 241, 241);
    height: 1px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 30px;

    font-weight: bold;
    font-size: 32px;
  }

  .game-content { display: flex; }
  .game-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    width: 80%;
  }

  .game-delete {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    width: 20%;
    margin-right: 4px;
  }

  .game-delete button {
    cursor: pointer;
    border: 0px;
    height: 60%;
    padding: 8px;
    min-width: 32px;
    border-radius: 6px;
    color: white;
    background-color: #ff5552;
    transition: all .3s;
  }

  .game-delete button img { filter: invert(95%) sepia(0%) saturate(21%) hue-rotate(2deg) brightness(106%) contrast(105%); }
  .game-delete button:hover { background-color: #e65754; }
  .game-item .game-title {
    letter-spacing: .05rem;
    background: -webkit-linear-gradient(rgb(107, 220, 255), rgb(255, 105, 230));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .game-link-title {
    letter-spacing: .05rem;
    color: rgb(117, 117, 117);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .game-item .game-link {
    all: unset;
    cursor: pointer;
    font-weight: lighter;
    color: #7e9fb4;
  }

  .items-container {
    overflow-y: scroll;
    height: 200px;
  }

  .centralized-feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
  }

  .empty-feedback {
    color: rgb(193, 204, 206);
    font-weight: lighter;
  }

  .game-item .game-link:hover { color: #b08ec7; }

  /* Swap Transition */
  .swap-enter-from, .swap-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .swap-enter-active, .swap-leave-active { transition: all .5s ease; }

  /* Scroll Style */
  /* width */
  ::-webkit-scrollbar { width: 4px; }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(239, 204, 255);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover { background: #cdd0ff; }
</style>