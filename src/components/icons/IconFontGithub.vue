<template>
  <a :href="href" target="_blank" rel="noreferrer" title="github address">
    <IconFont :size="30" type="github" />
  </a>
</template>

<script setup lang="ts">
import IconFont from './IconFont.vue';

defineProps({
  href: String,
});
</script>
