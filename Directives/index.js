  Vue.directive('test', {
  bind (el, binding) {
    console.log(el, binding);
    el.value = binding.value
  },

  update (el, binding) {
    console.log('update');
    
  },
})

let test = (el, binding) => {
    console.log(el, binding);
    el.value = binding.value
  }

new Vue({
  el: '#app',
  directives: {
    test : test // directives affectés à une variable
  },
  data: {
    link:'https://codwerk.github.io/',
    login:'Codwerk',
    number: 0,
    name:''
  },
  methods: {
    demo(e) {
      console.log('demo', e);
      
    }
  }
})


