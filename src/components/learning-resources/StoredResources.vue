<template>
  <div>
    <ul>
      <learning-resource
        v-for="(resources,index) in storedResources"
        :key="index"
        :id ="resources.id"
        :title="resources.title"
        :description="resources.description"
        :link="resources.link"
      ></learning-resource>
    </ul>
  </div>
</template>

<script>
import LearningResource from "./LearningResource";

export default {
  components: {
    LearningResource,
  },
  inject: ["storedResources"],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
