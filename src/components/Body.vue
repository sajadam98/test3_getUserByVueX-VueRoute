<template>
  <div id="home-page">
    <b-card
      title="Users WebPage"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
      id="card-view"
    >
      <b-button href="#" variant="primary" id="btn_users">Users</b-button>
    </b-card>
  </div>
</template>
<script>
export default {};
</script>
<style>
#card-view {
  font-size: 24px;
  margin-left: 30%;
  margin-right: 30%;
}
#btn_users {
  margin-top: 30px;
  width: 60%;
}
</style>
