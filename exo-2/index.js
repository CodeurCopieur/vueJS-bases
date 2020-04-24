let app = new Vue({
  el: "#app",
  data : {
    valeur: '',
    persos: [
      {
        code: "ST",
        nom: "Stark",
        list: ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"]
      },
      {
        code: "LA",
        nom: "Lannister",
        list: ["Tywin", "Cersei", "Jaime", "Tyrion"]
      },
      {
        code: "BA",
        nom: "Baratheon",
        list: ["Robert", "Stannis", "Renly"]
      },
      {
        code: "TA",
        nom: "Targaryen",
        list: ["Aerys", "Daenerys", "Viserys"]
      }
    ]

  }
})