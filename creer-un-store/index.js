class NotificationsStore {
  //cet class permet de sauvegarder toutes les mutation que je vais pourvoir faire mon state
  
  constructor () {
    this.state = {
      count: 0
    }
  }


  increment () {
    this.state.count++
  }

  decrement () {
    this.state.count--
  }


}

let notifications_store = new NotificationsStore()

let Counter = {
  data () {
    return {

      state : notifications_store.state
    }
  },
  computed: {
    count: function() {return this.state.count }
  },
  methods : {
    increment() {
      notifications_store.increment()
    }
  },
  template: `<button @click="increment"> {{ count }}  </button>`,
}

let Notifications = {
  components: {
    Counter
  },
  template: `<div> 
    <Counter></Counter>
    <button @click='addNotifications'>Incrementer</button>
  </div>`,
  methods: {
    addNotifications () {
      notifications_store.increment()
    }
  }
}


const app = new Vue({
  el: '#app',
  components: {
    Counter, Notifications
  },
  data: {

  },
  methods: {

  }

})