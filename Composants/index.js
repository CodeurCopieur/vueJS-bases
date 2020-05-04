Vue.component('message', {
  // Ce sont les attributs du composants
  props:{
    type: {type: String, default: 'success'}, 
  // Par default le type = "success" , et le contenu du props est String
    message: String
  },
  template: `<h3 :class="type"> {{ message }} </h3>`
})

let local = {
  // Ce sont les attributs du composants
  props:{
    type: {type: String, default: 'error'}, 
    // Par default le type = "success" , et le contenu du props est String
    local: String
  },
  template: `<h3 :class="type"> {{ local }} </h3>`
}

let counter = {
  props: {
    start: {type: Number, default: 0}
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count ++
    }
  },
  template: `
  <div>
    <span> {{ count }} </span>
    <button @click="increment"> {{ total }} </button>
  </div> `,
  computed : {
    total() {
      return this.start + this.count
    }
  },
  /*mounted() {
    this.count = this.start
  }*/
}

Vue.component('communation', {
  // Ce sont les attributs du composants
  props:{
    type: {type: String, default: 'success'}, 
  // Par default le type = "success" , et le contenu du props est String
    message: String,
    header: String
  },
  template: `<div :class="type"> 
  <i class="close icon" @click="close"></i>
  <div class="header"> {{ header}} </div>
  {{ message }} 
  </div>`,
  methods: {
    /*closeAlerte() {
      console.log(this.$parent);
      //@click="closeAlerte"
      // 1er solution : cet objet me permet d'acceder a la propriéte alert de mon instance(parents)
      this.$parent.$data.alert = false
    }*/
     
    /* 2eme solution : evenement, on créer un évènment  personnliser
      */
      close(){
        this.$emit('close')
      }
  }
})

let formuser = {
  data() {
    return {
      user: {...this.value}
    }
  },
  props : { value : Object },
  methods: {
    save () {
      this.$emit('input', this.user)
    }
  },
  template: `<form class="ui form" @submit.prevent="save">
    <div class="field">
     <label> Prénom </label>
     <input type="text" v-model="user.firstname"/>
    </div>
    <div class="field">
     <label> Nom </label>
     <input type="text" v-model="user.lastname"/>
    </div>
    <button class="ui button" type="submit"> Envoyer</button>
    <p><slot></slot></p>
    </form>`
}

const app = new Vue({
  el: '#app',
  components: {
    local, counter, formuser
  },
  data: {
    message: 'Je suis un composant global !',
    local: 'Je suis un composant local !',
    alert: false,
    user: {
      firstname: 'Thomas',
      lastname: 'regel'
    }
  },
  methods: {
    showAlerte () {
      this.alert = true
    },
    hideAlerte () {
      this.alert = false
    }
  }

})