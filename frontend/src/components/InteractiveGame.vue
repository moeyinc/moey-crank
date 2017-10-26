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
      <h1 slot="content-title">Mutoscope</h1>
    </content-header>
    <main>
      Under development
    </main>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'

export default {
  name: 'interactive-game',
  components: {
    ContentHeader
  },
  created () {
    this.addEventListenerForSocket()
  },
  methods: {
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        console.log('rotate forward')
      })
      this.$bus.$on('rotate-backward', ($event) => {
        console.log('rotate backward')
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
</style>
