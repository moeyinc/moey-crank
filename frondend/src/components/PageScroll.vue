<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <content-header
      :height="10"
      :bg-color="'#00aceb'"
      :color="'#ffffff'"
      :font-size="3"
      :has-back-button="true"
      :button-bg-color="'#00aceb'"
      :button-bg-color-active="'#0CF6B5'"
      :button-text-color="'#ffffff'"
      :button-text-color-active="'#ffffff'"
      @back-button-clicked="jumpTo('home')"
      >
      <h1 slot="content-title">Page Scroll</h1>
    </content-header>
    <main id="main" @scroll.prevent="">
      <img src="static/images/pageScroll/space.jpg" />
    </main>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'
import smoothScrollTo from '@/assets/js/scroll'

export default {
  name: 'page-scroll',
  data () {
    return {
      yPos: 0
    }
  },
  components: {
    ContentHeader
  },
  created () {
    this.addEventListenerForSocket()
  },
  watch: {
    yPos (newVal) {
      console.log('watching yPos', newVal)
      let main = document.getElementById('main')
      smoothScrollTo(main, newVal, 200).then(() => {
        console.log('succcess')
      }).catch((e) => {
        console.log('error detected', e)
      })
    }
  },
  methods: {
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        this.yPos += 100
      })
      this.$bus.$on('rotate-backward', ($event) => {
        this.yPos -= 100
        if (this.yPos < 0) {
          this.yPos = 0
        }
      })
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.page-wrapper {
  position: fixed;
  width: 100%;
  top: 10%;
  height: 90%;
}

main {
  overflow-y: scroll;
  height: 100%;
}

main img {
  width: 100%;
}
</style>
