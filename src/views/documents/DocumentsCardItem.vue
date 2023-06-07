<template>
  <div class="cards" :style="style || {}">
    <div class="framework"></div>
    <div class="container">
      <div class="title">
        <div class="flex-center">
          <img width="50" height="50" :src="logo" alt="logo" />
          <span class="name">{{ title }}</span>
        </div>
        <IconFontGithub :href="github" />
      </div>
      <p class="about">{{ intro }}</p>
      <div>相关资料</div>
      <div class="material">
        <div v-for="wiki of wikis" :key="wiki.address">
          {{ `${1}. ` }}
          <a :href="wiki.address" :target="wiki.target" rel="noreferrer">
            {{ wiki.name }}
          </a>
        </div>
      </div>
      <div v-if="wikis.length > 1" class="more">更多</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFontGithub from '@/components/icons/IconFontGithub.vue';
import type {CardViewModel} from './interface.d'

defineProps<CardViewModel>();
</script>

<style lang="less" scoped>
.cards {
  @height: calc(0.618 * 100%);
  position: relative;
  width: 430px;
  border-radius: 12px;
  margin: 15px;
  transition: 0.15s;
  background: #63bbd0;
  float: left;

  .framework {
    padding-top: @height;
    overflow: hidden;
  }
  .container {
    @padding: 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: @padding;
    > .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        font-size: 30px;
        margin-left: 10px;
      }
    }
    > p {
      font-size: 18px;
    }
    > .material {
      padding: 5px 20px;
      > div {
        margin: 5px 0;
      }
    }
    > .more {
      position: absolute;
      right: @padding;
      bottom: @padding;
      cursor: pointer;
    }
  }
}
</style>
