<template>
  <div class="app">
    <AddingForm />
    <Filter />
    <List />
  </div>
</template>

<script lang="ts">
import AddingForm from "./components/AddingForm.vue";
import Filter from "./components/Filter.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    AddingForm,
    Filter,
    List,
  },
};
</script>

<style lang="scss">
.app {
  font-family: "Consolas", serif;
  font-size: 12pt;
  text-align: center;
  margin: 2%;
}
</style>
