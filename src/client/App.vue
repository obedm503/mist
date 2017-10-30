<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand" id="main-nav">
        <div class="navbar-item">
          Mist
        </div>
        <div class="navbar-item" id="new-pattern">
          <button class="button is-success" @click="showModal">
            <span class="icon">
              <i class="ion ion-plus-round"></i>
            </span>
            <span>
              New Pattern
            </span>
          </button>
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <app-pattern-modal :active="isModalActive" @hide="hideModal"></app-pattern-modal>
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
@import "../../node_modules/bulma/bulma.sass";

#main-nav {
  width: 100%;

  #new-pattern {
    margin-left: auto;
  }
}
</style>
