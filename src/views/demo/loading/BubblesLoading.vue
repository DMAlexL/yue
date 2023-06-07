<template>
  <div class="g-container">
    <div class="g-circle"></div>
    <ul class="g-bubbles">
      <li v-for="(_, index) in data" :key="index" class="g-bubble"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const data = Array.from({ length: 200 }, (_, i) => i);
</script>

<style lang="scss" scoped>
$count: 200;

.g-container {
  position: relative;
  width: 500px;
  height: 500px;
  padding: 100px;
  filter: blur(3px) contrast(3);
  background: #000;
  animation: hueRotate 8s infinite linear;
  --headColor: hsl(130, 75%, 75%);
  --endColor: hsl(60, 75%, 40%);

  .g-circle {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: conic-gradient(
      var(--headColor) 0,
      var(--headColor) 2%,
      hsl(120, 75%, 70%),
      hsl(110, 75%, 65%),
      hsl(100, 75%, 60%),
      hsl(90, 75%, 55%),
      hsl(80, 75%, 50%),
      hsl(70, 75%, 45%),
      var(--endColor) 16%,
      var(--endColor) 18%,
      transparent 18%
    );
    mask: radial-gradient(transparent, transparent 119px, #000 120px, #000);
    animation: rotate 4s infinite -700ms linear;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 32px;
      height: 32px;
      background: var(--headColor);
      top: 0;
      left: 135px;
      border-radius: 50%;
    }

    &::after {
      background: var(--endColor);
      left: unset;
      top: 80px;
      right: 10px;
    }
  }

  .g-bubbles {
    position: absolute;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    border-radius: 50px;
  }

  .g-bubble {
    position: absolute;
    border-radius: 50%;
    background: var(--endColor);
  }
}

@for $i from 1 through $count {
  .g-bubble:nth-child(#{$i}) {
    --rotate: calc(360 / #{$count} * #{$i} * 1deg);
    --delayTime: calc(4000 * #{$i} / #{$count} * -1ms);
    --width: 30px;
    --scale: calc(0.4 + #{random(10)} / 10);
    --x: #{-100 + random(200)}px;
    --y: #{-100 + random(200)}px;
    width: var(--width);
    height: var(--width);
    transform: rotateZ(var(--rotate)) translate(135px, 0);
    opacity: 1;
    animation: showAndHide 4000ms linear var(--delayTime) infinite;
  }
}

@keyframes showAndHide {
  0% {
    transform: rotateZ(var(--rotate)) translate(135px, 0);
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  75.1% {
    transform: rotateZ(var(--rotate)) translate(135px, 0) scale(var(--scale));
    opacity: 1;
  }
  100% {
    transform: rotateZ(var(--rotate))
      translate(calc(135px + var(--x)), var(--y)) scale(0.2);
    opacity: 0;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes hueRotate {
  100% {
    filter: blur(3px) contrast(3) hue-rotate(360deg);
  }
}
</style>
