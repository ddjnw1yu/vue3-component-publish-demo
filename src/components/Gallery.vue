<script setup>
// import Gallery from "vue3-component-gallery";
// import GalleryHelper from "vue3-component-gallery/src/mixins/GalleryHelpers.js";
// import "vue3-component-gallery/dist/style.css";
import Gallery from "@abi-software/gallery";
import GalleryHelper from "@abi-software/gallery/src/mixins/GalleryHelpers";
import "@abi-software/gallery/dist/style.css";
console.log("🚀 ~ GalleryHelper:", GalleryHelper)

const dataInput = [
  {
    title: "test1",
    type: "data",
    userData: "https://sparc.science/",
  },
  {
    title: "test2",
    type: "data",
    link: "https://sparc.science/",
  },
  {
    title: "test3",
    type: "data",
    link: "https://sparc.science/",
  },
];
function cardClicked(data) {
  console.log("card-clicked", data);
}
</script>

<template>
  <div>
    <Gallery :items="dataInput" @card-clicked="cardClicked" />
  </div>
</template>

<style scoped></style>
