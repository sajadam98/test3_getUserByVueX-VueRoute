<template>
  <div id="page">
    <b-card 
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    title="User Information" 
    tag="article" 
    style="max-width: 30rem;" 
    class="mb-2">
      <b-card-text>
          <div id="info-card">
              <a id="titles"><b>Name : </b></a>
              <a id="values"><b>{{ user.name }}<br></b></a>
              <a id="titles"><b>Email : </b></a>
              <a id="values"><b>{{ user.email }}<br></b></a>
              <a id="titles"><b>Status : </b></a>
              <a id="values"><b>{{ user.status }}<br></b></a>
          </div>
      </b-card-text>

      <b-button href="#" variant="primary" id="btn-back">Back</b-button>
    </b-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
var _ = require("lodash");

export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapState(["users"])
  },
  mounted() {
    const user = _.find(this.users, { id: parseInt(this.$route.params.id) });
    this.user = user;
  }
};
</script>
<style>
.mb-2 {
  margin: 15% 20%;
}
#titles {
    font-size: 20px;
}
#values {
    color: blue;
}
#btn-back {
    margin-top: 25px;
}
#info-card {
    margin-top: 20px
}
</style>
