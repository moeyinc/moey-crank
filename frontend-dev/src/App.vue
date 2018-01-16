<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import V from './variable.js'
import io from 'socket.io-client'
require('reset-css/reset.css')
require('@/assets/css/material.css')

export default {
  name: 'app',
  data () {
    return {
      socket: null,
      serialVal: 0,
      serialValAtLastEvent: 0
    }
  },
  created () {
    this.initSocket()
  },
  watch: {
    /*****************************************
    // watch serialVal and emit an event according to the direction of rotation
    *****************************************/
    serialVal (newVal) {
      // console.log('watched serialVal: ', newVal)
      let increment = newVal - this.serialValAtLastEvent

      // if there is a value update with more amount than an expected gap
      if (increment >= V.SERIAL_VAL_GAP) {
        // handle rotated backward
        this.$bus.$emit('rotate-backward')
        this.serialValAtLastEvent = newVal
      } else if (increment <= -V.SERIAL_VAL_GAP) {
        // handle rotated forward
        this.$bus.$emit('rotate-forward')
        this.serialValAtLastEvent = newVal
      }
    }
  },
  methods: {
    /*****************************************
    // initialize the websocket connection that will receive sensor values on serial port of the server
    // everytime it receives a new value, it will update the serialVal in data
    *****************************************/
    initSocket () {
      const D = this.$data
      this.socket = io(V.SERVER_URL)
      this.socket.on('serialport', function (data) {
        // console.log('data received on io: ', data)
        D.serialVal = parseInt(data)
      })
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #app {
  height: 100%;
  /*cursor: none;*/
  user-select: none;
}

body {
  background: whitesmoke;
}

a {
  text-decoration: none;
  /*cursor: none;*/
}

.clearfix:before, .clearfix:after { content: " "; display: table; }
.clearfix:after { clear: both; }

@font-face {
  font-family: 'arrows';
	src:url('/static/fonts/arrows/arrows.eot');
	src:url('/static/fonts/arrows/arrows.eot?#iefix') format('embedded-opentype'),
		url('/static/fonts/arrows/arrows.woff') format('woff'),
		url('/static/fonts/arrows/arrows.ttf') format('truetype'),
		url('/static/fonts/arrows/arrows.svg#arrows') format('svg');
	font-weight: normal;
	font-style: normal;
}
</style>
