<template>
  <v-app>
    <div v-if="allData">{{allData}}</div>
    <v-btn @click="fetchData">Click me!</v-btn>
  </v-app>
</template>


<script lang="ts">
import {mapGetters,mapActions} from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapGetters([
      'allData',
    ])
  },
  methods: {
    ...mapActions(['fetchData'
    ]),
  },
});
</script>