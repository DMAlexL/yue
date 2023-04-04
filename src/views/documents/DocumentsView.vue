<template>
  <div class="documents">
    <DocumentsCardItem
      v-for="item of store.list"
      v-bind="item"
      :key="item.key"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useDocumentsStore } from './store';
import DocumentsCardItem from './DocumentsCardItem.vue';
const store = useDocumentsStore();

onMounted(() => {
  store.query();
});
</script>

<style lang="less" scoped>
.documents {
  padding: 0 20px;
  height: calc(100vh - 68px);
}
</style>
