<template>
  <div class="bottom_div1">
    <div class="bottom_div2" @click="dianji1">
      <router-link to="/gondan">
      <div class="bottom_div6" v-show="a===1">
        <img src="../../images/1B9BFF/wode1.png">
      </div>
      <div class="bottom_div6"  v-show="a===2">
        <img src="../../images/666/gongdan.png">
      </div>
      <div class="bottom_div7" :class="a===1?'fontColor':''">工单</div>
      </router-link>
    </div>

    <div class="bottom_div3" @click="dianji2">
      <router-link to="/arealist">
      <div class="bottom_div8"  v-show="b===1">
        <img src="../../images/1B9BFF/wode3.png">
      </div>
      <div class="bottom_div8"  v-show="b===2">
        <img src="../../images/666/xunjianguiji.png">
      </div>
      <div class="bottom_div9" :class="b===1?'fontColor':''">巡检</div>
      </router-link>
    </div>

    <div class="bottom_div4" @click="dianji3">
      <router-link to="/statisticsindex">
      <div class="bottom_div10"  v-show="c===1">
        <img src="../../images/1B9BFF/wode4.png">
      </div>
      <div class="bottom_div10"  v-show="c===2">
        <img src="../../images/666/xiazai7.png">
      </div>
      <div class="bottom_div11" :class="c===1?'fontColor':''">统计</div>
      </router-link>
    </div>

    <div class="bottom_div5" @click="dianji4">
      <router-link to="/mineindex">
      <div class="bottom_div12"  v-show="d===1">
        <img src="../../images/1B9BFF/wode2.png">
      </div>
      <div class="bottom_div12"  v-show="d===2">
        <img src="../../images/666/wode_1.png">
      </div>
      <div class="bottom_div13" :class="d===1?'fontColor':''">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
      c: 2,
      d: 2
    };
  },
  methods: {
    dianji1() {
      if(this.a!==1){this.a=1,this.b=2,this.c=2,this.d=2}
    },
    dianji2() {
      if(this.b!==1){this.a=2,this.b=1,this.c=2,this.d=2}
    },
    dianji3() {
      if(this.c!==1){this.a=2,this.b=2,this.c=1,this.d=2}
    },
    dianji4() {
      if(this.d!==1){this.a=2,this.b=2,this.c=2,this.d=1}
    }
  }
};
</script>

<style scoped>
.bottom_div1 {
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 1.5px solid #666;
}
.bottom_div2,
.bottom_div3,
.bottom_div4,
.bottom_div5 {
  height: 100%;
  flex: 1;
}
.bottom_div6,
.bottom_div8,
.bottom_div10,
.bottom_div12 {
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.bottom_div7,
.bottom_div9,
.bottom_div11,
.bottom_div13 {
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  color: #666;
  font-size: 15px;
  font-weight: 600;
  
}
img {
  width: 24.5%;
  height: 75%;
}
.fontColor {
  color: #1b9bff;
}
</style>