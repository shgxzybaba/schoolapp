<template>

  <footer>
  <h2>Quick Links:</h2>
  <ul>
    <li v-for="l in links"><a v-bind:href="l.link">{{l.name}}</a></li>
  </ul>
  Copyright 2018, Akinduro Oluwasegun
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


</style>
