<template>
  <div id="main" class="columns">
    <!-- <nav class="navbar is-info" role="navigation" aria-label="main navigation">
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
    </nav> -->
    <nav class="column is-1"></nav>

    <main class="column">

      <div class="section">
        <div class="container is-fluid">

          <div class="columns is-multiline">
            <div class="column is-narrow pattern-column" v-for="item in patterns" :key="item.id">
              <app-pattern :pattern="item"></app-pattern>
            </div>
            <div class="column is-narrow pattern-column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    New Pattern
                  </p>
                </header>

                <div class="card-content">
                  <div class="content">
                    <form>
                      <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                          <input class="input" type="text" required ref="name">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <footer class="card-footer">
                  <a class="card-footer-item">
                    Done
                  </a>
                </footer>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>

    <aside class="column is-3">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Primary title
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>
    </aside>

    <!-- <app-pattern-modal :active="isModalActive" @hide="hideModal"></app-pattern-modal> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import AppPattern from "../components/Pattern";

export default Vue.extend({
  computed: mapGetters(["patterns"]),
  components: {
    AppPattern
  }
});
</script>

<style lang="scss">
.pattern-column .card {
  width: 20rem;
}
</style>
