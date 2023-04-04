<template>
  <div class="cards" @click="onClick" :style="{ backgroundColor: color }">
    <div class="framework">
      <div></div>
    </div>
    <div class="container">
      <div class="description">{{ title || `this is${path}` }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const props = defineProps<{
  title?: string;
  path?: string;
  color?: string;
}>();

const $router = useRouter();

const onClick = () => {
  const path = props.path;
  if (!path) return;
  $router.push(`/demo/${path}`);
};
</script>

<style lang="less" scoped>
.cards {
  @height: calc(0.618 * 100%);
  position: relative;
  width: 100%;
  float: left;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: 0.15s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
  }

  .framework {
    padding-top: @height;
    overflow: hidden;
  }
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    > .description {
      font-size: 24px;
    }
  }
}
</style>
