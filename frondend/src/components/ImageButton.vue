<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    class="image-button-wrapper"
    :style="[{width: width + 'px', height: height + 'px'}]"
    @mousedown="toggle"
    @mouseup="toggle"
    @mouseleave="resetClick"
    @click="$emit('clicked')">
    <div
      class="image"
      :style="[getBGImage, getFilter]">
    </div>
    <div
      class="text-wrapper"
      :style="{'font-size': fontSize + 'em', color: color}">
      <div v-html="text" class="text">
      </div>
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import MixinMaterials from '@/mixins/materials.js'

export default {
  name: 'image-button',
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
    img: String,
    text: String,
    width: Number,
    height: Number,
    fontSize: Number,
    color: String,
    hasImage: {
      type: Boolean,
      default: true
    },
    bgColor: String,
    customElev: Number
  },
  created () {
    // set a custom elevation
    if (this.customElev !== undefined) {
      this.elev = this.customElev
      this.usualElev = this.customElev
    }
  },
  computed: {
    // change effect when it's clicked
    getFilter () {
      if (this.isActive) {
        return {'filter': 'grayscale(100%) brightness(30%) opacity(60%)'}
      } else {
        return {'filter': 'grayscale(100%) brightness(30%) opacity(100%)'}
      }
    },
    getBGImage () {
      if (this.hasImage) {
        return {
          'background-image': 'url(' + this.img + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center'
        }
      } else {
        return {
          'background-color': this.bgColor
        }
      }
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
.image-button-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 10px;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.text-wrapper {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.text {
  padding: 10px;
}
</style>
