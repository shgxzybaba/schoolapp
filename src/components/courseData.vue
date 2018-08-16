<template lang="html">
  <div class="courseForm">
    <h1>Enter new course details here</h1>

    <form class="form" onsubmit="#" method="post">
      <div>
        <label for="courseName">Course Name:</label> &nbsp; &nbsp; &nbsp; 
        <input type="text" name="courseName" v-model="courseName" placeholder="Biology"
         ref="courseName" @blur="validateCourseName" @focus="nameExists =nameExists">
         <!-- this is a warning sign -->
        <span v-show="nameExists" class="error">{{courseName}} already exists!!</span>
      </div>
      <div>
        <label for="courseDesc">Description:</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <!--  -->
        <input type="text" v-model="courseDesc" rows="8" cols="80">

      </div>
      <div>
        <!--dope styling needed here  -->
        <label>Faculties:</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
          Arts: <input type="checkbox" v-model="selectedFaculties" value="ARTS">
          Science: <input type="checkbox" v-model="selectedFaculties" value="SCIENCE">
          Commerce: <input type="checkbox" v-model="selectedFaculties" value="COMMERCIAL">
          <!-- <button type="button" name="button" @click="logNames">dummy</button> -->
      </div>
      <div><input type="submit" value="Save" v-on:click.prevent="post"/> <input type="reset" value="Clear"/></div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){

  },
  props:{

  },
  data: function(){
    return {
      selectedFaculties: [],
      courseName: '',
      courseDesc: '',
      nameExists: false,
      courses:[]

    };
  },
  methods:{
    post: function(){
    axios.post('http://localhost:8081/courses',{
      name: this.courseName,
      description: this.courseDesc,
      faculties: this.selectedFaculties
    }).then(response => {
      console.log('the data was posted '+this.selectedFaculties);

    }).catch(error =>{
      console.log(error);
    })
  },

  logNames: function () {
    console.log(this.$refs);
  },
  validateCourseName: function () {
    //this function should return true or false
    //first clear the value of courseName
    this.nameExists = false;
    var names = this.courseNames;
    var name = this.courseName;
    var existence = false;

    for (var i=0;i<names.length;i++) {
        if (names[i].toUpperCase() === name.toUpperCase() ) {
          console.log('names are equal');
          this.nameExists = true;
          break;
        }
        this.nameExists = false;
    }
  }

  },
  computed: {
    courseNames:function () {
       //referencing the courses in the prop
      var names = [];
      var length = this.courses.length;
      var counter = 0
      while (counter < length) {
        names.push(this.courses[counter].name);
        counter++;
      }

      return names;
    }
  },

  created(){
    axios.get('http://localhost:8081/courses')
    .then(function(response){
      var courses = response.body;
      console.log(response.body);
      this.courses = courses;
    });
  }

}
</script>

<style lang="css" scoped>

.error{
  color: red;
}
.courseForm{
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
}
h1{
  font-family: montserrat;
  font-weight: 500;
}
form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background: #ccc;
  padding: 60px 100px 40px 100px;
  height: auto;

}
div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
}
label{
  font-weight: bold;
  font-family: raleway;
}
input[type = text]{
  outline: none;
  height: 30px;
  width: 215px;
  color: grey;
}
input[type = submit]{
    background: #025837;
    outline: none;
    padding: 10px 20px;
    border: none;
    font-family: raleway;
    font-size: 14px;
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
    font-size: 14px;
    color: #fff;
    cursor: pointer;
 }

</style>
