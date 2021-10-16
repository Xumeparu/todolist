import { shallowMount } from "@vue/test-utils";
import AddingForm from "../../src/components/AddingForm";

describe("Тестирование AddingForm.vue", () => {
  it("Компонент вызывает мутацию 'addItem'", () => {
    const title = "Stay alive";
    const $store = {
      state: {},
      commit: jest.fn(),
    };

    const wrapper = shallowMount(AddingForm, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    const input = wrapper.find("input");
    const form = wrapper.find("form");

    input.element.value = title;
    input.trigger("input");
    form.trigger("submit");
    expect($store.commit).toBeCalledWith("addItem", title);
  });
});
