<template>
  <div class="home">
    <!-- <van-button type="primary">按钮</van-button> -->
    <div>邓琳</div>
    <div>
      <i class="iconfont icon-user"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="less" scoped>
.home {
  padding: 30px;
  div {
    background: grey;
    width: 150px;
    height: 150px;
    font-size: 18px;
    i {
      color: red;
    }
  }
}
</style>
