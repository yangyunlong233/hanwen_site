<template>
    <div id="Case">
      <v-nav/>
      <div class="header">
        <img src="../assets/img/case_header_cover@2x.png" alt="case cover">
        <div class="layout-1200grid">
          <h1>服务案例</h1>
          <h2>SERVICES CASES</h2>
        </div>
      </div>
      <!-- position -->
      <div class="layout-1200grid breadcrumb">
        <ul>
          <li>首页</li>
          <li><img src="../assets/img/breadcrumb_arrow@2x.png"></li>
          <li>服务案例</li>
        </ul>
      </div>
      <v-copyright/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Copyright from '../components/Copyright.vue'

export default {
  name: 'Case',
  components: {
    'v-nav': Nav,
    'v-copyright': Copyright
  }
}
</script>

<style scoped lang="scss">
#Case {
  position: relative;
}
.layout-1200grid {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.header {
  width: auto;
  height: 425px;
  background-color: hsla(217, 73%, 29%, 1);
  background-image: url("../assets/img/case_header_bg@2x.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: top left;
  img {
    position: absolute;
    right: 0;
    top: 0;
    height: 425px;
  }
  h1,
  h2 {
    position: absolute;
    left: 0;
    font-weight: normal;
    color: white;
  }
  h1 {
    top: 218px;
    font-size: 3.6rem;
  }
  h2 {
    top: 166px;
    font-size: 5.2rem;
  }
}
.breadcrumb {
  ul {
    margin: 30px auto;
    li {
      display: inline-block;
      height: 16px;
      padding: 0 10px 0 0;
      line-height: 16px;
      vertical-align: middle;
      font-size: 1.6rem;
      img {
        display: inline-block;
        height: 16px;
        vertical-align: middle;
      }
    }
  }
}
</style>
