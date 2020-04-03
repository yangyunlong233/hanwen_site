<template>
    <div id="Cover">
      <div class="cover-layout">
        <transition-group tag="ol" name="covers" class="cover-container">
          <li v-for="(items, index) in covers" :key="index" v-show="index===num">
            <div class="cover-container-title">
              <img id="cover_tt_img" :src="items.tt"  :alt="`Cover ${index} Title`" @click="handleClick(items.link)">
            </div>
            <img id="cover_bg_img" class="cover-container-bg" :src="items.bg" :alt="`Cover ${index} Background`">
          </li>
        </transition-group>
        <ol class="cover-point">
          <li v-for="(items, index) in covers" :key="index" :class="{'current': index===num}" @click="change(index)">{{ index }}</li>
        </ol>
      </div>
    </div>
</template>

<script>
/*
  Cover Slide component
  used for those views: Home
  *** important:
  covers.link value is 2 way to param:
    1. give it a router url, like '/about',
    2. give it a window scroll height value, and mark it 'is an anchor number', like 'anchor400'
 */
export default {
  name: 'Cover',
  data () {
    return {
      covers: [
        {
          tt: 'case_img/cover_1_tt.png',
          bg: 'case_img/cover_1_bg.png',
          link: 'anchor510'
        },
        {
          tt: 'case_img/cover_2_tt.png',
          bg: 'case_img/cover_2_bg.png',
          link: 'anchor3100'
        },
        {
          tt: 'case_img/cover_3_tt.png',
          bg: 'case_img/cover_3_bg.png',
          link: '/about'
        }
      ],
      num: 0,
      time: '',
      second: 6000,
      anchor_top: 0,
      anchor_step: 0,
      scroll_time: ''
    }
  },
  mounted () {
    this.cover_play()
  },
  methods: {
    cover_play () {
      this.time = setInterval(() => {
        this.num++
        if (this.num === this.covers.length) this.num = 0
      }, this.second)
    },
    change (i) {
      this.num = i
      clearInterval(this.time)
      this.cover_play()
    },
    handleClick (link) {
      if (link.search('anchor') === -1) {
        this.$router.push(link)
      } else {
        this.anchor_top = parseInt(link.replace('anchor', ''))
        this.scroll_time = setInterval(() => {
          if (document.documentElement.scrollTop < (this.anchor_top - 5)) {
            this.anchor_step = Math.round((this.anchor_top - document.documentElement.scrollTop) / 6)
            window.scrollTo(0, (document.documentElement.scrollTop + this.anchor_step))
          } else {
            clearInterval(this.scroll_time)
            window.scrollTo(0, this.anchor_top)
            this.anchor_top = 0
            this.anchor_step = 0
          }
        }, 30)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors";

#Cover {
  position: relative;
  width: 100%;
  height: 588px;
  background-image: url("../assets/img/cover_bg@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;

  ol.cover-container {
    position: relative;
    width: 100%;
    height: 588px;
    li {
      .cover-container-title {
        position: absolute;
        top: 30%;
        left: 50%;
        width: 1200px;
        margin-left: -600px;
        z-index: 2;
        img {
          height: 250px;
        }
      }
      img.cover-container-bg {
        position: absolute;
        right: 0;
        height: 100%;
        z-index: 1;
      }
    }
  }

  ol.cover-point {
    position: absolute;
    left: 50%;
    margin-left: -300px;
    bottom: 20px;
    width: 600px;
    text-align: center;
    z-index: 3;
    li {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 5px;
      text-indent: -9999px;
      background: $White;
      border-radius: 100%;
      cursor: pointer;
    }
    li.current {
      background: $Blue;
    }
  }
}

.covers-enter-active,
.covers-leave-active {
  transition: opacity 1.5s;
}
.covers-enter,
.covers-leave-to {
  opacity: 0;
}
.covers-enter-to,
.covers-leave {
  opacity: 1;
}
</style>
