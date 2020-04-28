new Vue({
  el: '#app',
  data: {
    
    second: 0,
    technos: ['vue js', 'react js', 'angular js'],
    count: 0
    
  },
  methods: {
    addTechno() {
      this.technos.push('nuxt js');
    },
    compteur() {
      this.count++
    }
  },
  mounted: function() {
    setInterval(()=> {
      this.second++
    }, 1000)
  }
})