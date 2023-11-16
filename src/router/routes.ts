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
      layout: true
    }
  },
  {
    path: '/:pathMatch(.*)*', name: 'Error', component: ErrorPage, 
    meta: {
      layout: false
    }
  },
  {
    path: '/personal', name: 'Personal', component: Personal,
    meta: {
      layout: true
    }
  },
  {
    path: '/project', name: 'Project', component: Project,
    meta: {
      layout: true
    },
    children: [
      {
        path: 'detail/:id', name: 'ProjectDetail', component: ProjectDetail, 
        meta: {
          layout: false
        }
      }
    ]
  }
]
export default routesParams
