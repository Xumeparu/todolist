import { createStore } from "vuex";

export enum FILTER_OPTIONS {
  ALL = "All",
  DONE = "Done",
  NOT_DONE = "Not done",
}

type Item = {
  id: string;
  title: string;
  isChecked: boolean;
};

export type AppStore = {
  items: Item[];
  filterByOption: FILTER_OPTIONS;
  substring: string;
};

export default createStore({
  state(): AppStore {
    return {
      items: [
        { id: "0", title: "Mercury", isChecked: false },
        { id: "1", title: "Venus", isChecked: false },
      ],
      filterByOption: FILTER_OPTIONS.ALL,
      substring: "",
    };
  },
  mutations: {
    addItem(state: AppStore, payload: string) {
      const newItem = {
        id: Math.random().toString(36).substr(2),
        title: payload,
        isChecked: false,
      };
      state.items.push(newItem);
    },
    deleteItem(state: AppStore, payload: string) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    changeChecked(state: AppStore, payload: string) {
      state.items = [
        ...state.items.map(function (item) {
          if (item.id === payload) {
            return { ...item, isChecked: !item.isChecked };
          }
          return item;
        }),
      ];
    },
    editItem: (state: AppStore, payload: { id: string; title: string }) => {
      state.items = state.items.map(function (item) {
        if (item.id === payload.id) {
          return { ...item, title: payload.title };
        }
        return item;
      });
    },
    changeFilterByOption(state: AppStore, payload: FILTER_OPTIONS) {
      state.filterByOption = payload;
    },
    searchSubstring(state: AppStore, payload: string) {
      state.substring = payload;
    },
  },
  actions: {},
  getters: {
    filterByOption(state: AppStore) {
      if (state.filterByOption === FILTER_OPTIONS.DONE) {
        return state.items.filter((item) => item.isChecked);
      }
      if (state.filterByOption === FILTER_OPTIONS.NOT_DONE) {
        return state.items.filter((item) => !item.isChecked);
      }
      return state.items;
    },
    filterOption(state: AppStore) {
      return state.filterByOption;
    },
    searchBySubstring(state: AppStore) {
      if (state.substring === "") {
        return state.items;
      }
      return state.items.filter((item) =>
        item.title.toLowerCase().includes(state.substring.toLowerCase())
      );
    },
    filteredList(state: AppStore, getters) {
      return getters.filterByOption.filter((e: Item) =>
        getters.searchBySubstring.includes(e)
      );
    },
  },
});
