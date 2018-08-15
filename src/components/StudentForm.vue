<template>

<div>
<h2>Fill in this form to add a Student</h2>
<br />
<form method="post" onsubmit="#" class="form">
  <p>
    <label>Student's Name:</label>
    <input type="text" required v-model="Student.name" placeholder="Full name" size="38"/>
  </p>
  <p>
    <label>Date of Birth: </label><br/>
    Day: <input type="number" v-model="day" v-bind:max="day" min="1"/>
    Month: <input type="number" v-model = "month" max="12" min="1"/>
    Year: <input type="number" v-model="year" min="1993" @blur="logDate"/>
  </p>
  <p>
    <label>Age:{{age}} </label>
  </p>
  <p>
    <label>Sex: </label>
    Male:<input type="radio" name="sex" value="Male" v-model="Student.sex"/>
    Female:<input type="radio" name="sex" value="Female" v-model="Student.sex"/>
  </p>
  <p>
    <label>Class: </label>
    <select name="classes" v-model="classId" >
      <!--<template v-for="(classroom, index) in Classrooms">-->
      <option v-for="classroom in Classrooms">{{classroom.id}}</option>
      <!--</template>-->
    </select>
  </p>
  <p><input type="submit" value="Save" v-on:click.prevent="post"/> <input type="reset" value="Clear"/></p>
</form>
</div>
</template>
<script>
import {bus} from '../main'
import axios from 'axios'
export default {
  props: {

    },
  data () {
    return{
      Classrooms: [],
      Student: {
        name: '',
        sex:'Male',
        birthDay: null
        },
      classId: '',
      // day: '',
      month: 1,
      year: 1990
        }
      },
  methods:{
    //this is performed when data is submitted
    post: function(){
    axios.post('http://localhost:8081/classes/'+this.classId+'/students',{
      name: this.Student.name,
      sex: this.Student.sex,
      birthDay: this.birthDay
    }).then(response => {
      console.log('the data was posted');

    }).catch(error =>{
      console.log();
    })
    },
    logDate: function(){
     console.log(this.birthDay)
    }
  },
  beforeCreate(){
    var self = this;
    axios.get('http://localhost:8081/classes')
    .then(function(response){
      var classrooms = response.data;
      console.log(response.data);
      // this.Classrooms = classrooms;
      self.Classrooms = classrooms;
      console.log(this.Classrooms);
    });
  },

  computed:{
    birthDay : function(){
    return new Date(this.year, this.month, this.day);
    // return this.birthDay;
    },
    age: function(){
      var now = new Date();
      var result = now.getTime() - this.birthDay.getTime();
      return Math.floor(result/(1000*60*60*24*365.25))
    },
    day: function () {
      if (this.month==2) {
        return 28;
      } else {
        return 31;
      }
      return 1;
    }
  }
}
</script>

<style scoped>

p{
  text-align: center;
  padding-top: 2px;
  font-family: helvetica;
  background-color: lightblue;
  margin: 5px;
}
input{
  padding-block-end: 3px;
  padding-top: 2px;
}
label{
  font-weight: bold;
}
h2{
  text-align: center;
  color: gray;
}

</style>
