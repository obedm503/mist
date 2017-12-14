<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AppPatternModal from './components/PatternModal';

export default Vue.extend({
  data() {
    return {
      isModalActive: false,
    };
  },
  mounted() {
    this.$store.dispatch({ type: "getPatterns" });
  },
  methods: {
    showModal() {
      this.isModalActive = true;
    },
    hideModal() {
      this.isModalActive = false;
    },
  },
  components: {
    AppPatternModal
  }
});
</script>

<style lang="scss">
// 1. Import the initial variables
@import "../../node_modules/bulma/sass/utilities/initial-variables";
@import "../../node_modules/bulma/sass/utilities/functions";

// 2. Set your own initial variables
// Update blue
$blue: #72d0eb;
// Add pink and its invert
$pink: #ffb3b3;
$pink-invert: #fff;

// 3. Set the derived variables
// Use the new pink as the primary color
$primary: $pink;
$primary-invert: $pink-invert;

// 4. Setup your Custom Colors
$linkedin: #0077b5;

// 5. Add new color variables to the color map.
@import "../../node_modules/bulma/sass/utilities/derived-variables.sass";
$addColors: (
  "linkedin": ($linkedin, findColorInvert($linkedin)),
);
$colors: map-merge($colors, $addColors);

// 6. Import the rest of Bulma
@import "../../node_modules/bulma/bulma.sass";

html, body, #app, #main {
  width: 100%;
  height: 100%;
}

#main-nav {
  width: 100%;

  #new-pattern {
    margin-left: auto;
  }
}
</style>
