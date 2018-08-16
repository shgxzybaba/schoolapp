<template>

  <footer>
  <div>
  <h2>Quick Links:</h2>
  <ul>
    <li v-for="l in links"><a v-bind:href="l.link">{{l.name}}</a></li>
  </ul>
  </div>
  <p>&copy; 2018, Akinduro Oluwasegun </p>
  </footer>

</template>

<script>
import {bus} from '../main';
export default {
  props:{

  },

  data () {
    return {
      links: [
        {link: 'http://localhost:8080/classes',name: 'Classrooms'},
        {link: 'http://localhost:8080/student',name: 'Add Student'},
        {link: 'http://localhost:8080/courses',name: 'Courses'}
      ]
    }
  },
  methods:{

  },
    created(){

    }
}
</script>

<style>
footer {
  padding: 10px 0 10px 0;
  width: 100%;
  margin-left: -8px;
  display: flex;
  margin-bottom: -20px;
  align-items: center;
  background: #000;
  position: absolute;
  top: 88.3vh;
}
footer div{
  display: flex;
  align-content: center;
  width: 70%;
}

footer div h2{
  font-family: montserrat;
  font-size: 20px;
  color: #fff;
  padding-left: 50px;
  
}
footer  div ul{
  list-style: none;
  display: flex;
}
li a{
  text-decoration: none;
  padding: 0 10px;
  margin-top: 15px;
  color: grey;
  font-family: raleway;
  font-size: 13px;
}
li a:hover{
  text-decoration: underline;
}
footer p{
  color: #fff;
  text-align: center;
  font-family: montserrat;
  font-size: 14px;
}
</style>
