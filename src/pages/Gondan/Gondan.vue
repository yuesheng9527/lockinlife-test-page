<template>
  <div class="gondan_div1">
    <div class="gondan_div2">
      <p class="gondan_p1">
        <span class="gondan_span1">工单</span>
      </p>
    </div>

    <div class="gondan_div3">
      <div class="gondan_div4" :class="a===1?'borderbottom1':''" @click="gondandianji1">待处理</div>
      <div class="gondan_div4" :class="a===2?'borderbottom1':''" @click="gondandianji2">已处理</div>
    </div>

    <van-pull-refresh class="gondan_div5" v-model="isLoading" @refresh="onRefresh">
      <router-view></router-view>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      isLoading: false
    };
  },
  created() {},
  methods: {
    gondandianji1() {
      if (this.a !== 1) {
        this.a = 1;
      }
      this.$router.push({ path: "/gondan/gondandaichuli" });
    },
    gondandianji2() {
      if (this.a !== 2) {
        this.a = 2;
      }
      this.$router.push({ path: "/gondan/gondanyichuli" });
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
.gondan_div1 {
  width: 100%;
  height: 100%;
}
.gondan_div2 {
  height: 10.5%;
}
.gondan_div3 {
  height: 8%;
  display: flex;
  border-top: 1.5px solid #666;
  border-bottom: 1.5px solid rgba(102, 102, 102, 0.473);
}
.gondan_div4 {
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
.gondan_div5 {
  height: 81%;
}
.gondan_div6 {
  height: 100%;
}
.van-pull-refresh__track {
  width: 100%;
  height: 100%;
}
.borderbottom1 {
  border-bottom: 3px solid rgb(0, 140, 255);
}
.gondan_p1 {
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}
.gondan_span1 {
  font-size: 20px;
  color: rgb(94, 90, 90);
  font-weight: 600;
}
</style>