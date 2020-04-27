new Vue({
  el: '#app',
  data: {
    message: 'Mon Portfolio',
    link: 'https://codwerk.github.io/',
    success: true,
    cls: 'success',
    noms: ['vue js', 'react js', 'angular js']
  },
  methods: {
    close () {
      this.success = false
      this.message = 'close'
    },

    style (){
      if(this.success){
        return {'border':'1px solid green'}
      }else {
        return {'border':'1px solid red'}
      }
    }
  }
})