import { shallowMount } from "@vue/test-utils";
import Item from "../../src/components/Item";

describe("Тестирование Item.vue", () => {
  const item = {
    id: "gkbhrlehb",
    title: "Меркурий",
  };

  it("Компонент выводит item.title", async () => {
    const wrapper = shallowMount(Item, {
      props: { item },
    });
    expect(wrapper.text()).toMatch(item.title);
  });

  it("Компонент имеет кнопку удаления элемента", async () => {
    const deleteItem = jest.fn();
    const wrapper = shallowMount(Item, {
      props: { item, deleteItem },
    });
    await wrapper.find("button").trigger("click");
    expect(deleteItem).toBeCalledWith(item.id);
  });
});
