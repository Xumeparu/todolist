<template>
  <div class="app">
    <AddingForm />
    <Filter />
    <ItemsCounter />
    <List />
  </div>
</template>

<script lang="ts">
import AddingForm from "@/components/AddingForm.vue";
import Filter from "@/components/Filter.vue";
import ItemsCounter from "@/components/ItemsCounter.vue";
import List from "@/components/List.vue";

export default {
  name: "App",
  components: {
    AddingForm,
    Filter,
    ItemsCounter,
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
