<template>
  <div class="topic">
    <BreadcrumbRouter v-show="!hiddenBreadcrumbRouter" />
    <ol v-show="hiddenBreadcrumbRouter" class="cards-group">
      <li class="topic-item" v-for="item of currentRouters" v-bind="item" :key="item.key" @click="onClick(item)">
        {{ item.title }}
      </li>
    </ol>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import BreadcrumbRouter from '@/components/BreadcrumbRouter.vue';
import { RouterView, useRouter } from 'vue-router';
import type { TopicModel } from './interface.d';
import { nanoid } from 'nanoid';
import { computed } from 'vue';

const $router = useRouter();

const currentRouters = computed((): TopicModel[] => {
  return $router.currentRoute.value?.matched?.[0]?.children
    .filter(({ path }) => !!path)
    .map(({ path = '', meta }) => ({ key: nanoid(), path, ...meta }));
});

const hiddenBreadcrumbRouter = computed(() => {
  return $router.currentRoute.value.path === '/topic';
});

const onClick = (params: TopicModel) => {
  const path = params.path;
  if (!path) return;
  $router.push(`/topic/${path}`);
};
</script>

<style lang="less" scoped>
.topic {
  padding: 15px 2vw;
  .topic-item {
    cursor: pointer;
    font-size: 16px;
  }

  .cards-group {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(4, 22vw);
  }
}
</style>
