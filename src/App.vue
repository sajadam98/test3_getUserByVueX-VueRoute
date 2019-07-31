<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["initialUsers"])
  },
  mounted(){
    axios.get("https://sajadamiri-demo.herokuapp.com/api/users")
      .then(response => {
        this.initialUsers(response.data)
      });
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
