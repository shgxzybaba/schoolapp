<template>
  <div id="app">
  <app-header></app-header>
  <router-link to="/studentForm"><button type="button" class="add">Add Student</button></router-link>
  <router-link to="/"><button type="button" class="class" >Classrooms</button></router-link>
  <router-link to="/courseForm"><button type="button" class="course">Add Course</button></router-link>
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
import Body from './components/Body.vue'
import Classes from './components/Data.vue'
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
    'app-body': Body,
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

#app {
  margin: 0;
  padding: 0;
}

h1{

  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #1a011a;
  font-family: serif;
  font-size: 24px;
  font-family: raleway;
}
p{

  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: purple;
  font-family: serif;
}
button {

   border: none;
   color: #fff;
   padding: 10px 15px;
   cursor: pointer;
   font-family: raleway;
   margin-top: 10px;
   box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.678);
}
button:hover{
  box-shadow: none;
}
.add{

  background: #025837;
 

}

.class {

  background: #1a011a;
}

.course{

  background: #002e4d;

}

</style>
