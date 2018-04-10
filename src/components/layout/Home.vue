<template>
<div id="wrapper">
  <Navigation />
  <div id="page-wrapper" class="gray-bg">
    <Header />
    <Breadcrumb />
    <div class="wrapper wrapper-content animated fadeInRight">
      <router-view />
    </div>
    <Footer />
  </div>
</div>
</template>

<script>
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Navigation from './Navigation'
import Footer from './Footer'
export default {
  name: 'Home',
  components: {Header, Breadcrumb, Navigation, Footer},
  data() {
    return {

    }
  },
}
</script>

<style lang="less">
body.mini-navbar .nav-header {
  background-color: #2F4050;
}
</style>
