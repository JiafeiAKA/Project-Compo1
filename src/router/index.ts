import { createRouter, createWebHistory } from 'vue-router'
import MedalListView from '@/views/MedalListView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import CountyDetailView from '@/views/event/CountyDetailView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import nProgress from 'nprogress'
import CheerUpView from '@/views/event/CheerUpView.vue'
import OlympicDetailView from '@/views/event/OlympicDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Event-List-View',
      component: MedalListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        pageSize: parseInt(route.query.pageSize?.toString() || '4')
      })
    },
    {
      path: '/cheerup',
      name: 'cheer-up',
      component: CheerUpView
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: LayoutView,
      props: true,
      children: [
        {
          path: 'detail/:id',
          name: 'event-detail-view',
          component: CountyDetailView,
          props: true
        },
        {
          path: 'olympicdetail/:id',
          name: 'event-olympicdetail-view',
          component: OlympicDetailView,

          props: true
        }
      ]
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/404/:resource',
      name: '404/resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  nProgress.start()
})
router.afterEach(() => {
  nProgress.done()
})

export default router
