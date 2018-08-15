<template lang="html">
  <div class="courseForm">
    <h1>Enter new course details here</h1>

    <form class="form" onsubmit="#" method="post">
      <p>
        <label for="courseName">Course Name:</label>
        <input type="text" name="courseName" v-model="courseName" placeholder="Biology"
         ref="courseName" @blur="validateCourseName" @focus="nameExists =nameExists">
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
      <p><input type="submit" value="Save" v-on:click.prevent="post"/> <input type="reset" value="Clear"/></p>
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
  margin-left: auto;
  text-align: center;
  font-family: sans-serif;
}
label{
  font-weight: bold;
}

</style>
