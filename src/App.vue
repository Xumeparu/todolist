<template>
  <div class="app">
    <AddingForm />
    <Filter />
    <List />
  </div>
</template>

<script>
import AddingForm from "./components/AddingForm";
import Filter from "./components/Filter";
import List from "./components/List";

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
