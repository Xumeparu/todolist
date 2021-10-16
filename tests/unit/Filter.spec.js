import { shallowMount } from "@vue/test-utils";
import Filter from "../../src/components/Filter";
import { FILTER_OPTIONS } from "../../src/store/store";

describe("Тестирование компонента Filter.vue", () => {
  it("Компонент вызывает мутацию 'changeFilterByOption'", () => {
    const $store = {
      state: {},
      commit: jest.fn(),
      getters: jest.fn(),
    };

    const wrapper = shallowMount(Filter, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const option = FILTER_OPTIONS.NOT_DONE;

    const select = wrapper.find(".selectBox");
    select.element.value = option;
    select.trigger("change");
    expect($store.commit).toBeCalledWith("changeFilterByOption", option);
  });

  it("Компонент вызывает мутацию 'searchSubstring'", () => {
    const $store = {
      state: {},
      commit: jest.fn(),
      getters: jest.fn(),
    };

    const wrapper = shallowMount(Filter, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const substring = "venus";

    const substrInput = wrapper.find(".substrInput");
    substrInput.element.value = substring;
    substrInput.trigger("input");
    expect($store.commit).toBeCalledWith("searchSubstring", substring);
  });
});
