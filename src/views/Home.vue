<template>
  <div class="home">
    <Header/>
    <img alt="Vue logo" src="../assets/logo.png" id="img-logo">
    <Body />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Body from '@/components/Body.vue'

export default {
  name: 'home',
  components: {
    Header,
    Body
  }
}
</script>
<style scoped>
#img-logo{
  height: 300px;
  width: 300px
}
</style>
