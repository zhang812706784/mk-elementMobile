<template>
  <div class="hello">
    <cube-button>Button</cube-button>
  </div>
</template>

<script>
import request from '@/util/request.js';
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

