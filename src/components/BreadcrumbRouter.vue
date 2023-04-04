<template>
  <div class="breadcrumb-router">
    <div
      class="breadcrumb-router-item"
      v-for="(item, index) in currentMatchedRouter"
      :key="item.path"
    >
      <template v-if="currentMatchedRouter.length - 1 === index">
        <span class="breadcrumb-router-item-span">{{ item.meta?.title }}</span>
      </template>

      <template v-else>
        <RouterLink :to="item.path" class="breadcrumb-router-item-title">
          {{ item.meta?.title }}
        </RouterLink>
        <span>/</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const currentMatchedRouter = computed(() => {
  return $router.currentRoute.value.matched;
});
</script>

<style lang="less" scoped>
.breadcrumb-router {
  display: flex;
  align-items: center;
  &-item {
    &-title {
      margin: 0 10px;
      font-size: 18px;
      opacity: .5;
    }
    &-span {
      margin: 0 10px;
      font-size: 18px;
    }
    > span {
      font-size: 18px;
    }
  }
}
</style>
