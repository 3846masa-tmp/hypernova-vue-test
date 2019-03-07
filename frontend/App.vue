<style>
</style>

<template>
  <div>
    <h1>Hello Vue.js</h1>
    <p v-if="user">Your name is {{user.name}}.</p>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>
