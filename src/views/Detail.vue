<template>  
  <div class="detail">    
    <!-- <div>详情页面</div>   -->
    <s-header :title="'详情'"></s-header>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
export default {  
  name: 'detail',
  components: {    
    sHeader,  
  },
};
</script>

<style lang="less" scoped>

</style>