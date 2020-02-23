<template>
  <div id="app">
    <Header title="todos" />
    <AddTodo
      v-on:addTodo="addTodo"
    />
    <TodoList
      v-bind:todos="todos"
      v-on:removeTodo="removeTodo"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Todos',
  components: {
    Header,
    AddTodo,
    TodoList,
  },
  data() {
    return {
      todos: [
        { id: '1', title: 'Купить хлеб', completed: false },
        { id: '2', title: 'Купить молоко', completed: false },
        { id: '3', title: 'Купить масло', completed: true },
      ],
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(title) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      this.todos.push(newTodo);
    },
  },
};
</script>

<style scoped>

</style>
