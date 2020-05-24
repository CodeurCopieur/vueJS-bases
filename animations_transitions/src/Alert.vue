<template lang="pug">
  div
    h3 Fade
    transition(name="fade")
      div(v-if="visible") Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit, maiores iusto earum perferendis sed incidunt asperiores molestias eos odit minus officia ea hic. Illum asperiores dignissimos amet animi recusandae!

    hr
    h3 Bounce
    transition(name="bounce")
      div(v-if="visible") Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit, maiores iusto earum perferendis sed incidunt asperiores molestias eos odit minus officia ea hic. Illum asperiores dignissimos amet animi recusandae!

    hr
    h3 Jquery (mixins)
    transition(:css="false", @enter="enter" @leave="leave")
      div(v-if="visible") Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit, maiores iusto earum perferendis sed incidunt asperiores molestias eos odit minus officia ea hic. Illum asperiores dignissimos amet animi recusandae!

    hr
    h3 Transiton
    transition(name="enter" appear mode="out-in")
      div(v-if="visible" key="visible") 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit, maiores iusto earum perferendis sed incidunt asperiores molestias eos odit minus officia ea hic. Illum asperiores dignissimos amet animi recusandae!

      div(v-else key="invisible") 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit, maiores iusto earum perferendis sed incidunt asperiores molestias eos odit minus officia ea hic. Illum asperiores dignissimos amet animi recusandae!
    button(@click.stop="toggle") Click

    hr
    h3 Transition-group
    
    transition-group(name="bounce", tag="ul")
      li(v-for="item in items" :key="item") {{ item }}
    button(@click="add") Add
    button(@click="shuffle") Melanger


</template>


<script>
let slides = {
  methods: {
    enter: (el, done) => {
      $(el).hide().slideDown(500, done)
    },
    leave: (el, done)=> {
      $(el).hide().slideUp(500, done)
    },
  }
}

export default {
  name: 'Alerte',
  mixins: [slides],
  data() {
    return {
      visible: true,
      items: [1,2,3,4,5]
    }
  },
  methods: {
   /* enter: (el, done) => {
      $(el).hide().slideDown(500, done)
    },
    leave: (el, done)=> {
      $(el).hide().slideUp(500, done)
    },*/
    add() {
      this.items.push(Math.floor(Math.random()*5))
    },
    shuffle(){
      this.items = [5,4,2,1,3]
    },
    toggle() {
      this.visible = !this.visible
    }
  }

}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateX(-20px);
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  .bounce-move {
    transition: transform 10s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>