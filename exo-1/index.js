let app = new Vue({
  el: "#app",
  data: {
    valeur: '',
    namesCheck: [],
    Names: [],
    infos: [{
      value: "FR",
      intitule: "francaise"
    },
    {
      value: "BL",
      intitule: "belge"
    }],
    abos: [{
      value: "abonewspromo",
      sentences: "M'abonner à la newsletter et aux promotions"
    },
    {
      value: "abonews",
      sentences: "M'abonner uniquement à la newsletter"
    },
    {
      value: "aborien",
      sentences: "Ne pas m'abonner"
    }],
    methods: {

    }
  }
})