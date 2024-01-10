<script setup>
import { MapSvgIcon, MapSvgSpriteColor } from "vue3-component-svg-sprite";
// import MapSvgSprite from 'vue3-component-svg-sprite'
import "vue3-component-svg-sprite/dist/style.css";
</script>

<template>
  <div>
    <MapSvgSpriteColor />
    magnifyingGlass<MapSvgIcon icon="magnifyingGlass" class="example-icon" />
    changeBckgd<MapSvgIcon icon="changeBckgd" class="example-icon" />
    close<MapSvgIcon icon="close" class="example-icon" />
    closeFullScreen<MapSvgIcon icon="closeFullScreen" class="example-icon" />
    dock<MapSvgIcon icon="dock" class="example-icon" /> pause<MapSvgIcon
      icon="pause"
      class="example-icon"
    />
    permalink<MapSvgIcon icon="permalink" class="example-icon" />
    play<MapSvgIcon icon="play" class="example-icon" /> resetZoom<MapSvgIcon
      icon="resetZoom"
      class="example-icon"
    />
    tooltips<MapSvgIcon icon="tooltips" class="example-icon" />
    undock<MapSvgIcon icon="undock" class="example-icon" /> zoomIn<MapSvgIcon
      icon="zoomIn"
      class="example-icon"
    />
    zoomOut<MapSvgIcon icon="zoomOut" class="example-icon" />
    singlepanel<MapSvgIcon icon="singlepanel" class="example-icon" />
    2horpanel<MapSvgIcon icon="2horpanel" class="example-icon" />
    2vertpanel<MapSvgIcon icon="2vertpanel" class="example-icon" />
    3panel<MapSvgIcon icon="3panel" class="example-icon" /> 4panel<MapSvgIcon
      icon="4panel"
      class="example-icon"
    />
    fitWindow<MapSvgIcon icon="fitWindow" class="example-icon" />
    Help<MapSvgIcon icon="help" class="example-icon" /> openMap<MapSvgIcon
      icon="openMap"
      class="example-icon"
    />
  </div>
</template>

<style scoped>
.example-icon {
  font-size: 10em;
}

.map-icon {
  color: red;
}
</style>
