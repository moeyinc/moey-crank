<!-- =================================================
 Vue Template
================================================== -->
<template>
  <header id="content-header-wrapper" :style="getWrapperStyle">
    <back-button
      v-if="hasBackButton"
      class="v-middle back-button"
      :text="'Back'"
      :bg-color="buttonBgColor"
      :bg-color-active="buttonBgColorActive"
      :color="buttonTextColor"
      :color-active="buttonTextColorActive"
      @clicked="$emit('back-button-clicked')"
    />
    <div class="v-middle">
      <div class="h-center">
        <slot name="content-title"></slot>
      </div>
    </div>
  </header>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import MixinMaterials from '@/mixins/materials.js'
import BackButton from '@/components/BackButton'

export default {
  name: 'content-header',
  mixins: [MixinMaterials],
  data () {
    return {
      elev: 4
    }
  },
  props: {
    height: Number,
    bgColor: String,
    color: String,
    fontSize: Number,
    hasBackButton: {
      type: Boolean,
      default: false
    },
    buttonBgColor: String,
    buttonBgColorActive: String,
    buttonTextColor: String,
    buttonTextColorActive: String
  },
  components: {
    BackButton
  },
  computed: {
    getWrapperStyle () {
      return {
        'height': this.height + '%',
        'background-color': this.bgColor,
        'color': this.color,
        'font-size': this.fontSize + 'em'
      }
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
#content-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-weight: bold;
}

.v-middle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.h-center {
  text-align: center;
}

.back-button {
  /*margin-left: 15px;*/
}
</style>
