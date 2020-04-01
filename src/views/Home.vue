<template>
    <div id="Home">
      <v-nav/>
      <v-cover/>
      <div class="home-1200grid home-core-info">
        <img class="core-title-icon" src="../assets/img/home_core_info_icon_q@2x.png" alt="core info">
        <div class="core-line">{{ home_core_line }}</div>
        <div class="core-paragraph">
          <img class="core-paragraph-icon" src="../assets/img/home_core_info_icon_gra@2x.png" alt="core paragraph icon">
          <p v-html="home_core_intro"></p>
        </div>
      </div>
      <!-- 4strict -->
      <div class="home-1200grid home-4strict">
        <div class="home-header-title">
          <div class="title-line"></div>
          <h2 v-html="home_strict.header_title"></h2>
          <h3>{{ home_strict.header_title_en }}</h3>
        </div>
        <div class="strict-flex flex-layout">
          <div class="item" v-for="(item, index) in home_strict.strict_4" :key="index">
            <img :src="item.img" alt="strict 1">
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </div>
        </div>
        <div class="strict-summary">
          <h2 v-html="home_strict.strict_summary.summary_title"></h2>
          <ul>
            <li v-for="(item, index) in home_strict.strict_summary.summary_point" :key="index">
              <img :src="item.icon" alt="">
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- all in one -->
      <div class="home-1200grid home-allin1">
        <div class="home-header-title">
          <div class="title-line"></div>
          <h2 v-html="home_all_in_1.header_title"></h2>
          <h3>{{ home_all_in_1.header_title_en }}</h3>
        </div>
        <div class="allin1-flex flex-layout">
          <div class="item" v-for="(item, index) in home_all_in_1.all_in_1" :key="index">
            <img :src="item.icon" alt="all in one icon">
            <h3>{{ item.title }}</h3>
            <p v-html="item.detail"></p>
          </div>
        </div>
      </div>
      <!-- services -->
      <div class="home-full-grid home-services">
        <div class="home-1200grid">
          <h2 v-html="home_services.service_script"></h2>
          <h3 v-html="home_services.service_title"></h3>
          <ul>
            <li v-for="(item, index) in home_services.service_point" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
      <!-- screen -->
      <div class="home-1200grid home-screen">
        <div class="home-header-title">
          <div class="title-line"></div>
          <h2 v-html="home_screen.header_title"></h2>
          <h3>{{ home_screen.header_title_en }}</h3>
        </div>
        <div class="flex-layout screen-flex">
          <div class="item" v-for="(item, index) in home_screen.screen_point" :key="index" v-html="item"></div>
        </div>
      </div>
      <!-- solution -->
      <div class="home-full-grid home-solution">
        <div class="solution-bg"></div>
        <div class="home-1200grid">
          <h2>{{ home_solution.header_title }}</h2>
          <div class="solution-title-en">{{ home_solution.header_title_en }}</div>
          <p class="solution-intro" v-html="home_solution.header_intro"></p>
          <div class="flex-layout solution-flex">
            <div class="item" v-for="(item, index) in home_solution.solution_point" :key="index">
              <img :src="item.icon" alt="icon">
              <h3 v-html="item.title"></h3>
              <h4 v-html="item.sub_title"></h4>
              <p v-html="item.detail"></p>
              <ul>
                <li v-for="(li, i) in item.list" :key="i" v-html="li"></li>
                <div>...</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <v-copyright/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Cover from '../components/Cover.vue'
import Copyright from '../components/Copyright.vue'

