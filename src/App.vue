<template>
  <div id="app">
  <app-header></app-header>
  <router-link to="/studentForm"><button type="button">Add Student</button></router-link>
  <router-link to="/"><button type="button" >Classrooms</button></router-link>
  <router-link to="/courseForm"><button type="button">Add Course</button></router-link>
  
  <!-- <keep-alive> -->
  <!-- <component v-bind:is="givenComponent"
  v-bind:Classrooms="Classrooms"
  v-bind:courses="courses"></component>
  </keep-alive> -->
  <router-view></router-view>

  <app-footer></app-footer>

  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Footing from './components/Footing.vue'
// import Body from './components/Classes.vue'
import Classes from './components/Classes.vue'
import Form from './components/StudentForm.vue'
import Classroom from './components/Classroom.vue'
// import courseForm from './components/CourseData.vue'
// import {bus} from '../main'

export default {
  name: 'app',
  data () {
    return {
      givenComponent: 'classes-body',
      // Classrooms: [],
      // courses: []
    }
  },
  methods:{

  },

  components:{
    'app-header': Heading,
    'app-footer': Footing,

    'classes-body': Classes,
    'student-form':Form,
    'selected-classroom': Classroom,
    // 'course-form': courseForm
  },
  computed:{

  },
  created() {


  }


}
</script>

<style scoped>
h1{

  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: purple;
  font-family: serif;
}
p{

  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: purple;
  font-family: serif;
}

</style>
