<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
  methods: {},
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #ffffff;
  border: 1px solid #3a0061;
  color: #3a0061;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  /* border-radius: 40px 40px 40px 40px; */
  transition: 0.5s;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;

  color: #ffffff;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
  transition: 0.5s;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
  color: #3a0061;
}
</style>
