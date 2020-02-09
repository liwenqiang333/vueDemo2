<template>
  <div class="head-t">
     <van-swipe :autoplay="3000" indicator-color="white">
       <van-swipe-item>
         <img src="/static/img/01.jpg" alt="">
       </van-swipe-item>
       <van-swipe-item>2</van-swipe-item>
       <van-swipe-item>3</van-swipe-item>
       <van-swipe-item>4</van-swipe-item>
     </van-swipe>
      <input type="text" class='lwq-index'>
  </div>
</template>

<script>
export default {
  name: 'head-t',
  data() { 
    return {

    }
  },
  methods: {
      
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
.van-swipe{
  width:100%;
  height:3rem;
  background: red;
}
.lwq-index{
  width:2rem;
  height:0.2rem;
  display: block;
  margin-top: 0.2rem;
}
img{
  width:100%;
  height:100%;
}
</style>