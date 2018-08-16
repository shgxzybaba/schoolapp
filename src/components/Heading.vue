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
header {
  margin-top: -8px;
  padding: 10px 0 10px 0;
  width: 101.2%;
  margin-left: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}
h1{
  
  font-family: tahoma;
  font-size: 30px;
  margin: 0;
  margin-left: -25px;
  width: 55%;
  background: -webkit-linear-gradient(0deg, #07ce82, #830683, #07629e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  

}
h2{
  width: 22%;
  color: rgb(209, 204, 204);
  font-family: raleway;
  float: right;
  text-align: right; 
  margin-left: -50px;
  font-weight: 400;



}

</style>
