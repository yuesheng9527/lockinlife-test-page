<template>
  <div class="arealist_div1">
    <div class="arealist_div2">
      <p class="arealist_p1">
        <span class="arealist_span1">巡检</span>
      </p>
    </div>

    <div class="arealist_div3">
      <div class="arealist_div4" :class="b===1?'borderbottom2':''" @click="arealistdianji1">待巡检</div>
      <div class="arealist_div4" :class="b===2?'borderbottom2':''" @click="arealistdianji2">已巡检</div>
    </div>

    <van-pull-refresh class="arealist_div5" v-model="isLoading" @refresh="onRefresh">
      <router-view></router-view>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: 1,
      isLoading: false
    };
  },
  methods: {
    arealistdianji1() {
      if (this.b !== 1) {
        this.b = 1;
      }
      this.$router.push({path: '/arealist/arealistdaixunjian'})
    },
    arealistdianji2() {
      if (this.b !== 2) {
        this.b = 2;
      }
      this.$router.push({path: '/arealist/arealistyixunjian'})
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast({message:"刷新成功",duration:800});
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style>
.arealist_div1 {
  width: 100%;
  height: 100%;
}
.arealist_div2 {
  height: 10.5%;
}
.arealist_div3 {
  height: 8%;
  display: flex;
  border-top: 1.5px solid #666;
  border-bottom: 1.5px solid rgba(102, 102, 102, 0.473);
}
.arealist_div4 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 20%;
  font-size: 18px;
  font-weight: 600;
  color: rgba(102, 102, 102, 0.952);
  margin: 0 17.5%;
}
.arealist_div5{
  height: 81%;
}
.borderbottom2 {
  border-bottom: 3px solid rgb(0, 140, 255);
}
.arealist_p1 {
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}
.arealist_span1 {
  font-size: 20px;
  color: rgb(94, 90, 90);
  font-weight: 600;
}
</style>