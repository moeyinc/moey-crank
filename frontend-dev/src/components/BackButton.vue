<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    class="back-button-wrapper"
    :style="getBGColor"
    @mousedown="toggle"
    @mouseup="toggle"
    @mouseleave="resetClick"
    @click="$emit('clicked')">
    <div class="text-wrapper">
      <div v-html="text" class="text"></div>
    </div>
    <arrow-left-thick-icon class="arrow-left-thick-icon" />
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ArrowLeftThickIcon from 'vue-material-design-icons/arrow-left-thick.vue'

export default {
  name: 'back-button',
  data () {
    return {
      isActive: false
    }
  },
  props: {
    text: String,
    bgColor: String,
    bgColorActive: String,
    color: String,
    colorActive: String
  },
  components: {
    ArrowLeftThickIcon
  },
  mounted () {
    // align svg vertically middle
    let arrow = document.getElementsByClassName('material-design-icon__svg')[0]
    arrow.style.position = 'absolute'
    arrow.style.top = '50%'
    arrow.style.transform = 'translateY(-50%)'
    let textLeftPos = document.getElementsByClassName('text')[0].offsetLeft
    arrow.style.left = textLeftPos - arrow.clientWidth - 10 + 'px'
  },
  computed: {
    // change color when it's clicked
    getBGColor () {
      if (this.isActive) {
        console.log('hey')
        return {
          'background-color': this.bgColorActive,
          'color': this.colorActive
        }
      } else {
        return {
          'background-color': this.bgColor,
          'color': this.color
        }
      }
    }
  },
  methods: {
    // switch the active value to change the background color
    toggle () {
      this.isActive = !this.isActive
    },
    // reset the active value when leaving your mouse
    resetClick () {
      this.isActive = false
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.back-button-wrapper {
  position: absolute;
  display: inline-block;
  width: 200px;
  height: 100%;
  z-index: 100;
}

.text-wrapper {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.text {
  display: inline-block;
  margin: 0.5em;
  font-size: 0.6em;
}

.arrow-left-thick-icon {
  position: absolute;
  fill: currentColor;
  height: 100%;
}
</style>
