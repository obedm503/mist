<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ (pattern || {}).name || 'New Pattern' }}
        </p>
        <button class="delete" aria-label="close" @click="cancel"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
          <form @submit="save">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" required v-model="name" ref="name">
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="save">Save changes</button>
        <button class="button" @click="cancel">Cancel</button>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["pattern", "active"],
  data(){
    return {
      name: (this.pattern || {}).name || '',
    }
  },
  watch: {
    active: function (active) {
      if(active) {
        // not working
        this.$refs.name.focus();
      }
    }
  },
  methods: {
    cancel() {
      this.name = '';
      this.$emit('hide');
    },
    save() {
      if ((this.pattern || {}).id) {
        this.$store.dispatch({ type: "updatePattern", name: this.name, id: this.pattern.id });
      } else {
        this.$store.dispatch({ type: "createPattern", name: this.name });
      }
      this.name = '';
      this.$emit('hide');
    }
  }
});
</script>

