<template>
  <div class="example" ref="element">123</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const element = ref();

onMounted(() => {
  handleAnimate();
});

const handleAnimate = () => {
  const animation = element.value.animate(
    [
      { opacity: 0, transform: 'translateY(-20px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    {
      duration: 1000,
      easing: 'ease-out',
      fill: 'both',
    },
  );

  animation.addEventListener('finish', () => {
    console.log('Animation finished!');
  });
};
</script>

<style lang="less" scoped>
.example {
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background-color: rgb(19, 211, 147);
}
</style>
