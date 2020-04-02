<template>
    <div id="Demo">
      <v-nav/>
      <div class="notfound-cover">
        <img src="../assets/img/404_cover@2x.png" alt="404 cover">
        <div class="tt">正在建设中，请稍后访问</div>
        <div class="back-btn" @click="handleClick">返回</div>
      </div>
      <v-copyright/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Copyright from '../components/Copyright'
export default {
  name: 'Demo',
  components: {
    'v-nav': Nav,
    'v-copyright': Copyright
  },
  methods: {
    handleClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";
@import "../assets/css/case_and_about.scss";
#Demo {
  position: relative;
}
.notfound-cover {
  width: auto;
  margin: 0;
  img {
    width: 100%;
  }
  .tt {
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 4.2rem;
    color: white;
  }
  .back-btn {
    width: 150px;
    margin: 60px auto 0;
    padding: 20px;
    background: $Blue;
    font-size: 1.8rem;
    color: white;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
