import Classroom from './components/Classroom.vue'
import Classrooms from './components/Classes.vue'
import courseForm from './components/courseData.vue'
import studentForm from './components/StudentForm.vue'
import classCourse from './components/ClassroomScores.vue'

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
  },
  {
    path:'classes/:classId/courses/:id/',
    component: classCourse
  }
]
