<template>
  <div class="hello">
    <cube-button>Button</cube-button>
  </div>
</template>

<script>
import request from'../util/request.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    request.get("/assets/static/aa.json").then(res=>{
      console.log(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
