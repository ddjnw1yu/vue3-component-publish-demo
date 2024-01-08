import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import MapSvgIcon from 'vue3-component-svg-sprite'
import MapSvgSprite from 'vue3-component-svg-sprite'
import MapSvgSpriteColor from 'vue3-component-svg-sprite'
import 'vue3-component-svg-sprite/dist/style.css'

const app = createApp(App)

app.use(MapSvgIcon)
app.use(MapSvgSprite)
app.use(MapSvgSpriteColor)

app.mount('#app')
