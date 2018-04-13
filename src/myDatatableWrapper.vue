<style lang="scss">
  // I can apply these styles to the vue good table 1 time
  
  
</style>

<template>
  <div>
    <!-- Add Custom formatting that applies to whole app -->
    <h2>{{ compHeader }}</h2>
    <vue-good-table
    :columns="columns"
    :rows="rows"></vue-good-table>
  </div>
</template>

<script>
import Vue from 'vue';
import vueGoodTable from 'vue-good-table';

Vue.use(vueGoodTable);

export default {
  computed: {
    compHeader: function() {
      return this.header || "Data Table"
    }
  },
  props: [
    "columns",
    "rows",
    "header"
  ]
}
  
</script>