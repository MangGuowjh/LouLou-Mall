<template>  
  <div class="user-box">    
    <div>我的</div> 
    <router-link to="/detail">跳转到详情页</router-link> 
    <br />
    <router-link to="/login">登录 | 注册</router-link>
  </div>
</template>

<script>
export default {  
  name: 'user',
};
</script>

<style lang="less" scoped>

</style>