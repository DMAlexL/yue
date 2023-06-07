import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/demo/DemoIndex.vue'),
      meta: {
        title: 'Demo',
      },
      children: [
        {
          path: 'd1',
          meta: {
            title: '动画特效',
            color: '#12aa9c',
          },
          component: () =>
            import('@/views/demo/animation-test/AnimationTestView.vue'),
        },
        {
          path: 'd2',
          meta: {
            title: 'v-for 中使用 Map',
            color: '#93b5cf',
          },
          component: () => import('@/views/demo/d2/D2View.vue'),
        },
        {
          path: 'd3',
          meta: {
            title: '有意思的粘性气泡 Loading',
            color: '#c45a65',
          },
          component: () => import('@/views/demo/loading/BubblesLoading.vue'),
        },
      ],
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/documents/DocumentsView.vue'),
    },
  ],
});

export default router;
