<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3a0061;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 40px 40px 40px 40px;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
