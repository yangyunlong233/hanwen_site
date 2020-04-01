<template>
    <div id="Cover">
      <div class="cover-layout">
        <transition-group tag="ol" name="covers" class="cover-container">
          <li v-for="(items, index) in covers" :key="index" v-show="index===num">
            <div class="cover-container-title">
              <img id="cover_tt_img" :src="items.tt"  :alt="`Cover ${index} Title`">
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
export default {
  name: 'Cover',
  data () {
    return {
      covers: [
        {
          tt: 'case_img/cover_1_tt.png',
          bg: 'case_img/cover_1_bg.png'
        },
        {
          tt: 'case_img/cover_2_tt.png',
          bg: 'case_img/cover_2_bg.png'
        },
        {
          tt: 'case_img/cover_3_tt.png',
          bg: 'case_img/cover_3_bg.png'
        }
      ],
      num: 0,
      time: '',
      second: 7000
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
