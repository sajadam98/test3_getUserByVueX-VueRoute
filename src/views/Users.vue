<template>
  <div>
    <b-container>
      <b-card no-body id="container">
        <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
          <b-nav-item href="#users" @click="scrollIntoView">@Users</b-nav-item>
          <b-nav-item href="#add" @click="scrollIntoView">@AddUser</b-nav-item>
        </b-nav>

        <b-card-body
          id="nav-scroller"
          ref="content"
          style="position:relative; height:300px; overflow-y:scroll;"
        >
          <h4 id="users">Users List</h4>
          <b-table striped hover :items="users">
            <template slot="id" slot-scope="data">
              <a :href="`/users/${data.value}`">{{ data.value }}</a>
            </template>
          </b-table>
          <h4 id="add">Add User</h4>
          <b-input-group size="lg" prepend="Name : ">
            <b-form-input></b-form-input>
          </b-input-group>
          <b-input-group prepend="Email" class="mt-3">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-success">@gmail.com</b-button>
              <b-button variant="outline-primary">@yahoo.com</b-button>
            </b-input-group-append>
          </b-input-group>
          <div>
            <b-form-group label="Status">
              <b-form-radio v-model="selected" name="some-radios" value="Active">Active</b-form-radio>
              <b-form-radio v-model="selected" name="some-radios" value="Inactive">Inactive</b-form-radio>
            </b-form-group>
          </div>
          <div>
            <button class="btn btn-primary" id="btn-add">Add New User</button>
          </div>
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </b-card-body>
      </b-card>
    </b-container>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    toggleUserForm() {
      this.showUserForm = !this.showUserForm;
    }
  }
};
</script>
<style>
#table-title {
}
#users {
  color: blue;
  margin-bottom: 30px;
}
#add {
  color: blue;
  margin-top: 120px;
  margin-bottom: 30px;
}
#btn-add {
  margin-top: 30px;
  margin-bottom: 40px;
}
#container {
  height: 80%;
}
</style>
