<template>
  <div>
    <div>
      标准盒模型：盒子总宽度/高度 = width/height + padding + border + margin。（ 即 width/height 只是内容高度，不包含
      padding 和 border 值 ）
    </div>
    <div>
      IE盒子模型：盒子总宽度/高度 = width/height + margin = (内容区宽度/高度 + padding + border) + margin。（ 即
      width/height 包含了 padding 和 border 值 ）
    </div>

    <div class="box">
      <div class="content-box">标准盒模型</div>
      <div class="border-box">IE盒子模型</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.box {
  display: flex;
  > div {
    border: 10px solid;
    width: 500px;
    height: 500px;
    margin: 10px;
    padding: 10px;
  }
  .content-box {
    box-sizing: content-box;
  }
  .border-box {
    box-sizing: border-box;
  }
}
</style>
