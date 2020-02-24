import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { id: '1', title: 'Купить хлеб', completed: false },
      { id: '2', title: 'Купить молоко', completed: false },
      { id: '3', title: 'Купить масло', completed: true },
    ],
  },
  mutations: {
    addTodo(state, newTodo): void {
      state.todos.push(newTodo);
    },
    removeTodo(state, id): void {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    toggleTodo(state, id): void {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
  actions: {
  },
  modules: {
  },
});
