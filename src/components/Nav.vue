<template>
  <div name="nav" id="Nav">
    <transition name="nav">
      <div class="full-nav" v-show="over_size > 80"></div>
    </transition>
    <div class="nav-layout">
      <div class="nav-logo"><img src="../assets/img/nav_logo@2x.png" alt="HanWen Tech. Logo"></div>
      <ul>
        <li v-for="(item, index) in nav_list" :key="index">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
        <li><router-link to="/demo" class="get-demo">获取演示</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
/*
  Navigation component
  used for those views: Home / About / Case / 404
 */
export default {
  data () {
    return {
      over_size: 0,
      nav_list: [
        {
          title: '首页',
          link: '/'
        },
        {
          title: '服务案例',
          link: '/case'
        },
        {
          title: '关于我们',
          link: '/about'
        },
        {
          title: '精英团队',
          link: '/404'
        }
      ]
    }
  },
  mounted () {
    this.over_size_handle()
  },
  methods: {
    over_size_handle () {
      window.addEventListener('scroll', () => {
        this.over_size = document.documentElement.scrollTop
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors";
#Nav {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  color: $White;
  /*background: rgba(0,0,0,.5);*/
  z-index: 999;
  .nav-layout {
    width: 1200px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -600px;
  }
  .nav-logo {
    width: 159px;
    height: 43px;
    position: absolute;
    top: 15px;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    width: auto;
    height: 80px;
    line-height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    li {
      height: 80px;
      line-height: 80px;
      display: inline-block;
      margin: 0 18px;
      color: $White;
    }
    a:link,
    a:visited {
      position: relative;
      color: $White;
      text-decoration: none;
    }
    a:hover {
      position: relative;
      color: $White;
      text-decoration: none;
    }
    a:hover:before {
      content: '';
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 2px;
      background: $Blue;
    }
    .get-demo:link,
    .get-demo:visited,
    .get-demo:hover {
      padding: 5px 15px;
      background: $Blue;
      border-radius: 30px;
    }
    .get-demo:hover:before {
      content: '';
      bottom: 0;
      background: none;
    }
  }
}

.full-nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsla(219, 89%, 22%, .9);
}

.nav-enter-active,
.nav-leave-active {
  transition: opacity .5s;
}
.nav-enter,
.nav-leave-to {
  opacity: 0;
}
.nav-enter-to,
.nav-leave {
  opacity: 1;
}
</style>
