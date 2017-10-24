import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PictureBook from '@/components/PictureBook'
import Storytelling from '@/components/Storytelling'
import Calendar from '@/components/Calendar'
import PageScroll from '@/components/PageScroll'
// import Mutoscope from '@/components/Mutoscope'
import Animation from '@/components/Animation'
import ModelViewer from '@/components/ModelViewer'
import InteractiveGame from '@/components/InteractiveGame'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/picture-book',
      name: 'picture-book',
      component: PictureBook
    },
    {
      path: '/storytelling',
      name: 'storytelling',
      component: Storytelling
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/page-scroll',
      name: 'page-scroll',
      component: PageScroll
    },
    {
      path: '/model-viewer',
      name: 'model-viewer',
      component: ModelViewer
    },
    {
      path: '/mutoscope',
      name: 'mutoscope',
      component: Animation
    },
    {
      path: '/interactive-game',
      name: 'interactive-game',
      component: InteractiveGame
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: {name: 'not-found'}
    }
  ]
})
