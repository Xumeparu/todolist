<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="addInput"
      type="text"
      placeholder="Add item"
      v-model="title"
    />
    <button class="addBtn" type="submit">&#9658;</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddingForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.title.length !== 0 && this.title.trim() !== "") {
        this.$store.commit(`addItem`, this.title.trim());
      }
      this.title = "";
    },
  },
});
</script>

<style scoped>
.addInput,
.addInput:active {
  font-family: "Consolas", serif;
  font-size: 12pt;
  color: #171717;

  border: 1px solid #171717;

  height: 20px;
  width: 200px;
}

.addBtn {
  font-size: 12pt;
  color: #8080ea;

  border: 0 solid;
  background: none;

  height: 30px;
  width: 30px;
}
</style>
