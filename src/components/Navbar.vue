<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <!--  -->
        <router-link class="point" tag="b-navbar-brand" :to="{ path: '/' }">
          NavBar
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
            <b-navbar-nav right>
              <router-link class="point" tag="b-nav-item" :to="{ path: '/' }">
                Resource
              </router-link>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout: function(massage) {
      this.loginfo = massage;
      localStorage.removeItem("status");

      console.log("aayfyaufyuafgagfyagyfafgfca", this.loginfo);
    },
  },
  computed: {
    loginfo() {
      console.log("adgfagfg", localStorage.getItem("status"));
      return localStorage.getItem("status");
    },
  },
};
</script>

<style>
.bg-info {
  background-color: #3a0061 !important;
}
.point {
  cursor: pointer;
}
</style>
