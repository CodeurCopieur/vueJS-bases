<template lang="pug">
    .container 
      div
        span {{ count }}
        button(@click="increment") Click
</template>

<script>

import store from './store/NotificationStore'

export default {
  name: 'Counter',
  data () {
    return {
      //count : 0
      state: store.state
    }
  },
  computed: {
    count() {
      return this.state.count
    }
  },
  methods: {

    increment () {
      //this.count++
      store.increment()
    }
  }
}
</script>

<style lang="scss">

  .container {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        margin-top: 20px;
        border: none;
        cursor: pointer;
        width: 10%;
        padding: 10px 20px;
      }
    }
  }

</style>