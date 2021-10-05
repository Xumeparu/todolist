import { mount } from "@vue/test-utils";
import List from "../../src/components/List";

describe("Тестирование List.vue", () => {
  it("Компонент выводит элемент списка", async () => {
    const items = [
      { id: "gkbhrlehb", title: "Меркурий" },
      { id: "ghrlehbgqw", title: "Венера" },
    ];
    const wrapper = mount(List, {
      props: { items },
    });
    expect(wrapper.text()).toMatch(items[0].title);
  });
});
