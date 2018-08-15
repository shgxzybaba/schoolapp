<template>
  <div>
    <ul>
      <li v-for="classroom in Classrooms" v-on:dblclick="status=!status">
        {{classroom.className}} {{classroom.faculty}}
        <router-link v-bind:to="'/classes/'+classroom.id"><button type="button" v-if="status">Go</button></router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import {bus} from '../main'
import axios from 'axios'

export default{
  components:{

  },
  props:{
    // Classrooms:{
    //   type: Array
    // }
  },
  data(){
    return{
      Classrooms: [],
      status: false
    }
  },
  methods:{
    buttonStatus: function () {
      this.status = !this.status;
    },
    enterClassroom: function (classId) {
      console.log('you clicked class with id of'+classId)
    }
  },
  created(){
    var self = this;
    axios.get('http://localhost:8081/classes')
    .then(function(response){
      // var classrooms = response.data;
      console.log(response.data);
      // this.Classrooms = classrooms;
      self.Classrooms = response.data;
      console.log(this.Classrooms);
    });
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
