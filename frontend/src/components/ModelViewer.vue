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
      <h1 slot="content-title">3D Model Viewer</h1>
    </content-header>
    <div id="threejs-wrapper">
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'
import Stats from 'stats.js'
const stats = new Stats()

export default {
  name: 'model-viewer',
  data () {
    return {
      T: {
        renderer: null,
        scene: null,
        controls: null,
        camera: null,
        object: null
      }
    }
  },
  components: {
    ContentHeader
  },
  created () {
    this.addEventListenerForSocket()
  },
  mounted () {
    this.setupThreeJS()
  },
  methods: {
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        this.T.object.rotation.y -= 0.05
      })
      this.$bus.$on('rotate-backward', ($event) => {
        this.T.object.rotation.y += 0.05
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
      this.load3DModel(T)

      this.animate()
    },
    /*****************************************
    // three.js environmental settings
    *****************************************/
    setupEnv (T) {
      // renderer
      T.renderer = new THREE.WebGLRenderer()
      T.renderer.setSize(window.innerWidth, window.innerHeight)
      // this.$el.appendChild(T.renderer.domElement)
      let el = document.getElementById('threejs-wrapper')
      el.appendChild(T.renderer.domElement)

      // scene
      T.scene = new THREE.Scene()
      T.scene.background = new THREE.Color('hsl(120, 40%, 20%)')

      // stats
      stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
      stats.dom.style.top = '10%'
      el.appendChild(stats.dom)
    },
    /*****************************************
    // three.js camera settings
    *****************************************/
    setupCamera (T) {
      // THREE.PerspectiveCamera(field of view, aspect, near, far)
      T.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
      T.camera.position.y = 1
      T.camera.position.z = 3

      // controls
      // T.controls = new OrbitControls(T.camera, T.renderer.domElement)
      T.controls = new THREE.OrbitControls(T.camera, T.renderer.domElement)
    },
    /*****************************************
    // three.js light settings
    *****************************************/
    setupLight (T) {
      let aLight = new THREE.AmbientLight(0xffffff, 1.0)

      let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0)
      keyLight.position.set(-100, 0, 100)

      let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75)
      fillLight.position.set(100, 0, 100)

      let backLight = new THREE.DirectionalLight(0xffffff, 1.0)
      backLight.position.set(100, 0, -100).normalize()

      T.scene.add(aLight)
      T.scene.add(keyLight)
      T.scene.add(fillLight)
      T.scene.add(backLight)
    },
    /*****************************************
    // three.js animate loop
    *****************************************/
    load3DModel (T) {
      const path = 'static/3d/'
      const mtlFilename = 'hempsted_whole_park.mtl'
      const objFilename = 'hempsted_whole_park.obj'

      let mtlLoader = new THREE.MTLLoader()
      mtlLoader.load(path + mtlFilename, function (materials) {
        materials.preload()

        // console.log(materials.materials)
        // materials.materials.Walnut.map.magFilter = THREE.NearestFilter
        // materials.materials.Walnut.map.minFilter = THREE.LinearFilter

        let objLoader = new THREE.OBJLoader()

        objLoader.setMaterials(materials)
        objLoader.load(path + objFilename, function (object) {
          T.object = object.clone()
          T.scene.add(T.object)
        })
      })
    },
    /*****************************************
    // three.js animate loop
    *****************************************/
    animate (elapsedTime) {
      // loop
      const scope = this
      // const FPS = 60
      // setTimeout(() => {
      //   requestAnimationFrame(scope.animate)
      // }, 1000 / FPS)
      requestAnimationFrame(scope.animate)

      stats.begin()
      const T = this.T

      T.controls.update()
      T.renderer.render(T.scene, T.camera)
      stats.end()
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

#threejs-wrapper {
  width: 100%;
  height: 100%;
}
</style>
