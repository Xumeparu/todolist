import { shallowMount } from "@vue/test-utils";
import Item from "../../src/components/Item";

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

const item = items[0];

describe("Тестирование Item.vue", () => {
  it("Компонент выводит item.title", () => {
    const wrapper = shallowMount(Item, {
      props: { item },
    });
    expect(wrapper.text()).toMatch(item.title);
  });

  it("Компонент вызывает мутацию 'changeChecked'", () => {
    const $store = {
      state: {},
      commit: jest.fn(),
    };

    const wrapper = shallowMount(Item, {
      global: {
        mocks: {
          $store,
        },
      },
      props: { item },
    });

    const input = wrapper.find(".itemInput");
    input.trigger("click");
    expect($store.commit).toBeCalledWith("changeChecked", item.id);
  });

  it("Компонент вызывает мутацию 'deleteItem'", () => {
    const $store = {
      state: {},
      commit: jest.fn(),
    };

    const wrapper = shallowMount(Item, {
      global: {
        mocks: {
          $store,
        },
      },
      props: { item },
    });

    const button = wrapper.find(".deleteBtn");
    button.trigger("click");
    expect($store.commit).toBeCalledWith("deleteItem", item.id);
  });

  it("Компонент вызывает мутацию 'editItem'", () => {
    const $store = {
      state: {},
      commit: jest.fn(),
    };

    const wrapper = shallowMount(Item, {
      global: {
        mocks: {
          $store,
        },
      },
      props: { item },
    });

    const newTitle = "Mars";

    const editBtn = wrapper.find(".editBtn");
    const editInput = wrapper.find(".editInput");
    const saveBtn = wrapper.find(".saveBtn");

    editBtn.trigger("click");
    editInput.element.value = newTitle;
    editInput.trigger("input");
    saveBtn.trigger("click");
    expect($store.commit).toBeCalledWith("editItem", {
      id: item.id,
      title: item.title,
    });
  });
});
