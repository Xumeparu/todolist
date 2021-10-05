<template>
  <li :key="item.id">
    <input
      class="itemInput"
      type="checkbox"
      :checked="item.isChecked"
      @change="changeChecked"
    />
    {{ item.title }}
    <button class="deleteBtn" @click="deleteItem(item.id)">&#10006;</button>
  </li>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeChecked() {
      this.$store.commit("changeChecked", this.item.id);
    },
    deleteItem() {
      this.$store.commit("deleteItem", this.item.id);
    },
  },
});
</script>

<style scoped>
.itemInput {
  font-family: "Consolas", serif;
  font-size: 12pt;
  color: #171717;
}

.deleteBtn {
  font-size: 12pt;

  border: 0 solid;
  background: none;
  color: #8080ea;

  height: 30px;
  width: 30px;
}
</style>
