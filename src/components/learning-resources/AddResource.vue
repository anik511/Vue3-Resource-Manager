<template>
<base-dialog v-if="error" title="Invalid Input" @close="confirmError">
  <template #default>
    <p>Unfortunately, at least one input value is invalid.</p>
  </template>
  <template #actions>
    <base-button @click="confirmError">Okay</base-button>
  </template>
</base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleinput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="3"
          ref="desinput"
        >
        </textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="utl" ref="urlinput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseCard },
  inject:['addResource'],
  data() {
    return {
      error: false,
    }
  },
  methods: {
    submitData() {
      console.log(this.$refs.titleinput.value);
      if(this.$refs.titleinput.value.trim() ==='' || this.$refs.desinput.value.trim()==='' || this.$refs.urlinput.value.trim() ==='')
      {
        this.error = true;
        return;
      }
      this.addResource(this.$refs.titleinput.value.trim(), this.$refs.desinput.value.trim(), this.$refs.urlinput.value.trim())
    },
    confirmError(){
      this.error = false;
    }
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
