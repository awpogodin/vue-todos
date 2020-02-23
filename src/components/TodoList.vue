<template>
    <div class="todoList">
      <TodoItem
        v-for="todo of todos"
        :todo="todo"
        :key="todo.id"
        v-on:onRemoveTodo="onRemoveTodo"
      />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
  methods: {
    onRemoveTodo(id) {
      this.$emit('removeTodo', id);
    },
  },
};
</script>

<style scoped>

</style>
