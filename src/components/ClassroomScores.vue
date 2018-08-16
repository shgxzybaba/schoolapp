<template>
  <div class="body">
<!--this will show all the scores for a given subject in a given classroom  -->
<!--the scores will be editable  -->
  <h2>Class: </h2>
  <h2>faculty: </h2>
  <h2>subject: </h2>
  <table>
    <thead>
      <th>ID</th>
      <th>Student Name</th>
      <th>Score</th>
    </thead>
    <tbody>
      <tr v-for="score in scores">
        <td>{{score.student.id}}</td>
        <td>{{score.student.name}}</td>
        <td>
          <span v-if="changeScore">{{score.value}}</span>
          <div v-else="changeScore" class="">
            <input type="number" v-model="currentScore" min="0" max="100" @focus="setId(score.student.id)">
            <button type="button" name="button" @click="addScore">Submit</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios'
import {bus} from '../main'
export default {
  props: {

  },
  data () {
    return {
      classId: this.$route.params.classId,
      courseId: this.$route.params.id,
      scores: [],
      changeScore: true,
      currentScore: 0,
      currentStudentId: 0
  }

  },
  methods:{
    addScore: function () {
      axios.post('http://localhost:8081/students/{studentId}/courses/{courseId}/addscore',{

      }).then(response => {
        console.log('the data was posted');

      }).catch(error =>{
        console.log();
      })
    },
    setId: function (value) {
      this.currentStudentId = value;
      console.log(value);
    }

  },
  created(){
    // perform get operation with the given class id
    var self = this;
    axios.get('http://localhost:8081/score/'+classId+'/'+courseId)
    .then(function(response){
      // var classrooms = response.data;
      console.log(response.data);
      // this.Classrooms = classrooms;
      self.scores = response.data;
      // console.log(this.Classrooms);
    });

  },
  mounted(){
    // this.$on('activate')
  }
}
</script>

<style  scoped>

</style>
