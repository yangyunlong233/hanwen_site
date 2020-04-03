<template>
    <div id="Case">
      <v-nav/>
      <div class="header case-header">
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
      <!-- article -->
      <div class="home-header-title">
        <div class="title-line"></div>
        <h2 v-html="trust.header_title"></h2>
        <h3>{{ trust.header_title_en }}</h3>
      </div>
      <div class="trust-intro" v-html="trust.text"></div>
      <div class="layout-1200grid case-point">
        <img src="../assets/img/case_article_img@2x.png" alt="article-img">
        <div class="point-list">
          <h3>{{ trust.point_title }}</h3>
          <p>{{ trust.point_subtitle }}</p>
          <ul class="flex-layout case-flex">
            <li class="item" v-for="(item, index) in trust.list" :key="index">{{ item }}</li>
            <li class="item last">...陆续增加接入中</li>
          </ul>
        </div>
        <!-- data -->
        <div class="layout-1200grid case-data">
          <ul class="flex-layout data-flex">
            <li class="item" v-for="(item, index) in data" :key="index">
              <h3>{{ item.title }}</h3>
              <p>{{ item.data_in }}</p>
            </li>
          </ul>
        </div>
      </div>
      <v-copyright/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Copyright from '../components/Copyright.vue'

export default {
  name: 'Case',
  data () {
    return {
      trust: {
        header_title: '他们，信赖<span style="color: hsla(360, 100%, 40%, 1); font-weight: bold;">瀚文</span>',
        header_title_en: 'They all trust Hanwen',
        text: '瀚文科技的价值观是获得我们服务对象信任的根本。客户的信任让我们的路走的更远更稳。<br>为客户提供专业科技解决方案以及技术服务，与客户共同创新让瀚文科技的服务迅速遍及云南各地。',
        point_title: '云南省接入服务区域',
        point_subtitle: '*受保密协议及服务特殊性原因，恕不能公开具体业务细节',
        list: [
          '腾冲市',
          '昭通市',
          '安宁市',
          '保山市',
          '昆明市',
          '大理市',
          '楚雄市'
        ]
      },
      data: [
        {
          title: '总服务人事信息数据量',
          data_in: '101.3GB'
        },
        {
          title: '重点合作单位',
          data_in: '10家'
        },
        {
          title: '总体用户满意度',
          data_in: '98%'
        }
      ]
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
#Case {
  position: relative;
}
.case-header {
  background-image: url("../assets/img/case_header_bg@2x.png");
}
/* custom */
.trust-intro {
  width: auto;
  margin: -20px auto 0;
  font-size: 1.8rem;
  text-align: center;
  color: $Dark;
}
.case-point {
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 660px;
    height: 495px;
    z-index: 1;
  }
  .point-list {
    position: relative;
    padding: 110px 0 0 660px;
    z-index: 2;
    h3 {
      font-size: 1.8rem;
      font-weight: normal;
      color: $Dark;
    }
    p {
      padding: 0 0 25px 0;
      font-size: 1.2rem;
      color: $Red;
    }
  }
}
.case-flex {
  width: 400px;
  flex-wrap: wrap;
  .item {
    width: 104px;
    padding: 10px 0;
    margin: 15px 0;
    background: $Blue;
    font-size: 1.8rem;
    text-align: center;
    color: white;
  }
  .last {
    flex-basis: 252px;
    background: hsla(104, 73%, 42%, 1);
  }
}
.case-data {
  position: relative;
  padding: 100px 0 20px;
  z-index: 2;
  .data-flex {
    justify-content: center;
    .item {
      padding: 0 80px;
      border-right: 1px solid #ccc;
      h3 {
        padding: 0 0 15px;
        font-size: 1.8rem;
        font-weight: normal;
        text-align: center;
        color: $Dark;
      }
      p {
        font-family: 'SC-ExLight';
        font-size: 3.6rem;
        font-weight: normal;
        text-align: center;
        color: $Red;
      }
    }
    .item:last-of-type {
      border: none;
    }
  }
}
</style>
