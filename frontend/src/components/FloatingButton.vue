<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    class="floating-button-wrapper"
    :style="[getBGColor, {width: width + 'px', height: height + 'px', top: top, left: left, bottom: bottom, right: right}]"
    @mousedown="toggle"
    @mouseup="toggle"
    @mouseleave="resetClick"
    @click="$emit('clicked')">
    <div class="text-wrapper" :style="{'font-size': fontSize + 'em', 'line-height': height + 'px'}">
      <div v-html="text" class="text"></div>
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import MixinMaterials from '@/mixins/materials.js'

export default {
  name: 'floating-button',
  mixins: [MixinMaterials],
  data () {
    return {
      elev: 2,
      usualElev: 2,
      raisedElev: 16,
      isActive: false
    }
  },
  props: {
    width: Number,
    height: Number,
    top: {
      type: String,
      default: 'auto'
    },
    left: {
      type: String,
      default: 'auto'
    },
    bottom: {
      type: String,
      default: 'auto'
    },
    right: {
      type: String,
      default: 'auto'
    },
    text: String,
    fontSize: Number,
    bgColor: String,
    bgColorActive: String,
    color: String,
    colorActive: String,
    customElev: Number
  },
  created () {
    // set a custom elevation
    if (this.customElev !== undefined) {
      this.elev = this.customElev
      this.usualElev = this.customElev
    }
  },
  watch: {
    isActive (val) {
      if (val === true) {
        // active
        this.elev = this.raisedElev
      } else {
        // inactive
        this.elev = this.usualElev
      }
      // re-apply shadow
      this.applyShadow()
    }
  },
  computed: {
    // change color when it's clicked
    getBGColor () {
      if (this.isActive) {
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
.floating-button-wrapper {
  position: absolute;
  border-radius: 10px;
}

.text-wrapper {
  width: 100%;
  text-align: center;
}

.text {
}
</style>
