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
        <a class="card-footer-item">
          Delete
        </a>
      </footer>
    </div>

    <div class="modal" :class="{ 'is-active': isModalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ pattern.name }}
          </p>
          <button class="delete" aria-label="close" @click="hideModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
            {{ pattern.name }}
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="hideModal">Save changes</button>
          <button class="button" @click="hideModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
    }
  }
});
</script>

<style></style>
