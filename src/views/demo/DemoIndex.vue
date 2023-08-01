<template>
  <div class="demo">
    <BreadcrumbRouter v-show="!hiddenBreadcrumbRouter" />
    <div v-show="hiddenBreadcrumbRouter" class="cards-group">
      <DemoIndexCard v-for="item of currentRouters" v-bind="item" :key="item.key" />
    </div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import DemoIndexCard from './DemoIndexCard.vue';
import BreadcrumbRouter from '@/components/BreadcrumbRouter.vue';
import { useRouter } from 'vue-router';
import type { DemoCardModel } from './interface.d';
import { nanoid } from 'nanoid';
import { computed } from 'vue';

const $router = useRouter();

const currentRouters = computed((): DemoCardModel[] => {
  return $router.currentRoute.value?.matched?.[0]?.children
    .filter(({ path }) => !!path)
    .map(({ path = '', meta }) => ({ key: nanoid(), path, ...meta }));
});

const hiddenBreadcrumbRouter = computed(() => {
  return $router.currentRoute.value.path === '/demo';
});
</script>

<style lang="less" scoped>
.demo {
  padding: 15px 2vw;

  .cards-group {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(4, 22vw);
  }
}
</style>
