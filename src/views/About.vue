<template>
  <div id="About">
    <v-nav/>
    <div class="header">
      <img src="../assets/img/about_header_bg@2x.png" alt="case cover">
      <div class="layout-1200grid">
        <h1>关于我们</h1>
        <h2>ABOUT US</h2>
      </div>
    </div>
    <!-- position -->
    <div class="layout-1200grid breadcrumb">
      <ul>
        <li>首页</li>
        <li><img src="../assets/img/breadcrumb_arrow@2x.png"></li>
        <li>关于我们</li>
      </ul>
    </div>
    <!-- article title -->
    <div class="home-header-title">
      <div class="title-line"></div>
      <h2 v-html="about.header_title"></h2>
      <h3>{{ about.header_title_en }}</h3>
    </div>
    <!-- article -->
    <div class="layout-1200grid about-article">
      <div>
        <p v-html="about.article"></p>
        <img src="../assets/img/about_article_img@2x.png" alt="about article img">
      </div>
    </div>
    <!-- contact -->
    <div class="home-header-title about-contact">
      <h2 v-html="about.header_title"></h2>
      <h3>{{ about.header_title_en }}</h3>
      <ul class="flex-layout contact-flex">
        <li class="item" v-for="(item, index) in contact.info" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="contact-end">*更多详情敬请关注公司微信公众号</div>
    </div>
    <v-copyright/>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Copyright from '../components/Copyright'
export default {
  name: 'About',
  data () {
    return {
      about: {
        header_title: '关于我们',
        header_title_en: 'About Hanwen',
        article: '云南瀚文科技有限公司，国家高新技术企业，云南省科技型中小企业，党政信息化建设技术服务提供商。多年互联网及软件研发行业经验，创新、专业的研发力量，致力于探索贴合各级党委组织部业务信息化的方法、技术、产品和服务体系，提供组织工作对信息化需求应用的综合解决方案及技术服务，推进党政信息化建设应用的可感知能力和AI智慧化水平。<br>公司以规范、标准、高效、便捷、安全为出发点，软件研发为基础，大数据采集分析为核心，智能化应用为长远规划，为各级党政、组织部门提供专业化、多平台软硬件技术服务、互联网应用和大数据应用融合服务，通过信息化管理、协作、统计、分析的智能化，上下游间高效协同，以信息技术促进党政智慧化的可持续建设。'
      },
      contact: {
        header_title: '联系我们',
        header_title_en: 'Contact',
        info: [
          '公司地址：云南省·昆明市·五华区二环西路220号云南软件园B座601',
          '联系电话：0871-68247886',
          '电子邮件：546958320@qq.com',
          '合作联系：王先生  135 2934 4095'
        ]
      }
    }
  },
  components: {
    'v-nav': Nav,
    'v-copyright': Copyright
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors";
@import "../assets/css/case_and_about";
/* normal */
#About {
  position: relative;
}
/* custom */
.about-article {
  width: 890px;
  margin: -25px auto 0;
  div {
    font-size: 1.8rem;
    line-height: 2;
    p {
      color: $Dark;
    }
    img {
      margin: 20px 0;
      width: 100%;
    }
  }
}
.about-contact {
  width: 890px;
  margin: 30px auto;
  .contact-flex {
    padding: 40px 0 0;
    flex-wrap: wrap;
    .item {
      margin: 10px 20px;
      font-size: 1.8rem;
      color: $Dark;
    }
  }
  .contact-end {
    padding: 20px;
    font-size: 1.8rem;
    color: $Red;
  }
}
</style>
