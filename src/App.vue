<template>
  <div id="app">
    <page-header />
    <div class="page-wrapper px-4 lg:px-0">
      <router-view />
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>