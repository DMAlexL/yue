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
            title: '欢迎',
            color: '#93b5cf',
          },
          component: () => import('@/components/WelcomeItem.vue'),
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
