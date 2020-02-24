<template>
  <div id="app">
    <Header title="todos" />
    <AddTodo
      v-on:onAddTodo="onAddTodo"
    />
    <TodoList
      v-bind:todos="todos"
      v-on:onRemoveTodo="onRemoveTodo"
      v-on:onToggleTodo="onToggleTodo"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
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
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    ...mapMutations(['addTodo', 'removeTodo', 'toggleTodo']),
    onRemoveTodo(id) {
      this.removeTodo(id);
    },
    onAddTodo(title) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      this.addTodo(newTodo);
    },
    onToggleTodo(id) {
      this.toggleTodo(id);
    },
  },
};
</script>

<style scoped>

</style>
