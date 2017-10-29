<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          Mist
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  mounted() {
    this.$store.dispatch({ type: 'getPatterns' });
  }
});
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>
