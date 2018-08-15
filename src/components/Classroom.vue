<template lang="html">
  <div class="classroom">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students">
          <td>{{student.id}}</td>
          <td>{{student.name}}</td>
          <td>{{student.age}}</td>
          <td>{{student.sex}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {bus} from '../main.js'
import axios from 'axios'
export default {
  data() {
    return {
      students: [],
      classId: this.$route.params.id
    }
  },
  methods: {

  },
  created(){
    var self = this
    axios.get('http://localhost:8081/classes/'+this.classId+'/students').
    then(function handleData(response) {
      self.students = response.data;
      console.log(response.data);
    });
  },
  components:{

  }

}
</script>

<style lang="css" scoped>
</style>