export default {
  name: 'Home',
  data () {
    return {
      home_core_line: '我们坚信，将大量碎片化数据信息组织起来，遵循规范和标准，通过算法重组，就能掌握人事工作的核心方法。',
      home_core_intro: '瀚文科技<span style="font-weight: bold; color: hsla(0, 0%, 20%, 1);">「组织部核心信息管理平台」</span>以人事数据为核心，通过对大量动态化碎片化信息的采集、管理和分析，实现人事管理的科学化、高效化；以《全国组织干部人事管理信息系统信息结构体系》为标准和规范，结合SM2标准算法加密权限，高规范性、高安全性进行人事管理工作，为组织部精选人才提供决策支持。多终端应用，协作、管理更便捷。',
      home_strict: {
        header_title: '贯彻新时代党组织路线，<span style="font-weight: bold; color: hsla(360, 100%, 41%, 1);">4个「从严」</span>的渐进式产品观',
        header_title_en: 'Product Views',
        strict_4: [
          {
            img: 'case_img/home_4strict_1@2x.png',
            title: '信息融合建设从严',
            detail: '建设与全国公务员管理系统双向互联互通的信息基础，轻松建立组织部人事信息“全档案”。'
          },
          {
            img: 'case_img/home_4strict_2@2x.png',
            title: '干部信息从严',
            detail: '画好干部“全身像”，为干部决策工作从“经验主导决策”向“数据驱动决策”转变奠定基础。'
          },
          {
            img: 'case_img/home_4strict_3@2x.png',
            title: '干部管理从严',
            detail: '点亮监督“预警灯”，从严把好选人用人的“群众关，廉洁关、程序关、纪律关、任职关”。'
          },
          {
            img: 'case_img/home_4strict_4@2x.png',
            title: '统计分析从严',
            detail: '为干部提拔、班子调配等方面提供规范、高效、准确、科学的信息服务和决策支持。'
          }
        ],
        strict_summary: {
          summary_title: '<span style="font-weight: bold; color: white;">响应《国家“十三五”时期文化发展改革规划纲要》</span>利用信息化手段支持干部管理工作\n' +
            '满足各地组织工作的特色要求',
          summary_point: [
            {
              icon: 'case_img/home_strict_summary_icon_1.png',
              title: '简化IT支持',
              detail: '灵活部署，自助式数据处理'
            },
            {
              icon: 'case_img/home_strict_summary_icon_2.png',
              title: '消除数据孤岛',
              detail: '兼容各种数据源种类，易扩展'
            },
            {
              icon: 'case_img/home_strict_summary_icon_3.png',
              title: '提高决策效率',
              detail: '信息高效分享协作，数据按需整合'
            },
            {
              icon: 'case_img/home_strict_summary_icon_4.png',
              title: '多维度立体分析',
              detail: '多维度对数据进行分析统计'
            },
            {
              icon: 'case_img/home_strict_summary_icon_5.png',
              title: '专业技术服务',
              detail: '专注于党政信息化、组织部信息建设'
            }
          ]
        }
      },
      home_all_in_1: {
        header_title: '一体化组织人事核心数据管理体系',
        header_title_en: 'Core Data All In One',
        all_in_1: [
          {
            icon: 'case_img/home_all_in_1_1.png',
            title: '标准化高规范',
            detail: '以国家干部组织人事管理体系为标准<br>人事数据信息高规范化'
          },
          {
            icon: 'case_img/home_all_in_1_2.png',
            title: 'SM2标准高安全性',
            detail: 'SM2加密验证+本地网络措施<br>数据安全高保障'
          },
          {
            icon: 'case_img/home_all_in_1_3.png',
            title: '防信息泄露风险',
            detail: '多级权限细分，可控令牌验证<br>核心数据、信息、文件防泄漏'
          },
          {
            icon: 'case_img/home_all_in_1_4.png',
            title: '高效办公协作',
            detail: '数据可按需组织管理及分发<br>协同工作更高效'
          },
          {
            icon: 'case_img/home_all_in_1_5.png',
            title: '高可用性',
            detail: '组织人事工作实战应用开发经验积累<br>紧密贴合实际工作需要，稳抓核心'
          },
          {
            icon: 'case_img/home_all_in_1_6.png',
            title: '高稳定性',
            detail: '智能系统资源回收及数据备份机制<br>保障系统稳定运行及数据安全'
          },
          {
            icon: 'case_img/home_all_in_1_7.png',
            title: '智能化前瞻性',
            detail: '大数据+智能化分析、统计<br>提供研判、决策的前瞻性'
          },
          {
            icon: 'case_img/home_all_in_1_8.png',
            title: '多终端支持',
            detail: '提供移动互联网终端支持<br>移动办公更灵活、更便捷'
          }
        ]
      },
      home_services: {
        service_script: '“系统部署上线使用，<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只是我们服务开始的第一步”',
        service_title: '为何选择我们&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 2rem; color: white;">WHY US</span>',
        service_point: [
          '多年组织部驻场开发，深刻了解组织人事的业务模式及流程，实战中不断改进和完善系统，真正贴合需求',
          '年轻创新的团队 + 资深北大教授，严把技术关，既不断追求技术革新和交互体验，又不失稳定和健壮性。',
          '技术 + 服务模式，提供优质的应用系统，专业团队服务跟进，逐步落实业务到软件，真正让软件为工作服务，能感受到的高效，能看到的优化成本。'
        ]
      },
      home_screen: {
        header_title: '<span style="font-weight: bold; color: hsla(360, 100%, 41%, 1);">6个「转变」</span>助力组织人事工作科学发展',
        header_title_en: 'Scientific Development Views',
        screen_point: [
          '组织人事信息管理纸质化<span style="padding: 0 8px; font-weight: bold; color: hsla(360, 100%, 41%, 1);">转变</span>数字化',
          '碎片化信息<span style="padding: 0 8px; font-weight: bold; color: hsla(360, 100%, 41%, 1);">转变</span>全方位立体化信息',
          '不可控信息传递<span style="padding: 0 8px; font-weight: bold; color: hsla(360, 100%, 41%, 1);">转变</span>可控防泄漏传递',
          '手工制表整合信息<span style="padding: 0 8px; font-weight: bold; color: hsla(360, 100%, 41%, 1);">转变</span>智能化自定义整合',
          '经验研判和决策<span style="padding: 0 8px; font-weight: bold; color: hsla(360, 100%, 41%, 1);">转变</span>数据驱动研判和决策',
          '耗时耗材统计分析<span style="padding: 0 8px; font-weight: bold; color: hsla(360, 100%, 41%, 1);">转变</span>移动数据快捷办公'
        ]
      },
      home_solution: {
        header_title: '解决方案',
        header_title_en: 'Solution',
        header_intro: '专为组织人事工作设计，满足各地组织工作的特色要求，<br>旨在提供与各地组织工作特色相要求的，与业务结合更紧密的干部大数据解决方案',
        solution_point: [
          {
            icon: 'case_img/home_solution_icon_1.png',
            title: '干部信息管理模块',
            sub_title: 'Data Core<br>数据核心',
            detail: '根据现有机构编制建立、设置组织机构信息，并添加编制信息，通过各种数据源添加干部信息，形成数据管理的核心。',
            list: [
              '基础数据库',
              '组织架构数据',
              '人事/干部数据'
            ]
          },
          {
            icon: 'case_img/home_solution_icon_2.png',
            title: '组工业务支撑模块',
            sub_title: 'App collaboration<br>应用协作',
            detail: '通过word，excel，Lrmx、公务员数据库格式等多数据模板，将核心信息导入系统存档维护，导出供领导研判和决策使用。',
            list: [
              '名册管理',
              '文档管理',
              '多终端交互'
            ]
          },
          {
            icon: 'case_img/home_solution_icon_3.png',
            title: '任免流程管理',
            sub_title: 'Advanced<br>高级应用',
            detail: '涵盖任免、提拔、抽借调、离退等干部选拔任用中的全流程化管理。数据信息相互隔离，零风险，零泄漏，为研判与决策提供了坚实的基础与保障。',
            list: [
              '任免管理',
              '用人管理',
              '定制化业务流程管理'
            ]
          },
          {
            icon: 'case_img/home_solution_icon_4.png',
            title: '分析研判决策',
            sub_title: 'Leadership decision<br>领导决策',
            detail: '基于干部基本信息对干部及队伍进行预警提示、对干部进行标签标注，实现班子成员、干部队伍多维度分析研判，为领导在日常工作中提供强有力的决策支撑。',
            list: [
              '分析研判',
              '信息预警',
              '决策支撑'
            ]
          }
        ]
      }
    }
  },
  components: {
    'v-nav': Nav,
    'v-cover': Cover,
    'v-copyright': Copyright
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors";

.home-1200grid {
  position: relative;
  width: 1200px;
  margin: 35px auto;
}

.home-core-info {
  .core-title-icon {
    display: block;
    width: 40px;
    height: auto;
    margin: 0 auto;
  }
  .core-line {
    width: auto;
    margin: 30px auto;
    text-align: center;
    font-size: 2rem;
    color: $Dark;
  }
  .core-paragraph {
    position: relative;
    width: 826px;
    margin: 30px auto;
    font-size: 1.8rem;
    color: $Dark;
    line-height: 24px;
    text-align: justify;

    .core-paragraph-icon {
      position: absolute;
      top: 20px;
      left: 0;
      width: 53px;
      height: auto;
    }
    p {
      margin: 0 0 0 90px;
      color: $Dark;
    }
  }
}

.home-header-title {
  position: relative;
  width: auto;
  margin: 60px auto ;
  .title-line {
    width: 100px;
    height: 2px;
    margin: 0 auto;
    background: $Red;
  }
  h2,
  h3 {
    width: auto;
    text-align: center;
    font-weight: normal;
    line-height: 1;
    color: $Dark;
  }
  h2 {
    margin: 40px auto 20px;
    font-size: 3.4rem;
  }
  h3 {
    margin: 0 auto;
    font-size: 2.1rem;
  }
}

.flex-layout {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  .item {
    flex: 0 1 auto;
    align-self: auto;
    img {
      height: auto;
    }
    h3 {
      width: auto;
      line-height: 1;
      font-weight: normal;
      color: $Dark;
    }
    p {
      width: auto;
      color: $Dark;
    }
  }
}

.strict-flex {
  .item {
    width: 270px;
    img {
      width: 270px;
    }
    h3 {
      margin: 15px auto;
      text-align: center;
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
}

.allin1-flex {
  flex-flow: row wrap;
  .item {
    width: 270px;
    margin-bottom: 40px;
    img {
      display: block;
      width: auto;
      height: 56px;
      margin: 0 auto;
    }
    h3 {
      margin: 20px auto 15px;
      text-align: center;
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 1.3;
      text-align: center;
    }
  }
}

.strict-summary {
  position: relative;
  width: auto;
  height: 510px;
  margin: 60px auto 0;
  background: url("../assets/img/home_strict_summary@2x.png") no-repeat;
  background-size: 100%;
  h2 {
    position: relative;
    width: 910px;
    top: 70px;
    margin: 0 auto;
    text-align: center;
    color: white;
    font-size: 2.4rem;
    font-weight: normal;
    line-height: 1.2;
  }
  ul {
    position: relative;
    top: 110px;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    li {
      position: relative;
      width: 300px;
      margin: 40px auto;
      flex: 0 1 auto;
      align-self: auto;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 68px;
        height: 68px;
      }
      h3,
      p {
        margin-left: 88px;
        color: white;
      }
      h3 {
        font-size: 2rem;
        font-weight: normal;
      }
      p {
        font-size: 1.6rem;
      }
    }
  }
}

.home-full-grid {
  position: relative;
  width: auto;
}

.home-services {
  height: 590px;
  background-color: $Blue;
  background-image: url("../assets/img/home_services_bg.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: top left;
  > .home-1200grid {
    height: 590px;
  }
  h2 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-size: 2.4rem;
    font-weight: normal;
    color: white;
  }
  h3 {
    position: absolute;
    top: 100px;
    left: 680px;
    font-size: 3.2rem;
    font-weight: normal;
    color: white;
  }
  ul {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
    width: 560px;
    li {
      background: url("../assets/img/home_services_point_arrow.png") no-repeat 0px 40px;
      background-size: 6px auto;
      display: block;
      font-size: 1.8rem;
      color: white;
      padding: 25px 0 25px 40px;
    }
  }
}

.screen-flex {
  flex-flow: row wrap;
  .item {
    width: 386px;
    height: 76px;
    margin: 0 0 25px;
    line-height: 76px;
    white-space: nowrap;
    font-size: 1.8rem;
    color: $Dark;
    text-align: center;
    border: 1px solid hsla(0, 0%, 50%, 1);
    border-radius: 15px;
  }
}

.home-solution {
  height: 760px;
  .solution-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 600px;
    background: url("../assets/img/home_solution_bg@2x.png") no-repeat top center;
    background-size: cover;
  }
  h2,
  .solution-title-en,
  .solution-intro {
    position: relative;
    text-align: center;
    line-height: 1;
    color: white;
    z-index: 2;
  }
  h2 {
    padding: 50px 0 0;
    font-size: 3.4rem;
    font-weight: bold;
  }
  .solution-title-en {
    margin: 20px 0;
    font-size: 1.8rem;
  }
  .solution-intro {
    margin: 5px 0;
    font-size: 1.8rem;
    line-height: 1.5;
  }
}
.solution-flex {
  position: relative;
  margin: 50px 0 0;
  z-index: 2;
  .item {
    position: relative;
    width: 280px;
    height: 480px;
    background: white;
    box-shadow: 0 0 12px hsla(0, 100%, 0%, .3);
    border-radius: 10px;
    img {
      display: block;
      width: auto;
      height: 45px;
      margin: 30px auto 0;
    }
    h3 {
      padding: 12px 0;
      font-weight: bold;
      font-size: 2.4rem;
      color: $Dark;
      text-align: center;
    }
    h4 {
      padding: 0;
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 1.1;
      text-align: center;
    }
    p {
      width: 220px;
      margin: 0 auto;
      padding: 20px 0 0;
      font-size: 1.6rem;
      text-align: justify;
    }
    ul {
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 20px;
      padding: 20px 0 0;
      border-top: 1px solid #ccc;
      line-height: 2;
      li,
      div {
        margin: 0 20px;
        padding: 0 0 0 15px;
        font-size: 1.4rem;
        color: $Dark;
      }
      li {
        background: url("../assets/img/home_solution_list_arrow@2x.png") no-repeat 0 8px;
        background-size: 5px 10px;
      }
    }
  }
}
</style>
