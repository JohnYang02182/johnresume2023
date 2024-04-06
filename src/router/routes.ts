import { title } from 'process'
import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Personal = () => import('../views/Personal.vue')
const Project = () => import('../views/Project.vue')
const ProjectDetail = () => import('../views/projectDetail/ProjectDetail.vue')
const ErrorPage = () => import('../components/Error.vue')

const routesParams: Array<RouteRecordRaw> = [
  {
    path: '/', name: 'Home', 
    component: Home,
    meta: {
      title: 'Index',
      describtion: 'Home page',
      layout: true
    }
  },
  {
    path: '/:pathMatch(.*)*', name: 'Error', component: ErrorPage, 
    meta: {
      title: 'Error',
      describtion: 'Error page',
      layout: false
    }
  },
  {
    path: '/personal', name: 'Personal', component: Personal,
    meta: {
      title: 'Personal',
      describtion: 'Personal page',
      layout: true
    }
  },
  {
    path: '/project', name: 'Project', component: Project,
    meta: {
      title: 'Project',
      describtion: 'Project page',
      layout: true
    },
    children: [
      {
        path: 'detail/:id',
        name: 'ProjectDetail',
        component: ProjectDetail, 
        meta: {
          layout: false
        }
      }
    ]
  }
]
export default routesParams
