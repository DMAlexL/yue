<template>
  <div>
    <ol>
      密码规则：
      <li>长度大于8，且小于32</li>
      <li>不能包含连续3位及以上相同字母或数字</li>
      <li>不能包含3个以上字典连续字符</li>
      <li>不能包含3个及以上键盘连续字符</li>
      <li>数字、小写字母、大写字母、特殊字符，至少包含三种</li>
    </ol>
    <ol>
      用户名规则：
      <li>不可包含root，admin，huawei，cisco</li>
      <li>不可包含 5位以上连续字符或相同字符</li>
     
    </ol>
  </div>

  <label>
    账户
    <input type="text" v-model="username" @change="onChangeUsername" />
  </label>
  <label>
    密码
    <input type="text" v-model="password" @change="onChangePassword" />
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  checkPasswordRules,
  checkUsernameRules,
} from './checkUsernameAndPassword';
const username = ref('');
const password = ref('');

const onChangeUsername = (e) => {
  const result = checkUsernameRules(e.target.value);
  console.log('🚀 ~ onChangeUsername ~ result:', result);
};

const onChangePassword = (e) => {
  const result = checkPasswordRules(e.target.value);
  console.log('🚀 ~ onChangePassword ~ result:', result);
};
</script>

<style lang="less" scoped>
input {
  background: #000;
  border: 1px solid;
  color: #fff;
}
</style>
