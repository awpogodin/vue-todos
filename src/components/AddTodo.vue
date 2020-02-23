<template>
    <div class="addTodo">
      <v-text-field
        class="input"
        label="Todo"
        v-model="input"
      ></v-text-field>
      <v-btn
        class="btn"
        color="#3F51B5"
        text
        v-on:click="onAddHandler"
      >
        Add
      </v-btn>
    </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      input: '',
    };
  },
  methods: {
    onAddHandler() {
      if (this.input.trim()) {
        this.$emit('addTodo', this.input);
        this.input = '';
      }
    },
  },
};
</script>

<style scoped>
  .addTodo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>
