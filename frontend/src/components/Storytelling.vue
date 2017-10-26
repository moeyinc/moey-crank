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
      <h1 slot="content-title">Storytelling</h1>
    </content-header>
    <div class="container">
      <div class="bb-custom-wrapper">

        <div id="bb-bookblock" class="bb-bookblock">
          <div class="bb-item">
            <div class="bb-custom-firstpage">
              <h1>Storytelling Sample</h1>
            </div>
            <div class="bb-custom-side">
              <p>Pastry bear claw oat cake danish croissant jujubes danish. Wypas soufflé muffin. Liquorice powder pastry danish. Candy toffee gummi bears chocolate bar lollipop applicake chocolate cake danish brownie.</p>
            </div>
          </div>
          <div class="bb-item">
            <div class="bb-custom-side">
              <p>Soufflé tootsie roll jelly beans. Sweet icing croissant dessert bear claw. Brownie dessert cheesecake danish jelly pudding bear claw soufflé.</p>
            </div>
            <div class="bb-custom-side">
              <p>Candy canes lollipop macaroon marshmallow gummi bears tiramisu. Dessert croissant cupcake candy canes. Bear claw faworki faworki lemon drops. Faworki marzipan sugar plum jelly-o marzipan jelly-o.</p>
            </div>
          </div>
          <div class="bb-item">
            <div class="bb-custom-side">
              <p>Croissant pudding gingerbread gummi bears marshmallow halvah. Wafer donut croissant. Cookie muffin jelly beans pie croissant croissant candy canes jelly marshmallow.</p>
            </div>
            <div class="bb-custom-side">
              <p>Wafer donut caramels chocolate caramels sweet roll. Gummi bears powder candy chocolate cake gummi bears icing wafer cupcake. Brownie cotton candy pastry chocolate wypas.</p>
            </div>
          </div>
          <div class="bb-item">
            <div class="bb-custom-side">
              <p>Marzipan dragée candy canes chocolate cake. Soufflé faworki jelly gingerbread cupcake. Powder gummies applicake.</p>
            </div>
            <div class="bb-custom-side">
              <p>Cotton candy caramels tootsie roll soufflé powder lemon drops carrot cake danish. Cotton candy candy canes fruitcake muffin gingerbread. Jujubes soufflé gingerbread donut donut.</p>
            </div>
          </div>
          <div class="bb-item">
            <div class="bb-custom-side">
              <p>Jujubes fruitcake tiramisu liquorice chocolate cake. Carrot cake faworki donut soufflé oat cake tootsie roll. Fruitcake fruitcake cake sweet pie jelly beans. Chocolate cake candy jujubes oat cake toffee croissant muffin.</p>
            </div>
            <div class="bb-custom-side">
              <p>Chocolate bar tiramisu marzipan. Croissant soufflé croissant lollipop liquorice dragée chupa chups carrot cake. Liquorice lollipop halvah toffee lollipop.</p>
            </div>
          </div>
        </div>

        <nav>
          <a id="bb-nav-first" href="#" class="bb-custom-icon bb-custom-icon-first">First page</a>
          <a id="bb-nav-prev" href="#" class="bb-custom-icon bb-custom-icon-arrow-left">Previous</a>
          <a id="bb-nav-next" href="#" class="bb-custom-icon bb-custom-icon-arrow-right">Next</a>
          <a id="bb-nav-last" href="#" class="bb-custom-icon bb-custom-icon-last">Last page</a>
        </nav>

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
  name: 'storytelling',
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
        speed : 1000,
        shadowSides : 0.8,
        shadowFlip : 0.4
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
// @import "../../static/css/demo4.css"

.container
	height: 100%

// -----------------------

.bb-custom-wrapper {
	width: 100%;
	height: 100%;
	position: relative;
}

.bb-custom-wrapper .bb-bookblock {
	width: 100%;
	height: 100%;
	-webkit-perspective: 2000px;
	perspective: 2000px;
}

.bb-custom-side {
	width: 50%;
	float: left;
	height: 100%;
	overflow: hidden;
	background: #fff;
	/* Centering with flexbox */
	display: -webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-moz-box-align: center;
	-webkit-align-items: center;
	align-items: center;
}

.bb-custom-firstpage h1 {
	font-size: 2.625em;
	line-height: 1.3;
	margin: 0;
	font-weight: 300;
	background: #fff;
}

.bb-custom-firstpage h1 span {
	display: block;
	font-size: 60%;
	opacity: 0.3;
	padding: 0 0 0.6em 0.1em;
}

.bb-custom-firstpage {
	text-align: center;
	padding-top: 15%;
	width: 50%;
	float: left;
	height: 100%;
}

.bb-custom-side p {
	padding: 8%;
	font-size: 1.8em;
	font-weight: 300;
}

.bb-custom-wrapper h3 {
	font-size: 1.4em;
	font-weight: 300;
	margin: 0.4em 0 1em;
}

.bb-custom-wrapper > nav {
	width: 100%;
	height: 40px;
	margin: 1em auto 0;
	position: fixed;
	bottom: 20px;
	z-index: 1000;
	text-align: center;
}

.bb-custom-wrapper > nav a {
	display: inline-block;
	width: 40px;
	height: 40px;
	text-align: center;
	border-radius: 2px;
	background: #1baede;
	color: #fff;
	font-size: 0;
	margin: 2px;
}

.bb-custom-wrapper > nav a:hover {
	opacity: 0.6;
}

.bb-custom-icon:before {
	font-family: 'arrows';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	font-size: 30px;
	line-height: 40px;
	display: block;
	-webkit-font-smoothing: antialiased;
}

.bb-custom-icon-first:before,
.bb-custom-icon-last:before {
	content: "\e002";
}

.bb-custom-icon-arrow-left:before,
.bb-custom-icon-arrow-right:before {
	content: "\e003";
}

.bb-custom-icon-arrow-left:before,
.bb-custom-icon-first:before {
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
}

.page-wrapper {
  position: fixed;
  width: 100%;
  top: 10%;
  height: 90%;

  color: #777;
}

.bb-custom-firstpage {
  padding-top: 28%
}
</style>
