<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand id="nav-title" href="#">دراک</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <div>
          <b-navbar-item id="show-btn" @click="$bvModal.show('bv-modal-example')">درباره ما</b-navbar-item>
          <b-modal id="bv-modal-example" hide-footer>
            <template slot="modal-title">
              <b>درباره ما</b>
            </template>
            <div class="d-block text-center">
              <h5>
                شرکت هوشمندسازان دراک
                <br />شماره تماس : 09172338020
              </h5>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">بستن</b-button>
          </b-modal>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style>
#nav-title {
  font-size: 28px;
}
#show-btn {
  font-size: 22px;
}
</style>