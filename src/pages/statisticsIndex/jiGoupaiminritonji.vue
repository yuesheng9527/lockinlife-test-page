<template>
  <div class="gonDanchu_div1">
    <div class="gonDanchu_div2">
      <div class="gonDanchu_div3" @click="click"><van-icon size="30px" name="arrow-left"/></div>
      <div class="gonDanchu_div4"><span class="gonDanchu_span1">机构排名日统计</span></div>
      <div class="gonDanchu_div5" @click="riqi"><van-icon size="30.5px" name="notes-o"/></div>
    </div>
    <van-pull-refresh class="gondan_div5" v-model="isLoading" @refresh="onRefresh">
    </van-pull-refresh>
    <van-popup v-model="show" position="bottom" :overlay="false">
      <van-datetime-picker  @confirm="confirm" @cancel="cancel" class="van-datetime-picker_1" title="选择时间" v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      show: false,
      isLoading: false
    };
  },
  methods:{
    confirm(){
      this.show=false;
    },
    cancel(){
      this.show=false;
    },
    riqi(){
      this.show=true;
    },
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
.van-datetime-picker_1{
  background-color: rgba(137, 43, 226, 0.212);
  padding: 10px;
}
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