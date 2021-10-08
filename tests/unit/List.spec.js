import { mount } from "@vue/test-utils";
import List from "../../src/components/List";
import createStore from "vuex";
import store from "../../src/store/store";

describe("List.vue testing", () => {
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
    },
  });

  it("Component shows a list of items", async () => {
    const actual = getters.filteredList;
    expect(actual).toBe(3);
  });
});
