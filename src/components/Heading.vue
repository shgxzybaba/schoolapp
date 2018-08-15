<template>
  <div>
    <header>
    <h1>{{message1}}</h1>
    <h2>{{message2}}</h2>
    </header>

  </div>
</template>

<script>
import {bus} from '../main'
export default {
  name: 'app',
  data () {
    return {
      message1: 'My application',
      message2: 'Welcome'
    }
  },
  methods:{

  },
  created(){
    bus.$on('classSelected',function () {
      bus.$emit('changeView');
    })
  }
}
</script>

<style scoped>
h1{
  color: gray;

  padding-left: 10px;
  padding-right: 10px;
  background-color: lightblue;
  font-family: tahoma;
  font-size: 40px;
  text-align: center;
  margin: 2px;

}
h2{
  color: gray;
  background-color: brown;
  font-family: tahoma;
  text-align: center;
  margin: 2px;

}

</style>
