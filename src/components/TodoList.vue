<template>
    <div class="todoList">
      <TodoItem
        v-for="todo of todos"
        :todo="todo"
        :key="todo.id"
        v-on:onRemoveTodo="onRemoveTodo"
        v-on:onToggleTodo="onToggleTodo"
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
      this.$emit('onRemoveTodo', id);
    },
    onToggleTodo(id) {
      this.$emit('onToggleTodo', id);
    },
  },
};
</script>

<style scoped>

</style>
