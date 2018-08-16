<template lang="html">
  <div class="courseForm">
    <course-list v-bind:courses="courses"></course-list>
    <span v-show="success" class="success">{{courseName}} added!</span>
    <div class="" v-show="showForm">
      <h2>Enter new course details here</h2>

      <form class="form" onsubmit="#" method="post" ref= "form">
        <p>
          <label for="courseName">Course Name:</label>
          <input type="text" name="courseName" v-model="courseName" placeholder="Biology"
           ref="courseName" @input="validateCourseName" @focus="nameExists =nameExists">
           <!-- this is a warning sign -->
          <span v-show="nameExists" class="error">{{courseName}} already exists!!</span>
        </p>
        <p>
          <label for="courseDesc">Description:</label>
          <!--  -->
          <input type="text" v-model="courseDesc" rows="8" cols="80">

        </p>
        <p>
          <!--dope styling needed here  -->
          <label>Faculties:</label>
            Arts: <input type="checkbox" v-model="selectedFaculties" value="ARTS">
            Science: <input type="checkbox" v-model="selectedFaculties" value="SCIENCE">
            Commerce: <input type="checkbox" v-model="selectedFaculties" value="COMMERCIAL">
            <!-- <button type="button" name="button" @click="logNames">dummy</button> -->
        </p>
        <p>
          <input type="submit" value="Save" v-on:click.prevent="post"/> <input type="reset" value="Clear"/><br />

        </p>
      </form>
    </div>


  </div>
</template>

<script>
import {bus} from '../main'
import axios from 'axios'
import courseList from './CourseList.vue'
export default {

  mounted(){
    var self = this
    bus.$on('showForm',function (value) {
      self.showForm = value;
    })
  },
  props:{

  },
  data: function(){
    return {
      selectedFaculties: [],
      courseName: '',
      courseDesc: '',
      nameExists: false,
      courses:[],
      showForm: false,
      success: false

    };
  },
  methods:{
    post: function(){
      var self = this
    axios.post('http://localhost:8081/courses',{
      name: this.courseName,
      description: this.courseDesc,
      faculties: this.selectedFaculties
    }).then(response => {
      console.log('the data was posted '+this.selectedFaculties);
      self.success = true

    }).catch(error =>{
      console.log(error);
    });
    self.showForm = false;
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
    var self = this
    axios.get('http://localhost:8081/courses')
    .then(function(response){
      var courses = response.data;
      console.log(response.data);
      self.courses = courses;
    });
  },

  components:{
    'course-list': courseList
  }

}
</script>

<style lang="css" scoped>
.error{
  color: red;
}
.courseForm{
  margin-left: auto;
  text-align: center;
  font-family: sans-serif;
}
label{
  font-weight: bold;
}
.success{
  font-weight: bold;
  color: green;
}

</style>
