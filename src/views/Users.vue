<template>
  <div>
    <b-container>
      <b-card no-body id="container">
        <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
          <b-nav-item href="#users" @click="scrollIntoView">@Users</b-nav-item>
          <b-nav-item href="#ad" @click="scrollIntoView">@AddUser</b-nav-item>
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
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >I Want To Add New User</b-form-checkbox>
          <div v-if="this.status==='accepted'">
            <h4 id="ad">Add User</h4>
            <b-input-group
              size="lg"
              prepend="Name : "
              :class="{'outline-danger':(hasError && form.name === '')}"
            >
              <b-form-input ref="name" v-model="form.name"></b-form-input>
            </b-input-group>
            <b-input-group
              prepend="Email"
              class="mt-3"
              :class="{'outline-danger':(hasError && form.email === '')}"
            >
              <b-form-input v-model="form.email"></b-form-input>
              <b-input-group-append :class="{'outline-danger':(hasError && emailType === '')}">
                <b-button
                  :variant="emailType === '@gmail.com' ? 'success' : 'outline-success'"
                  @click="gmail"
                >@gmail.com</b-button>
                <b-button
                  :variant="emailType === '@yahoo.com' ? 'primary' : 'outline-primary'"
                  @click="yahoo"
                >@yahoo.com</b-button>
              </b-input-group-append>
            </b-input-group>
            <div>
              <b-form-group label="Status" @change="change">
                <b-form-radio
                  v-model="form.status"
                  name="some-radios"
                  value="Active"
                  :class="{'outline-danger':(hasError && form.status === '')}"
                >active</b-form-radio>
                <b-form-radio
                  v-model="form.status"
                  name="some-radios"
                  value="Inactive"
                  :class="{'outline-danger':(hasError && form.status === '')}"
                >inactive</b-form-radio>
              </b-form-group>
            </div>
            <div>
              <button class="btn btn-primary" id="btn-add" @click="AddUser">Add New User</button>
            </div>
            <b-spinner variant="success" label="Spinning"></b-spinner>
          </div>
        </b-card-body>
      </b-card>
    </b-container>
    <button class="btn btn-primary" id="btn-back" @click="navigate">Back</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import uuid from "vue-uuid";
import router from '../router'

export default {
  data() {
    return {
      status: "not_accepted",
      form: {
        name: "",
        email: "",
        status: ""
      },
      emailType: "",
      hasError: false
    };
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["addUser"]),
    toggleUserForm() {
      this.showUserForm = !this.showUserForm;
    },
    gmail() {
      this.emailType = "@gmail.com";
    },
    yahoo() {
      this.emailType = "@yahoo.com";
    },
    change() {
      console.log(this.form.status);
    },
    AddUser() {
      this.hasError = true;
      if (
        this.form.name != "" &&
        this.form.email != "" &&
        this.form.staus != "" &&
        this.emailType != ""
      ) {
        const user = {
          name: this.form.name,
          email: this.form.email + "" + this.emailType,
          status: this.form.status
        };
        this.addUser(user);
        this.form = {
          name: "",
          email: "",
          status: ""
        };
        this.status = "not_accepted";
      }
    },
    navigate() {
      router.push({name: 'home'})
    }
  }
};
</script>
<style scoped>
#table-title {
}
#users {
  color: blue;
  margin-bottom: 30px;
}
#ad {
  color: blue;
  margin-top: 70px;
  margin-bottom: 30px;
}
#btn-add {
  margin-top: 30px;
  margin-bottom: 40px;
}
#container {
  margin-top: 100px
}
#checkbox-1 {
  margin-top: 20px;
}
.outline-danger {
  border: 3px solid red;
}
#btn-back {
  margin-top: 40px;
  width: 200px;
  border: 3px solid lightblue
}
</style>
