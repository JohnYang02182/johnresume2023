import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Personal from '../views/Personal.vue'
import Project from '../views/Project.vue'
import ProjectDetail from '../views/projectDetail/ProjectDetail.vue'

const routesParams: Array<RouteRecordRaw> = [
  {
    path: '/', name: 'Home', component: Home,
    meta: {
      layout: true
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
