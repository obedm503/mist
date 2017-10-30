<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ pattern.name }}
        </p>
      </header>

      <div class="card-content">
        <div class="content">
          {{ pattern.name }}
        </div>
      </div>

      <footer class="card-footer">
        <a class="card-footer-item" @click="showModal">
          Edit
        </a>
        <a class="card-footer-item" @click="deletePattern">
          Delete
        </a>
      </footer>
    </div>

    <app-pattern-modal :pattern="pattern" :active="isModalActive" @hide="hideModal"></app-pattern-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AppPatternModal from './PatternModal';

export default Vue.extend({
  props: ['pattern'],
  data() {
    return {
      isModalActive: false,
    };
  },
  methods: {
    showModal(){
      this.isModalActive = true;
    },
    hideModal() {
      this.isModalActive = false;
    },
    deletePattern() {
      this.$store.dispatch({
        type: 'deletePattern',
        id: this.pattern.id,
      });
    },
  },
  components: {
    AppPatternModal
  }
});
</script>

<style></style>
