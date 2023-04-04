<template>
  <i class="iconfont" :class="type" :style="{ fontSize: `${size}px` }" />
</template>

<script setup lang="ts">
export interface Props {
  size?: number;
  type?: string;
}

withDefaults(defineProps<Props>(), {
  size: 16,
});
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/c/font_3292465_eu9qc4bgsln.css';
</style>
