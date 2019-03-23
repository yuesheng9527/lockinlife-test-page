<template>
  <div class="gonDanchu_div1">
    <div class="gonDanchu_div2">
      <div class="gonDanchu_div3" @click="click"><van-icon size="30px" name="arrow-left"/></div>
      <div class="gonDanchu_div4"><span class="gonDanchu_span1">我的信息</span></div>
      <div class="gonDanchu_div5"></div>
    </div>
    <van-pull-refresh class="gondan_div5" v-model="isLoading" @refresh="onRefresh">
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods:{
    onRefresh() {
      setTimeout(() => {
        this.$toast({message:"刷新成功",duration:800});
        this.isLoading = false;
      }, 500);
    },
    click(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.gondan_div5 {
  height: 89.7%;
}
.gonDanchu_div1 {
  width: 100%;
  height: 100%;
}
.gonDanchu_div2{
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1.5px solid rgba(22, 18, 18, 0.904);
}
.gonDanchu_span1{
  font-size: 20px;
  color: rgb(94, 90, 90);
  font-weight: 600;
}
.gonDanchu_div3{
  height: 80%;
  width: 20%;
  display: flex;
  align-items: flex-end;
}
.gonDanchu_div4{
  height: 45%;
  display: flex;
  align-items: center;
}
.gonDanchu_div5{
  height: 80%;
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 5px; 
}
</style>
