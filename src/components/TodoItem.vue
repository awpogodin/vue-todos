<template>
    <div class="todoItem">
      <v-checkbox
        color="#E91E63"
        v-model="todo.completed"
      />
      <span
        class="title"
        v-on:click="todo.completed = !todo.completed"
        :class="{done: todo.completed}"
      >
        {{todo.title}}
      </span>
      <v-btn v-on:click="$emit('onRemoveTodo', todo.id)" text icon>
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .todoItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .title {
    display: block;
    margin: 0 15px;
    flex: 2;
    font-size: 18px;
    cursor: pointer;
  }

  /*noinspection CssUnusedSymbol*/
  .done {
    text-decoration: line-through;
  }
</style>
