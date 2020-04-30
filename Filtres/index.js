Vue.filter('Majuscule', (value)=> {
  return value.toUpperCase();
})

Vue.filter('reverse', (value)=> {
  return value.split('').reverse().join('');
})

let autre = (value, prefixe, suffixe) => {
  return prefixe + ' ' + value + ' ' + suffixe
}

const app = new Vue({
  el: '#app',
  data: {
    message: 'Je suis develloppeur Vue js !',
    poste: 'Front'
  },
  filters: {
    autre
  }
})