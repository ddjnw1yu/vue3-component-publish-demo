<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import CounterButton from "./components/CounterButton.vue";
import SvgContainer from "./components/SvgContainer.vue";
import FlatmapVuer from "./components/FlatmapVuer.vue";
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <div id="app">
    <div>
      <CounterButton />
    </div>
    <div>
      <SvgContainer />
    </div>
    <div>
      <FlatmapVuer />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>
