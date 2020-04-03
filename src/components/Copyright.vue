<template>
    <div id="Copyright">
      <div class="copy-header">
        <div class="layout-1200grid">
          <div class="cp-header header-tel">
            <img src="../assets/img/copy_header_tel@2x.png" alt="tel">
            <div>咨询电话</div>
            <h2>0871-68247886</h2>
          </div>
          <div class="cp-header header-add">
            <img src="../assets/img/copy_header_add@2x.png" alt="add">
            <div>中国·云南省昆明市·二环西路220号 云南软件园B座601</div>
          </div>
        </div>
      </div>
      <div class="copy-container">
        <div class="layout-1200grid">
          <ul class="copy-map" v-for="(item, index) in copy_nav" :key="index">
            <h3><router-link :to="item.title_link">{{ item.title }}</router-link></h3>
            <li v-for="(tt, i) in item.nav" :key="i"><router-link :to="tt.lk">{{ tt.tt }}</router-link></li>
          </ul>
          <div class="copy-end">
            <img src="../assets/img/copy_logo@2x.png" alt="copy logo">
            <p>Copyright © 2020 HANWEN TECH 版权所有<br>滇ICP备200022110号-1</p>
          </div>
          <div class="code code-wechat">
            <img src="../assets/img/2code_wechat@2x.png" alt="code">
            <p>扫一扫关注微信公众号</p>
          </div>
          <div class="code code-contact">
            <img src="../assets/img/2code@2x.png" alt="code">
            <p>扫一扫联系我们</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
/*
Copyright component
used for those views: Home / About / Case / 404
*/
export default {
  name: 'Copyright',
  data () {
    return {
      copy_nav: [
        {
          title: '首页',
          title_link: '/',
          nav: []
        },
        {
          title: '解决方案',
          title_link: '/',
          nav: [
            {
              tt: '组织部人事',
              lk: '/'
            },
            {
              tt: '大型企业人事',
              lk: '/'
            }
          ]
        },
        {
          title: '产品服务',
          title_link: '/',
          nav: [
            {
              tt: '组织人事管理系统',
              lk: '/'
            },
            {
              tt: '移动应用端',
              lk: '/'
            }
          ]
        },
        {
          title: '案例',
          title_link: '/',
          nav: [
            {
              tt: '实战开发',
              lk: '/'
            }
          ]
        },
        {
          title: '关于我们',
          title_link: '/',
          nav: [
            {
              tt: '合作伙伴',
              lk: '/'
            },
            {
              tt: '业务洽谈',
              lk: '/'
            }
          ]
        },
        {
          title: '精英团队',
          title_link: '/',
          nav: [
            {
              tt: '人力资源',
              lk: '/'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#Copyright {
  width: auto;
  padding-top: 80px;
}
.layout-1200grid {
  position: relative;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.copy-header {
  width: auto;
  height: 94px;
  background: hsla(0, 0%, 29%, 1);
  .cp-header {
    img {
      position: relative;
      top: 3px;
      display: inline-block;
      height: 18px;
      width: auto;
    }
    div,
    h2 {
      display: inline-block;
      margin: 0;
      padding: 0;
      color: white;
    }
    div {
      font-size: 1.4rem;
      padding: 0 10px;
    }
    h2 {
      position: absolute;
      width: 400px;
      top: -10px;
      font-size: 3.2rem;
    }
  }
  .header-tel,
  .header-add {
    position: absolute;
    bottom: 30px;
    left: 0;
  }
  .header-add {
    left: auto;
    right: 0;
  }
}
.copy-container {
  width: auto;
  background: hsla(0, 0%, 0%, 1);
  .copy-map {
    display: inline-block;
    vertical-align: top;
    margin: 30px 50px 15px 0;
    a:link,
    a:visited,
    a:hover {
      color: white;
      text-decoration: none;
    }
    h3 {
      font-size: 1.4rem;
      padding: 0 0 20px;
    }
    li {
      height: 20px;
      padding: 0 0 6px;
      font-size: 1.2rem;
      line-height: 20px;
    }
  }
  .copy-end {
    position: relative;
    width: 650px;
    border-top: 1px solid hsla(0, 0%, 44%, 1);
    img {
      height: 40px;
      padding: 15px 0 30px;
    }
    p {
      position: absolute;
      top: 20px;
      left: 170px;
      color: white;
      line-height: 1.6;
    }
  }
  .code {
    position: absolute;
    bottom: 30px;
    img {
      width: 100px;
      height: 100px;
      border: 12px solid white;
    }
    p {
      width: auto;
      padding: 10px 0 0;
      font-size: 1.2rem;
      text-align: center;
      color: white;
    }
  }
  .code-contact {
    right: 0;
  }
  .code-wechat {
    right: 180px;
  }
}
</style>
