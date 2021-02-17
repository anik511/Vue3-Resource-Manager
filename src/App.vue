<template>
  <div id="nav">
    <!-- <Navbar /> -->
    <!-- <b-container>
      
    </b-container> -->
    <router-view />
  </div>
</template>
<script>
// import Navbar from "./components/Navbar";
export default {
  components: {
    // Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>
