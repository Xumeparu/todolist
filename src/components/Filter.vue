<template>
  <div>
    <select
      class="selectBox"
      :value="filterByOption"
      @change="changeFilterByOptionHandler"
    >
      <option
        v-for="(option, index) in Object.values(FILTER_OPTIONS)"
        :value="option"
        :key="index"
      >
        {{ option }}
      </option>
    </select>
    <input class="substrInput" :value="substring" @input="substringHandler" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FILTER_OPTIONS } from "@/store/store";

export default defineComponent({
  name: "Filter",
  computed: {
    FILTER_OPTIONS: () => FILTER_OPTIONS,
    filterByOption() {
      return this.$store.getters.filterOption;
    },
    substring() {
      return this.$store.getters.substring;
    },
  },
  methods: {
    changeFilterByOptionHandler(e: Event) {
      this.$store.commit(
        "changeFilterByOption",
        (e.target as HTMLSelectElement).value
      );
    },
    substringHandler(e: Event) {
      this.$store.commit(
        "searchSubstring",
        (e.target as HTMLInputElement).value
      );
    },
  },
});
</script>

<style scoped>
.selectBox {
  font-family: "Consolas", serif;
  font-size: 12pt;
  color: #171717;

  border: 1px solid #171717;

  height: 23px;
  width: 100px;

  margin: 1%;
}

.substrInput {
  font-family: "Consolas", serif;
  font-size: 12pt;
  color: #171717;

  border: 1px solid #171717;

  height: 20px;
  width: 200px;
}
</style>
