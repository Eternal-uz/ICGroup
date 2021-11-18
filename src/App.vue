<template>
  <div class="app">
    <Header />
    <RegAuthModal />
    <log-auth-modal />
  </div>
  <router-view />
</template>


<script>
import Header from "@/components/Header.vue";
import RegAuthModal from "./components/RegAuthModal.vue";
import LogAuthModal from "./components/LogAuthModal.vue";
export default {
  components: { Header, RegAuthModal, LogAuthModal },
  name: "App",
  created(){
    this.$store.dispatch('init_login')
  }
};
</script>




<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
</style>
