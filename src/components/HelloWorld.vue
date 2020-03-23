<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>HELLO</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: [String, Number],
      default: 'cloudhand'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    //
    next()
  },
  beforeRouteUpdate (to, from, next) {
    //
    next()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
