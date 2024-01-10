<script setup>
import Gallery from "vue3-component-gallery";
import "vue3-component-gallery/dist/style.css";

const dataInput = [
  {
    title: "test1",
    type: "data",
    link: "https://sparc.science/",
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
