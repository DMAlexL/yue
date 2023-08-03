<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="layout">
    <div class="header">
      <div class="header-logo">
        <img src="./assets/logo.svg" alt="logo" />
      </div>
      <div class="header-navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/demo">Demo</RouterLink>
        <RouterLink to="/documents">Documents</RouterLink>
        <RouterLink to="/topic">Topic</RouterLink>
      </div>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  position: relative;
  @header-height: 48px;
  @box-shadow: 10px;
  .header {
    height: @header-height;
    background: #000;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 999;
    box-shadow: 0 0 @box-shadow rgb(0 0 0 / 30%);
    &-logo {
      width: 40px;
      margin: 5px 5px 0 10px;
    }
    &-navigation {
      display: flex;
      align-items: center;
      > a {
        margin: 0 15px;
        padding: 5px 0;
        @active-color: #4cdbba;
        color: @active-color;
        &.router-link-active {
          border-bottom: 1px solid @active-color;
        }
      }
    }
  }
  .content {
    margin-top: @header-height;
    margin-top: 48px;
    padding: @box-shadow 0;
  }
}
</style>
