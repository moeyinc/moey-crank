<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <content-header :height="25" :bg-color="'#00aceb'" :color="'#ffffff'" :font-size="4">
      <h1 slot="content-title">Application Demo</h1>
    </content-header>
    <main class="container">
      <ul class="apps-list clearfix">
        <li>
          <image-button
            :img="getImageAssetFilePath('picture-book.png')"
            :text="'Page Flip:<br />Picture Book'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('picture-book')"
          />
        </li>
        <li>
          <image-button
            :img="getImageAssetFilePath('calendar.png')"
            :text="'Page Flip:<br />Calendar'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('calendar')"
          />
        </li>
        <li>
          <image-button
            :img="getImageAssetFilePath('storytelling.png')"
            :text="'Page Flip:<br />Storytelling'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('storytelling')"
          />
        </li>
        <li>
          <image-button
            :img="getImageAssetFilePath('space.jpg')"
            :text="'Page Scroll'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('page-scroll')"
          />
        </li>
        <li>
          <image-button
            :img="getImageAssetFilePath('modelviewer.png')"
            :text="'3D Model Viewer'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('model-viewer')"
          />
        </li>
        <li>
          <image-button
            :img="getImageAssetFilePath('animation.png')"
            :text="'Mutoscope'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('mutoscope')"
          />
        </li>
        <li>
          <image-button
            :img="getImageAssetFilePath('placeholder.jpg')"
            :text="'Interactive Game'"
            :width="400"
            :height="300"
            :fontSize="2"
            :color="'#ffffff'"
            @clicked="jumpTo('interactive-game')"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'
import ImageButton from '@/components/ImageButton'
import Color from 'color'

export default {
  name: 'home',
  components: {
    ContentHeader,
    ImageButton
  },
  methods: {
    genColor (hex, deg) {
      return Color(hex).rotate(deg)
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
  height: 75%;
  top: 25%;

  overflow-y: scroll;
}

main.container {
  padding: 30px;
}

ul.apps-list {
}

ul.apps-list li {
  margin: 10px 20px;
  float: left;
}

</style>
