<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="item in patterns" :key="item.id">
          <app-pattern :pattern="item"></app-pattern>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import AppPattern from "./Pattern";

export default Vue.extend({
  computed: mapGetters(["patterns"]),
  components: {
    AppPattern
  }
});
</script>

<style></style>
