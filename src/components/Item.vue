<template>
  <li :key="item.id">
    <div class="item">
      <input
        class="itemInput"
        type="checkbox"
        :checked="item.isChecked"
        @change="changeChecked"
      />
      <div v-show="!editMode">
        <span>{{ item.title }}</span>
        <button class="editBtn" @click="editMode = true">&#128397;</button>
      </div>
      <div v-show="editMode">
        <input
          class="editInput"
          :value="editInput"
          @change="(e) => (this.editInput = e.target.value)"
        />
        <button class="saveBtn" @click="saveHandler">&#10004;</button>
      </div>
      <button class="deleteBtn" @click="deleteItem(item.id)">&#10006;</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  data() {
    return {
      editMode: false,
      editInput: this.item.title,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeChecked() {
      this.$store.commit("changeChecked", this.item.id);
      console.log(this.editInput);
    },
    deleteItem() {
      this.$store.commit("deleteItem", this.item.id);
    },
    saveHandler() {
      this.editMode = false;
      this.$store.commit("editItem", {
        id: this.item.id,
        title: this.editInput,
      });
    },
  },
});
</script>

<style scoped>
.item {
  display: inline-flex;
}

.itemInput {
  height: 20px;
  width: 20px;

  border: 1px solid #171717;
  background: #8080ea;

  margin: 10px;
}

.itemInput,
.editInput {
  font-family: "Consolas", serif;
  font-size: 12pt;
  color: #171717;
}

.deleteBtn,
.editBtn,
.saveBtn {
  font-size: 12pt;

  border: 0 solid;
  background: none;
  color: #8080ea;

  height: 30px;
  width: 30px;
}
</style>
