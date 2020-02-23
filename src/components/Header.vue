<template>
  <div class="header">
    <h1 class="title">
      {{title}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
};
</script>

<style scoped>
  .header {
    margin: 150px auto 60px;
  }

  .title {
    text-align: center;
    font-weight: 100;
    font-size: 80px;
  }
</style>
