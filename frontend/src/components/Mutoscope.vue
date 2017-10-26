<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div id="threejs-wrapper">
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ImagePlane from '@/assets/js/ImagePlane'
import Stats from 'stats.js'
const stats = new Stats()

export default {
  name: 'animation',
  data () {
    return {
      simplex: null,
      T: {
        renderer: null,
        scene: null,
        controls: null,
        camera: null,
        imagePlanes: [],
        PLANE_NUM: 0,
        planeWidth: 0,
        planeHeight: 0,
        planeGapAngle: 0,
        selectedPlaneIndex: 0,
        lastTimeEventFired: 0.0,
        rotationSpeed: 0.0
      }
    }
  },
  created () {
    this.addMathFunctions()
    this.addEventListenerForSocket()
  },
  mounted () {
    this.setupThreeJS()
    this.setupKeyEvent()
  },
  destroyed () {
  },
  methods: {
    /*****************************************
    // add some util functions
    *****************************************/
    addMathFunctions () {
      Math.degToRad = function (degrees) {
        return degrees * Math.PI / 180
      }
      Math.radToDeg = function (radians) {
        return radians * 180 / Math.PI
      }
    },
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        this.pageForward()
      })
      this.$bus.$on('rotate-backward', ($event) => {
        this.pageBackward()
      })
    },
    /*****************************************
    // setup three.js
    *****************************************/
    setupThreeJS () {
      const T = this.T

      this.setupEnv(T)
      this.setupCamera(T)
      this.setupLight(T)

      this.generateImagePlanes(T)

      this.animate()
    },
    /*****************************************
    // three.js environmental settings
    *****************************************/
    setupEnv (T) {
      // renderer
      T.renderer = new THREE.WebGLRenderer()
      T.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$el.appendChild(T.renderer.domElement)

      // scene
      T.scene = new THREE.Scene()
      T.scene.background = new THREE.Color('hsl(120, 40%, 20%)')

      // stats
      stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
      document.body.appendChild(stats.dom)

      // initialize variables
      T.PLANE_NUM = 100
      T.planeWidth = 640
      T.planeHeight = 360 / 2
      T.planeGapAngle = Math.degToRad(180.0 / T.PLANE_NUM)
      T.selectedPlaneIndex = 0
      T.lastTimeEventFired = 0.0
      T.rotationSpeed = 0.8
    },
    /*****************************************
    // three.js camera settings
    *****************************************/
    setupCamera (T) {
      // THREE.PerspectiveCamera(field of view, aspect, near, far)
      T.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
      T.camera.position.set(200, 200, 1000)
      T.camera.lookAt(new THREE.Vector3(0, 0, 0))

      // controls
      // T.controls = new OrbitControls(T.camera, T.renderer.domElement)
      T.controls = new THREE.OrbitControls(T.camera, T.renderer.domElement)
    },
    /*****************************************
    // three.js light settings
    *****************************************/
    setupLight (T) {
      let dLight = new THREE.DirectionalLight(0xFFFFFF, 0.5)
      dLight.position.set(10, 0, 25)
      T.scene.add(dLight)

      let aLight = new THREE.AmbientLight(0x404040)
      T.scene.add(aLight)

      // color, intensity, distance, decay
      // let pLight = new THREE.PointLight(0xff0000, 1, 2000, 2)
      // pLight.position.set(50, 200, 200)
      // T.scene.add(pLight)
    },
    /*****************************************
    // three.js generate image plane objects
    *****************************************/
    generateImagePlanes (T) {
      // prepare geometries and connect them as front face and back face
      let geometryFront = new THREE.PlaneBufferGeometry(T.planeWidth, T.planeHeight)
      let geometryBack  = new THREE.PlaneBufferGeometry(T.planeWidth, T.planeHeight)
      geometryBack.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI)) // spin it 180 degrees
      geometryFront.translate(0, T.planeHeight / 2, 0) // to change the rotation axis to its bottom line
      geometryBack.translate(0, T.planeHeight / 2, 0) // to change the rotation axis to its bottom line

      // which frame do you want to start displaying from?
      const START_FRAME = 200

      // generate ImagePlane instances
      for (let i = 0; i < T.PLANE_NUM; i++) {
        // index for the back of the plane
        let j = i + 1
        if (j === T.PLANE_NUM) j = 0

        // prepare texture for front side
        let imagePathFront = require('@/assets/imgs/tom_jerry/' + (START_FRAME + i) + '.png')
        let textureFront = new THREE.TextureLoader().load(imagePathFront)
        textureFront.repeat.set(1, 0.5)
        textureFront.offset.y = 0.5
        textureFront.needsUpdate = true

        // prepare texture for back side
        let imagePathBack = require('@/assets/imgs/tom_jerry/' + (START_FRAME + j) + '.png')
        let textureBack = new THREE.TextureLoader().load(imagePathBack)
        textureBack.flipY = true
        textureBack.repeat.set(1, 0.5)
        textureBack.offset.y = 0
        textureBack.needsUpdate = true

        // create materials
        let materialFront = new THREE.MeshPhongMaterial({map: textureFront})
        let materialBack  = new THREE.MeshPhongMaterial({map: textureBack})

        // create meshes
        let meshFront = new THREE.Mesh(geometryFront, materialFront)
        let meshBack  = new THREE.Mesh(geometryBack,  materialBack)

        // generate an ImagePlane instance and push to an array
        let index = i
        let angle = -T.planeGapAngle * i
        let imagePlane = new ImagePlane(meshFront, meshBack, index, angle)
        T.imagePlanes.push(imagePlane)

        // add to scene
        T.scene.add(imagePlane)   // make sure those two share the same reference
      }
    },
    /*****************************************
    // three.js animate loop
    *****************************************/
    animate (elapsedTime) {
      // loop
      const scope = this
      const FPS = 30
      setTimeout(() => {
        requestAnimationFrame(scope.animate)
      }, 1000 / FPS)

      stats.begin()
      const T = this.T

      for (let i = 0; i < T.imagePlanes.length; i++) {
        T.imagePlanes[i].update()
        T.imagePlanes[i].draw()
      }

      T.controls.update()
      T.renderer.render(T.scene, T.camera)
      stats.end()
    },
    /*****************************************
    // setup keydown event
    *****************************************/
    setupKeyEvent () {
      document.addEventListener('keydown', (event) => {
        const keyName = event.key
        console.log('key pressed: ', keyName)
        switch (keyName) {
          case 'ArrowUp':
            this.pageBackward()
            break
          case 'ArrowDown':
            this.pageForward()
            break
          case ' ':
            this.resetPlanes()
        }
      })
    },
    /*****************************************
    // page forward function
    *****************************************/
    pageForward () {
      const T = this.T

      // if there are any planes paging backward, cancel this pageForward() command
      for (let i = 0; i < T.imagePlanes.length; i++) {
        let ip = T.imagePlanes[i]
        if (ip.isRotating && ip.rotationDirection < 0) {
          console.log('page forward canceled. there is a plane rotating')
          return
        }
      }

      // if the selected plane is the last one, cancel this pageForward() command
      if (T.selectedPlaneIndex === T.imagePlanes.length - 1) {
        console.log('page forward canceled. this is the last plane')
        return
      }

      // iterate through all planes
      for (let i = 0; i < T.imagePlanes.length; i++) {
        let ip = T.imagePlanes[i]

        if (ip.planeIndex === T.selectedPlaneIndex) {
          // if this is the selected plane
          ip.rotationDirection = 1
          ip.rotationSpeed = T.rotationSpeed
          ip.addAngleToRotate(Math.degToRad(180.0)) // paging
        } else {
          // if this is not the selected plane
          ip.rotationDirection = 1
          ip.rotationSpeed = T.rotationSpeed
          ip.addAngleToRotate(T.planeGapAngle) // scooting
        }
      }

      // set the next plane selected
      T.selectedPlaneIndex++
    },
    /*****************************************
    // page backward function
    *****************************************/
    pageBackward () {
      const T = this.T

      // if there are any planes paging forward, cancel this pageBackward() command
      for (let i = 0; i < T.imagePlanes.length; i++) {
        let ip = T.imagePlanes[i]
        if (ip.isRotating && ip.rotationDirection > 0) {
          console.log('page backward canceled. there is a plane rotating')
          return
        }
      }

      // if the selected plane is the first one, cancel this pageBackward() command
      if (T.selectedPlaneIndex === 0) {
        console.log('page backward canceled. this is the last plane')
        return
      }

      // iterate through all planes
      for (let i = 0; i < T.imagePlanes.length; i++) {
        let ip = T.imagePlanes[i]

        if (ip.planeIndex === T.selectedPlaneIndex - 1) {
          // if this is the one before the selected plane
          ip.rotationDirection = -1
          ip.rotationSpeed = T.rotationSpeed
          ip.addAngleToRotate(Math.degToRad(180.0)) // paging
        } else {
          // if this is not the selected plane
          ip.rotationDirection = -1
          ip.rotationSpeed = T.rotationSpeed
          ip.addAngleToRotate(T.planeGapAngle) // scooting
        }
      }

      // set the next plane selected
      T.selectedPlaneIndex--
    },
    /*****************************************
    // reset planes' position and angle
    *****************************************/
    resetPlanes () {
      const T = this.T

      // if there are any planes rotating, cancel this resetPlanes() command
      for (let i = 0; i < T.imagePlanes.length; i++) {
        let ip = T.imagePlanes[i]
        if (ip.isRotating) {
          console.log('reset planes canceled. there is a plane rotating')
          return
        }
      }

      // reset the rotation speed
      T.rotationSpeed = 0.02

      for (let i = 0; i < T.imagePlanes.length; i++) {
        let ip = T.imagePlanes[i]

        // set the starting angle
        let angle = -T.planeGapAngle * i

        // reset angle
        ip.currentAngle = angle
        ip.rotationStartedAt = angle
        ip.rotationDirection = 1
        ip.rotationSpeed = T.rotationSpeed
      }

      // set the first plane selected
      T.selectedPlaneIndex = 0

      // initialize the time
      T.lastTimeEventFired = 0.0
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
#threejs-wrapper {
  width: 100%;
  height: 100%;
}

.info {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
}
</style>
