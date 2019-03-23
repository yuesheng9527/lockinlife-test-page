<template>
  <div class="mineIndex_div1">
    <div class="mineIndex_div2">
      <p class="mineIndex_p1">
        <span class="mineIndex_span1">我的</span>
        <span class="mineIndex_span2" @click="mineindexdianji1">设置</span>
      </p>
    </div>
    <div class="mineIndex_div3">
      <ul class="mineIndex_ul1">
        <li class="mineIndex_li1" @click="towodexinxi"> 
          <span class="mineIndex_span3">我的信息</span>
          <img class="mineIndex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="mineIndex_li1" @click="toyunwuirenyuan">
          <span class="mineIndex_span3">运维人员</span> 
          <img class="mineIndex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
      </ul>
    </div>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        {
          name: "退出登录"
        }
      ]
    };
  },
  methods: {
    onSelect() {},
    mineindexdianji1() {
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    towodexinxi(){
      this.$router.push({path: '/mineindex/wodexinxi'})
    },
    toyunwuirenyuan(){
      this.$router.push({path: '/mineindex/yunwuirenyuan'})
    }
  }
};
</script>

<style scoped>
.mineIndex_img{
  position: absolute;
  right:0;
  width: 8%;
  height: 60%;
}
.mineIndex_li1{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid rgba(102, 102, 102, 0.473);
  height: 100%;
}
.mineIndex_span3{
  font-size: 18px;
  font-weight: 600;
  color: rgba(102, 102, 102, 0.952);
}
.mineIndex_div3{
  padding: 0 18px;
  height: 89.5%;
}
.mineIndex_ul1 {
  height: 8%;
}
.mineIndex_div1 {
  width: 100%;
  height: 100%;
}
.mineIndex_div2 {
  height: 10.5%;
  border-bottom: 1.5px solid #666;
}
.mineIndex_p1 {
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  position: relative;
}
.mineIndex_span1 {
  font-size: 20px;
  color: rgb(94, 90, 90);
  font-weight: 600;
}
.mineIndex_span2 {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: rgba(13, 3, 24, 0.747);
  right: 1%;
  bottom: 1%;
  height: 60%;
  width: 15%;
}
</style>