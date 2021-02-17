<template>
  <div>
    <TheHeader :title="'My Resources'" />
    <base-card>
      <base-button
        @click="setSelectedTab('StoreResources')"
        :mode="storeResourcesTab"
      >
        Store Resources
      </base-button>
      <base-button
        @click="setSelectedTab('AddResource')"
        :mode="addResourceTab"
      >
        Add Resources
      </base-button>
    </base-card>
    <component :is="selectedtab"></component>
  </div>
</template>

<script>
import StoreResources from "../components/learning-resources/StoredResources";
import AddResource from "../components/learning-resources/AddResource";
import TheHeader from "../components/Layout/TheHeader";
export default {
  components: {
    TheHeader,
    StoreResources,
    AddResource,
  },
  data() {
    return {
      selectedtab: "StoreResources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  computed: {
    storeResourcesTab() {
      return this.selectedtab === "StoreResources" ? null : "flat";
    },
    addResourceTab() {
      return this.selectedtab === "AddResource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      console.log(tab);
      this.selectedtab = tab;
      console.log(this.selectedtab);
    },
    addResource(title, description, url){
      const newstoredResources = {
        id: new Date().toISOString(),
        title : title,
        description: description,
        link : url
      };
      this.storedResources.unshift(newstoredResources);
      this.selectedtab = 'StoreResources';
    },
    removeResource(id){
      var index = this.storedResources.indexOf(id);
      this.storedResources.splice(index,1);
    }
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
};
</script>

<style></style>
