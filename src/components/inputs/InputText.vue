<template>
  <div class="input-container">
    <label :for="id">
      {{ label }}
    </label>

    <input
      :id="id"
      :value="value"
      :placeholder="placeholder"
      spellcheck="false"
      @change="$emit('model', $event.target.value)"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
  export default {
    name: 'InputText',
    props: {
      id: {
        type: String,
        required: true
      },

      label: {
        type: String,
        required: true
      },

      value: {
        type: String,
        required: true
      },

      placeholder: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped>
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 3px;
    letter-spacing: .05rem;
    color: rgb(73, 73, 73);
  }

  input {
    padding: 5px 16px;
    outline: 0;
    border-width: 0 0 1px;
    border-color: rgb(221, 221, 221);
    color: #4a555f;
    transition: all .5s;
  }

  input:focus {
    border-color: rgb(240, 174, 255);
    outline: 1px normal #000
  }

  ::placeholder {
    color: rgb(206, 206, 206);
    opacity: 1;
  }
</style>