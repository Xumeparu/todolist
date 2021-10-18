import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import List from "../../src/components/List";
import { FILTER_OPTIONS } from "../../src/store/store";

describe("Тестирование компонента List.vue", () => {
  it("Компонент вызывает геттер 'filteredList'", () => {
    const store = createStore({
      state: {
        items: [
          {
            id: "0",
            title: "Mercury",
            isChecked: false,
          },
          {
            id: "1",
            title: "Venus",
            isChecked: true,
          },
          {
            id: "2",
            title: "Earth",
            isChecked: false,
          },
        ],
        filterByOption: FILTER_OPTIONS.NOT_DONE,
      },
      getters: {
        filteredList: (state) => state.items,
      },
    });

    const wrapper = mount(List, {
      global: {
        plugins: [store],
      },
    });

    const length = store.state.items.length;

    const listItems = wrapper.findAll(".listItems");
    expect(listItems.length).toEqual(length);
  });
});
