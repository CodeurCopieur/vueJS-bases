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

export default new NotificationsStore()