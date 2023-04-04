<template>
  <div class="home">
    <div class="gradient">
      <div class="banner">Kawhi</div>
    </div>
    <ElButton @click="onRest">重置</ElButton>
    <div class="tabs">
      <div
        v-for="item of TabsOptions"
        :key="item.id"
        @click="store.setCurrentId(item.id)"
        class="btn"
        :class="{ active: item.id === store.currentId }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TabsOptions } from './config';
import { useHomeStore } from './store';

const store = useHomeStore();

const onRest = () => {
  store.$reset();
};
</script>

<style lang="less" scoped>
.home {
  padding: 0 20px;
  height: calc(100vh - 68px);
  .gradient {
    width: 100%;
    height: 25vh;

    background-image: var(--background-image-linear-gradient);
    border-radius: 1vw;
    position: relative;
    .banner {
      color: var(--font-color-black);
      font-size: 32px;
      position: absolute;
      left: 20px;
      top: 5%;
    }
  }
  .tabs {
    display: flex;
    margin: 15px 0;
    > div.btn {
      background: #222529;
      padding: 10px 40px;
      color: #f9fafa;
      margin: 0 5px;
      letter-spacing: 2px;
      font-size: 16px;
      border-radius: var(--border-radius);
      cursor: pointer;
      user-select: none;
      &.active {
        background-image: var(--background-image-linear-gradient);
        color: #07080b;
      }
    }
  }
}
</style>
