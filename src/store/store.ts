import { createStore, MutationTree, GetterTree } from "vuex";

export enum FILTER_OPTIONS {
  ALL = "All",
  DONE = "Done",
  NOT_DONE = "Not done",
}

export interface Item {
  id: string;
  title: string;
  isChecked: boolean;
}

export type RootState = {
  items: Item[];
  filterByOption: FILTER_OPTIONS;
  substring: string;
};

export const initialState: RootState = {
  items: [],
  filterByOption: FILTER_OPTIONS.ALL,
  substring: "",
};

export const mutations: MutationTree<RootState> = {
  addItem: (state: RootState, payload: string): void => {
    const newItem = {
      id: Math.random().toString(36).substr(2),
      title: payload,
      isChecked: false,
    };
    state.items.push(newItem);
  },
  deleteItem: (state: RootState, payload: string): void => {
    state.items = state.items.filter((item) => item.id !== payload);
  },
  changeChecked: (state: RootState, payload: string): void => {
    state.items = [
      ...state.items.map(function (item) {
        if (item.id === payload) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      }),
    ];
  },
  editItem: (
    state: RootState,
    payload: { id: string; title: string }
  ): void => {
    state.items = state.items.map(function (item) {
      if (item.id === payload.id) {
        return { ...item, title: payload.title };
      }
      return item;
    });
  },
  changeFilterByOption: (state: RootState, payload: FILTER_OPTIONS): void => {
    state.filterByOption = payload;
  },
  searchSubstring: (state: RootState, payload: string): void => {
    state.substring = payload;
  },
};

export const getters: GetterTree<RootState, RootState> = {
  filterByOption(state: RootState) {
    if (state.filterByOption === FILTER_OPTIONS.DONE) {
      return state.items.filter((item) => item.isChecked);
    }
    if (state.filterByOption === FILTER_OPTIONS.NOT_DONE) {
      return state.items.filter((item) => !item.isChecked);
    }
    return state.items;
  },
  filterOption(state: RootState) {
    return state.filterByOption;
  },
  searchBySubstring(state: RootState) {
    if (state.substring === "") {
      return state.items;
    }
    return state.items.filter((item) =>
      item.title.toLowerCase().includes(state.substring.toLowerCase())
    );
  },
  filteredList(state: RootState, getters) {
    return getters.filterByOption.filter((e: Item) =>
      getters.searchBySubstring.includes(e)
    );
  },
  itemsCount(state: RootState, getters) {
    return getters.filteredList.length;
  },
};

const store = createStore<RootState>({
  state: initialState,
  mutations,
  getters,
});

export default store;
