new Vue({
  el: '#app',
  data: {
    
    success: false,
    message: '',
    firstname: 'cod',
    lastname: 'werk',
    autres: ''
    
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstname + ' ' + this.lastname
      },
      set: function (value) {
        console.log(value);
        let parts = value.split(' ')
        console.log(parts)

        this.firstname = parts[0]
        this.lastname = parts[1]
      }
    },
    cls() {
      // chaque changment aux niveaux du DOM va être appeler à  la fonction 
      //cls() il faut donc la mettre dans la propriété computed
      return this.success === true ? 'success' : 'error'
      //methode qui devine si success est true
    }
  },
  watch : {
    autres(value) {
      console.log('watch', value);
      
    }
  }
})
/*,
  methods: {
    cls() {
      return this.success === true ? 'success' : 'error'
    }
  }*/