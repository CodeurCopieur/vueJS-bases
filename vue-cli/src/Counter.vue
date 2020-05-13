<template lang="pug">
    .container 
      span {{ count }}
      button(@click="increment") Click
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      count : 0
    }
  },
  methods: {

    increment () {
      this.count++
    }
  }
}
</script>

<style lang="scss">

  .container {
    display: flex;
    flex-direction: column;
    width: 20%;

    button {
      border: none;
      cursor: pointer;
    }
  }

</style>