import { mount } from "@vue/test-utils";
import AddingForm from "../../src/components/AddingForm";

describe("Тестирование AddingForm.vue", () => {
  it("Компонент добавляет элемент", async () => {
    const title = "Земля";
    const addItem = jest.fn();
    const wrapper = mount(AddingForm, {
      props: { addItem },
    });
    const input = wrapper.find("input");
    const form = wrapper.find("form");

    await input.setValue(title);
    await form.trigger("submit");
    expect(addItem).toBeCalledWith(title);
    expect(input.element.value).toBe("");
  });
});
