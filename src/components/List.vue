<template>
  <div>
    <ul class="itemsUl">
      <Item v-for="(item, index) in items" :key="index" :item="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import Item from "./Item.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "List",
  components: { Item },
  computed: {
    items() {
      return this.$store.getters.filteredList;
    },
  },
});
</script>

<style scoped>
.itemsUl {
  list-style-type: none;
}
</style>
