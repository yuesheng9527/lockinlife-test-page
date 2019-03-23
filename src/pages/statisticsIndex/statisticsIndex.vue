<template>
  <div class="statisticsIndex_div1">
    <div class="statisticsIndex_div2">
      <p class="statisticsIndex_p1">
        <span class="statisticsIndex_span1">统计</span>
      </p>
    </div>
    <div class="statisticsIndex_div3">
      <ul class="statisticsIndex_ul1">
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/gondanchulijilu'})">
          <span class="statisticsIndex_span3">工单处理记录</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/yunwuiritonji'})">
          <span class="statisticsIndex_span3">运维日统计</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/yunwuiyuetonji'})">
          <span class="statisticsIndex_span3">运维月统计</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/yunwuiniantonji'})">
          <span class="statisticsIndex_span3">运维年统计</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/jigoupaiminritonji'})">
          <span class="statisticsIndex_span3">机构排名日统计</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/jigoupaiminyuetonji'})">
          <span class="statisticsIndex_span3">机构排名月统计</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
        <li class="statisticsIndex_li1" @click="$router.push({path: '/statisticsindex/jigoupaiminniantonji'})">
          <span class="statisticsIndex_span3">机构排名年统计</span>
          <img class="statisticsindex_img" src="../../images/icon/mine-right-btn.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.statisticsindex_img{
  position: absolute;
  right:0;
  width: 8%;
  height: 60%;
}
.statisticsIndex_li1{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid rgba(102, 102, 102, 0.473);
  height: 100%;
}
.statisticsIndex_span3{
  font-size: 18px;
  font-weight: 600;
  color: rgba(102, 102, 102, 0.952);
}
.statisticsIndex_div3{
  padding: 0 18px;
  height: 89.5%;
}
.statisticsIndex_ul1 {
  height: 8%;
}
.statisticsIndex_div1 {
  width: 100%;
  height: 100%;
}
.statisticsIndex_div2 {
  height: 10.5%;
  border-bottom: 1.5px solid #666;
}
.statisticsIndex_p1 {
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}
.statisticsIndex_span1 {
  font-size: 20px;
  color: rgb(94, 90, 90);
  font-weight: 600;
}
</style>