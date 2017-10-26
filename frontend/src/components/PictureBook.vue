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
      <h1 slot="content-title">Picture Book</h1>
    </content-header>
    <div class="container">
      <div class="main clearfix">
        <div class="bb-custom-wrapper">
          <div id="bb-bookblock" class="bb-bookblock">
            <div class="bb-item">
              <img src="static/images/demo1/1.jpg" alt="image01"/>
            </div>
            <div class="bb-item">
              <img src="static/images/demo1/2.jpg" alt="image02"/>
            </div>
            <div class="bb-item">
              <img src="static/images/demo1/3.jpg" alt="image03"/>
            </div>
            <div class="bb-item">
              <img src="static/images/demo1/4.jpg" alt="image04"/>
            </div>
            <div class="bb-item">
              <img src="static/images/demo1/5.jpg" alt="image05"/>
            </div>
          </div>
          <nav>
            <a id="bb-nav-first" href="#" class="bb-custom-icon bb-custom-icon-first">First page</a>
            <a id="bb-nav-prev" href="#" class="bb-custom-icon bb-custom-icon-arrow-left">Previous</a>
            <a id="bb-nav-next" href="#" class="bb-custom-icon bb-custom-icon-arrow-right">Next</a>
            <a id="bb-nav-last" href="#" class="bb-custom-icon bb-custom-icon-last">Last page</a>
          </nav>
        </div>
      </div>
    </div><!-- /container -->
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'
import '@/../static/js/jquerypp.custom.js'
import '@/../static/js/jquery.bookblock.js'

export default {
  name: 'picture-book',
  components: {
    ContentHeader
  },
  created () {
    this.addEventListenerForSocket()
  },
  mounted () {
    this.initPage()
  },
  methods: {
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        $('#bb-bookblock').bookblock('next')
      })
      this.$bus.$on('rotate-backward', ($event) => {
        $('#bb-bookblock').bookblock('prev')
      })
    },
    initPage () {
      let config = {
        $bookBlock : $('#bb-bookblock'),
        $navNext : $('#bb-nav-next'),
        $navPrev : $('#bb-nav-prev'),
        $navFirst : $('#bb-nav-first'),
        $navLast : $('#bb-nav-last')
      }

      config.$bookBlock.bookblock({
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      })

      this.initEvents(config)
      return { init : this.initPage }
    },
    initEvents (config) {
      let $slides = config.$bookBlock.children()

      // add navigation events
      config.$navNext.on('click touchstart', () => {
        config.$bookBlock.bookblock('next')
        return false
      })

      config.$navPrev.on('click touchstart', () => {
        config.$bookBlock.bookblock('prev')
        return false
      })

      config.$navFirst.on('click touchstart', () => {
        config.$bookBlock.bookblock('first')
        return false
      })

      config.$navLast.on('click touchstart', () => {
        config.$bookBlock.bookblock('last')
        return false
      })

      // add swipe events
      $slides.on({
        'swipeleft' : function (event) {
          config.$bookBlock.bookblock('next')
          return false
        },
        'swiperight' : function (event) {
          config.$bookBlock.bookblock('prev')
          return false
        }
      })

      // add keyboard events
      $(document).keydown((e) => {
        let keyCode = e.keyCode || e.which
        let arrow = {
          left : 37,
          up : 38,
          right : 39,
          down : 40
        }

        switch (keyCode) {
          case arrow.up:
            config.$bookBlock.bookblock('prev')
            e.preventDefault()
            break
          case arrow.down:
            config.$bookBlock.bookblock('next')
            e.preventDefault()
            break
        }
      })
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
// @import "../../static/css/default.css"
@import "../../static/css/bookblock.css"
// @import "../../static/css/demo1.css"

.page-wrapper {
  position: fixed;
  width: 100%;
  top: 10%;
  height: 90%;
}


.container
  padding-top: 100px

.bb-bookblock
	width: 800px
	height: 600px

.bb-custom-wrapper
	width: 820px
	position: relative
	margin: 0 auto 40px
	text-align: center

.bb-custom-wrapper .bb-bookblock
	box-shadow: 0 12px 20px -10px rgba(81,64,49,0.6)

.bb-custom-wrapper h3
	font-size: 1.4em
	font-weight: 300
	margin: 0.4em 0 1em

.bb-custom-wrapper nav
	width: 100%
	height: 30px
	margin: 1em auto 0
	position: relative
	z-index: 0
	text-align: center

.bb-custom-wrapper nav a
	display: inline-block
	width: 30px
	height: 30px
	text-align: center
	border-radius: 2px
	background: #72b890
	color: #fff
	font-size: 0
	margin: 2px

.bb-custom-wrapper nav a:hover
	opacity: 0.6

.bb-custom-icon:before
	font-family: 'arrows'
	speak: none
	font-style: normal
	font-weight: normal
	font-variant: normal
	text-transform: none
	line-height: 1
	font-size: 20px
	line-height: 30px
	display: block
	-webkit-font-smoothing: antialiased

.bb-custom-icon-first:before,
.bb-custom-icon-last:before
	content: "\e002"

.bb-custom-icon-arrow-left:before,
.bb-custom-icon-arrow-right:before
	content: "\e003"

.bb-custom-icon-arrow-left:before,
.bb-custom-icon-first:before
	-webkit-transform: rotate(180deg)
	transform: rotate(180deg)






// --------------------
img {
  width: 100%;
}
</style>
