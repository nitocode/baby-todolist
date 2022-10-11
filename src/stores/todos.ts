import { defineStore, storeToRefs } from "pinia";
import { daddyData } from "@/assets/daddyData";

export const useTodos = defineStore("todos", {
  state: () => ({
    /** @type {{ text: string, id: number, checked: boolean }[]} */
    daddyTodo: daddyData,
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: "all",
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.daddyTodo.filter((todo) => todo.checked);
    },
    unfinishedTodos(state) {
      return state.daddyTodo.filter((todo) => !todo.checked);
    },
    /**
     * @returns {{ text: string, id: number, checked: boolean }[]}
     */
    // filteredTodos(state) {
    //   if (this.filter === 'finished') {
    //     // call other getters with autocompletion ✨
    //     return this.finishedTodos
    //   } else if (this.filter === 'unfinished') {
    //     return this.unfinishedTodos
    //   }
    //   return this.todos
    // },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addDaddyTodo(name: string) {
      // you can directly mutate the state
      this.daddyTodo.push({
        name,
        id: this.nextId++,
        order: this.nextId++,
        checked: false,
        tasks: [],
      });
    },
  },
});
