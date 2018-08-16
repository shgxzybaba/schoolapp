<template>

<div class="studentForm">
<h2>Fill in this form to add a Student</h2>
<br />
<form method="post" onsubmit="#" class="form">
  <div class="name">
    <label>Student's Name:</label> &nbsp; &nbsp; &nbsp;
    <input type="text" required v-model="Student.name" placeholder="Full name" size="38"/>
  </div>
  <div class="birth">
    <label>Date of Birth: </label><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
      <input type="number" placeholder="Day" v-model="day" v-bind:max="day" min="1"/>
      <input type="number" placeholder="Month" v-model = "month" max="12" min="1"/>
      <input type="number"  placeholder="Year" v-model="year" min="1993" @blur="logDate"/>
  </div>
  <div class="age">
    <label>Age: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;{{age}} </label>
  </div>
  <div class="sex">
    <label>Sex:  </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 
    Male:<input type="radio" name="sex" value="Male" v-model="Student.sex"/>
    Female:<input type="radio" name="sex" value="Female" v-model="Student.sex"/>
  </div>
  <div class="class">
    <label>Class: </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
    <select name="classes" v-model="classId" >
      <!--<template v-for="(classroom, index) in Classrooms">-->
      <option v-for = "classroom in Classrooms"> {{classroom.id}}</option>
      <!--</template>-->
    </select>
  </div>
  <p>
    <input type="submit" value="Save" v-on:click.prevent="post"/>
    <input type="reset" value="Clear"/>
  </p>
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

.studentForm{

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;

}
.studentForm h2{

    font-family: montserrat;
    font-size: 20px;
}

form {
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  background: #ccc;
  padding: 60px 100px 10px 100px;
  height: auto;
}
div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
 label{
   align-self: flex-start;
   font-family: montserrat;
 }
 .name input{

   width: 218px;
   height: 30px;
   outline: none;
   font-family: montserrat;
   font-size: 14px;
   color: grey;
   margin-top: -10px;
   margin-left: -2px;

 }

.birth label{
  margin-top: 20px;

}
 .birth input {
   height: 30px;
   outline: none;
   font-family: montserrat;
   width: 70px;
   margin-top: 10px;
   color: grey;

 }
 .age{
   margin-top: 20px;
 }
.sex {
  font-family: montserrat;
  margin-top: 20px;
}
 .sex input {
   font-family: montserrat;
   margin-left: 10px;
 }
 .class{
   margin-top: 20px;
   margin-left: -5px;
 }

 select {
    width: 100px;
    height: 25px;
    outline: none;
 }


 option{
   width: 100px;
   outline: none;
 }

 input[type = submit]{
    background: #025837;
    outline: none;
    padding: 10px 20px;
    border: none;
    font-family: raleway;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
 }
 input[type = reset]{
    background: #1a011a;
    outline: none;
    padding: 10px 20px;
    border: none;
    font-family: raleway;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
 }
</style>
