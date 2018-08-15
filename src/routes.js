import Classroom from './components/Classroom.vue'
import Classrooms from './components/Data.vue'
import courseForm from './components/courseData.vue'
import studentForm from './components/StudentForm.vue'

export default [
  {
    path:'/classes/:id',
    component:Classroom
  },
  {
    path:'/',
    component: Classrooms
  },
  {
    path:'/courseForm',
    component: courseForm
  },
  {
    path:'/studentForm',
    component: studentForm
  }
]
