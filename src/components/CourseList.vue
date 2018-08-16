<template lang="html">
  <div class="courseList">
    <!--the table for the list of available coureses goes here  -->
    <h2>The courses offered for now</h2>
    <table>
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Course Faculties</th>
        </tr>
      </thead>
      <tbody>
        <!-- use a for loop to populate table data -->
        <tr v-for="course in courses">
          <td @click="logvalue(course.id)">{{course.id}}</td>
          <td>{{course.name}}</td>
          <td>
            <!--each faculty in the given course  -->
            <tr v-for="faculty in course.faculties">
              {{faculty}}
            </tr>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Click to add a new course: <button type="button" name="addCourse" @click="showForm()">Add</button>
    </p>
    <!--the add course component should go here  -->

  </div>

</template>

<script>
import {bus} from '../main'
export default {
  props:{
    courses:{
      type: Array,
      required: true
    }

  },
  data:function () {
    return {
      //list of courses should go here
      // courses:[]
      visible: true

    };
  },
  methods:{

    showForm: function (value) {
      var self = this
      !self.visible;
      bus.$emit('showForm',self.visible)
    },
    logvalue: function (value) {
      console.log("the value is"+value);
    }

  },
  components:{

  },
  created(){
    //get the data from the server

  }
}
</script>

<style lang="css" scoped>

</style>
