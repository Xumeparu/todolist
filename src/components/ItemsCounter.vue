<template>
  <div>
    Your tasks:
    <span class="numberOfItems">{{ itemsCount }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemsCounter",
  computed: {
    itemsCount() {
      return this.$store.getters.itemsCount;
    },
  },
});
</script>

<style scoped></style>
