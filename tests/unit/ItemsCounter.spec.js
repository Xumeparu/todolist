import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import ItemsCounter from "../../src/components/ItemsCounter";

const items = [
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
];

describe("Тестирование компонента ItemsCounter.vue", () => {
  it("Компонент вызывает геттер 'itemsCount'", () => {
    const store = createStore({
      state: {
        items,
      },
      getters: {
        itemsCount: (state) => state.items.length,
      },
    });

    const wrapper = mount(ItemsCounter, {
      global: {
        plugins: [store],
      },
    });

    const numberOfItems = wrapper.find(".numberOfItems");
    expect(Number(numberOfItems.text())).toEqual(items.length);
  });
});
