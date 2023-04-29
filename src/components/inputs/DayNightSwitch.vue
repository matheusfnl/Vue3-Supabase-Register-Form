<template>
  <div class="container">
    <div class="toggle-container">
      <label>
        <input
          type="checkbox" v-model="checkbox_value" class="toggle-input"
          @change="$emit('model', checkbox_value)"
        />

        <div
          class="slider-conteiner"
          :class="getSliderClass"
        >
          <div class="decoration">
            <div :class="getFirstDecClass" />
            <div :class="getSecondDecClass" />
            <div :class="getThirdDecClass" />
          </div>

          <Transition mode="in-out">
            <div class="extra-decoration" v-if="checkbox_value">
              <div />
              <div />
              <div />
            </div>
          </Transition>

          <div
            class="slider-button"
            :style="getSliderStyle"
          />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DayNightSwitch',
    props: {
      value: {
        type: Boolean,
        required: true
      },

      default_value: {
        type: Boolean,
        default: false,
      },

      label: {
        type: String,
        default: '',
      }
    },

    data() {
      return {
        checkbox_value: false,
      };
    },

    mounted() {
      this.checkbox_value = this.value;
    },

    computed: {
      getSliderStyle() {
        if (this.checkbox_value) {
          return {
            top: '3px',
            left: '3px',
            transform: 'translateX(20px)'
          };
        }

        return {
          top: '3px',
          left: '3px',
        };
      },

      getFirstDecClass() {
        if (! this.checkbox_value) {
          return 'first-dec-day'
        }

        return 'first-dec-night'
      },

      getSecondDecClass() {
        if (! this.checkbox_value) {
          return 'second-dec-day'
        }

        return 'second-dec-night'
      },

      getThirdDecClass() {
        if (! this.checkbox_value) {
          return 'third-dec-day'
        }

        return 'third-dec-night'
      },

      getSliderClass() {
        if (this.checkbox_value) {
          return 'slider-checked'
        }

        return '';
      },
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider-conteiner {
    position: relative;
    background: rgb(107, 220, 255);
    width: 40px;
    height: 20px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.160);
    border-radius: 20px;
    transition: all .3s;
  }

  .slider-button {
    background: #fff67a;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 0px;
    pointer-events: none;
    position: absolute;
    transition: all .3s;
    box-shadow: 0px 0px 4px #ffffff;
  }
  .label-text {
    user-select: none;
    margin-right: .5rem;
    margin-bottom: 2px;;
    font-weight: bold;
    color: #273542;
  }

  .toggle-input { display: none }
  .toggle-container {
    display: flex;
    align-items: center;
  }

  .toggle-container label { cursor: pointer }
  .slider-checked { background: rgb(88, 88, 139) }
  .slider-checked .slider-button { background: rgb(247, 247, 247); }

  .decoration, .extra-decoration { position: absolute; }
  .decoration div, .extra-decoration div {
    width: 2px;
    height: 2px;
    background-color: rgb(255, 255, 255);
    border-radius: 1px;
    position: absolute;
    transition: all .3s;
  }

  .extra-decoration div:nth-child(1) {
    top: 5px;
    left: 4px;
    width: 1px;
    height: 1px;
  }
  .extra-decoration div:nth-child(2) {
    top: 13px;
    left: 9px;
    width: 1px;
    height: 1px;
  }
  .extra-decoration div:nth-child(3) {
    top: 8px;
    left: 19px;
    width: 1px;
    height: 1px;
  }

  .first-dec-day {
    left: 22px;
    top: 3px;
    width: 8px !important;
    height: 3px !important;
    border-radius: 1.5px !important;
  }

  .second-dec-day {
    left: 16px;
    top: 7px;
    width: 8px !important;
    height: 3px !important;
    border-radius: 1.5px !important;
  }

  .third-dec-day {
    left: 27px;
    top: 13px;
    width: 8px !important;
    height: 3px !important;
    border-radius: 1.5px !important;
  }

  .first-dec-night {
    left: 12px;
    top: 3px;
  }

  .second-dec-night {
    left: 6px;
    top: 9px;
  }

  .third-dec-night {
    left: 16px;
    top: 14px;
  }

  .v-enter-active, .v-leave-active { transition: opacity 0.3s ease; }
  .v-enter-from, .v-leave-to { opacity: 0; }
</style>