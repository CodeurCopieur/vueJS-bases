<template lang="pug">
  #app
    img(src="./assets/logo.png", alt="logo vue")
    h1 {{ msg }}
    Counter

</template>

<script>

import Counter from './Counter'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenue premiere avec webpack vue cli'
    }
  },
  components: {
    Counter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
