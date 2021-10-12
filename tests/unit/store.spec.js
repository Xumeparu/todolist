import { FILTER_OPTIONS, getters, initialState } from "../../src/store/store";
import { createStore } from "vuex";

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

describe("Тестирование getters", () => {
  it("filterByOption возвращает список всех дел", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.ALL,
    };

    const length = testState.items.length;
    const result = getters.filterByOption(testState);
    expect(result.length).toEqual(length);
  });

  it("filterByOption возвращает список лишь выполненных дел", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.DONE,
    };

    const length = testState.items.length;
    const result = getters.filterByOption(testState);
    expect(result.length).toEqual(length - 2);
  });

  it("filterByOption возвращает список лишь невыполненных дел", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.NOT_DONE,
    };

    const length = testState.items.length;
    const result = getters.filterByOption(testState);
    expect(result.length).toEqual(length - 1);
  });

  it("filterOption возвращает флаг FILTER_OPTIONS.ALL", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.ALL,
    };

    const result = getters.filterOption(testState);
    expect(result).toEqual(testState.filterByOption);
  });

  it("filterOption возвращает флаг FILTER_OPTIONS.DONE", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.DONE,
    };

    const result = getters.filterOption(testState);
    expect(result).toEqual(testState.filterByOption);
  });

  it("filterOption возвращает флаг FILTER_OPTIONS.NOT_DONE", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.NOT_DONE,
    };

    const result = getters.filterOption(testState);
    expect(result).toEqual(testState.filterByOption);
  });

  it("searchBySubstring возвращает элемент по правильной подстроке", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.NOT_DONE,
      substring: "cur",
    };

    const length = testState.items.length;
    const result = getters.searchBySubstring(testState);
    expect(result.length).toEqual(length - 2);
    expect(result[0].title).toContain(testState.items[0].title);
  });

  it("filteredList возвращает отфильтрованный список", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.NOT_DONE,
      substring: "cur",
    };

    const store = createStore({
      state: testState,
      getters,
    });

    const length = testState.items.length;
    const result = store.getters.filteredList;
    expect(result.length).toEqual(length - 2);
    expect(result[0].title).toContain(testState.items[0].title);
  });

  it("itemsCount возвращает количество элементов в списке", () => {
    const testState = {
      ...initialState,
      items,
      filterByOption: FILTER_OPTIONS.DONE,
    };

    const store = createStore({
      state: testState,
      getters,
    });

    const length = testState.items.length;
    const result = store.getters.itemsCount;
    expect(result).toEqual(length - 2);
  });
});
