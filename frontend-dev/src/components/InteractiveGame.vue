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
      <h1 slot="content-title">Interactive Game</h1>
    </content-header>
    <main id="matterjs-canvas">
    </main>
    <floating-button
      :width="200"
      :height="100"
      :top="'50px'"
      :right="'50px'"
      :text="'RUN'"
      :font-size="2"
      :bg-color="'#eb3f00'"
      :bg-color-active="'#ebb500'"
      :color="'#ffffff'"
      :color-active="'#ffffff'"
      @clicked="run()"
    />
    <floating-button
      :width="200"
      :height="100"
      :top="'175px'"
      :right="'50px'"
      :text="'RESET'"
      :font-size="2"
      :bg-color="'#3F00EB'"
      :bg-color-active="'#ACEB00'"
      :color="'#ffffff'"
      :color-active="'#ffffff'"
      @clicked="reset()"
    />
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'
import FloatingButton from '@/components/FloatingButton'
import Matter from 'matter-js'
const Engine = Matter.Engine
const Render = Matter.Render
const Runner = Matter.Runner
const Composites = Matter.Composites
// const MouseConstraint = Matter.MouseConstraint
// const Mouse = Matter.Mouse
const World  = Matter.World
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

export default {
  name: 'interactive-game',
  components: {
    ContentHeader,
    FloatingButton
  },
  data () {
    return {
      ball: null,
      constraint: null,
      angle: 0,
      activated: false
    }
  },
  created () {
    this.addEventListenerForSocket()
  },
  mounted () {
    this.setupMatterJS()
  },
  methods: {
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        console.log('rotate forward')
        const angleStep = -1
        this.moveBall(angleStep)
      })
      this.$bus.$on('rotate-backward', ($event) => {
        console.log('rotate backward')
        const angleStep = 1
        this.moveBall(angleStep)
      })
    },
    /*****************************************
    // setup matter.js
    *****************************************/
    setupMatterJS () {
      let el = document.getElementById('matterjs-canvas')

      let engine = Engine.create()
      let world = engine.world

      let render = Render.create({
        element: el,
        engine: engine,
        options: {
          width: el.clientWidth,
          height: el.clientHeight,
          showAngleIndicator: true,
          wireframes: false
        }
      })

      // run the renderer
      Render.run(render)

      // create runner
      let runner = Runner.create()
      Runner.run(runner, engine)

      // add bodies
      let rows = 10
      let yy = el.clientHeight - 21 - 40 * rows

      let stack = Composites.stack(el.clientWidth / 2, yy, 5, rows, 0, 0, function (x, y) {
        return Bodies.rectangle(x, y, 40, 40)
      })

      World.add(world, [
        stack,
        // walls
        Bodies.rectangle(el.clientWidth / 2, 0, el.clientWidth, 50, { isStatic: true }),
        Bodies.rectangle(el.clientWidth / 2, el.clientHeight, el.clientWidth, 50, { isStatic: true }),
        Bodies.rectangle(el.clientWidth, el.clientHeight / 2, 50, el.clientHeight, { isStatic: true }),
        Bodies.rectangle(0, el.clientHeight / 2, 50, el.clientHeight, { isStatic: true })
      ])

      let ballPosX = el.clientWidth / 2 - 70
      let ballPosY = el.clientHeight - 100
      this.ball = Bodies.circle(ballPosX, ballPosY, 50, {density: 0.04, frictionAir: 0.005})
      this.constraint = Constraint.create({
        pointA: { x: ballPosX, y: el.clientHeight / 4 },
        bodyB: this.ball
      })
      World.add(world, this.ball)
      World.add(world, this.constraint)

      // Matter.Sleeping.set(this.ball, true)
      Matter.Body.setStatic(this.ball, true)

      /*
      // add mouse control
      let mouse = Mouse.create(render.canvas)
      let mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })

      World.add(world, mouseConstraint)

      // keep the mouse in sync with rendering
      render.mouse = mouse
      */

      // fit the render viewport to the scene
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: el.clientWidth, y: el.clientHeight }
      })
    },
    /*****************************************
    // run a ball in matter.js
    *****************************************/
    run () {
      // Matter.Sleeping.set(this.ball, false)
      Matter.Body.setStatic(this.ball, false)
      this.activated = true
    },
    /*****************************************
    // refresh page
    *****************************************/
    reset () {
      window.location.reload(true)
    },
    /*****************************************
    // convert degree to radians
    *****************************************/
    getRadians (deg) {
      return deg * Math.PI / 180
    },
    /*****************************************
    // move the ball
    *****************************************/
    moveBall (angleStep) {
      if (this.activated) {
        return
      }

      // prepare angle values
      let currentRad = this.getRadians(this.angle)
      let nextRad = this.getRadians(this.angle + angleStep)
      this.angle += angleStep

      if (this.angle < 0) {
        this.angle = 0
        return
      } else if (this.angle > 90) {
        this.angle = 90
        return
      }

      // do math to get the delta x and delta y
      let r = this.constraint.length
      let dx = r * (Math.sin(nextRad) - Math.sin(currentRad))
      let dy = r * (Math.cos(currentRad) - Math.cos(nextRad))

      console.log('dx: ', dx)
      console.log('dy: ', dy)

      // update position
      const x = this.ball.position.x
      const y = this.ball.position.y
      Matter.Body.setPosition(this.ball, {x: x - dx, y: y - dy})
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
  height: 100%;
}

div#trigger-button {
  position: absolute;
  width: 200px;
  height: 100px;
  top: 50px;
  right: 50px;
  background-color: green;
  color: white;
  font-size: 2em;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
