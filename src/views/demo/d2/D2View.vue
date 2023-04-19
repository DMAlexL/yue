<template>
  <div>
    <div v-for="[index, item] in DeviceType_Map" :value="index" :key="index">
      {{ index + item }}
    </div>
  </div>
</template>

<script setup lang="ts">
const DeviceType_Country = '0';
const DeviceType_Home = '1';

const DeviceType_Map = new Map([
  [DeviceType_Country, '国标'],
  [DeviceType_Home, '看家'],
  [undefined, ''],
]);
</script>

<style lang="less" scoped></style>
