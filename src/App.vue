<template>
  <div class="app">
    <reg-auth-modal />
    <log-auth-modal />
  </div>
  <router-view/>
</template>


<script>
import RegAuthModal from "./components/RegAuthModal.vue";
import LogAuthModal from "./components/LogAuthModal.vue";
export default {
  components: { RegAuthModal, LogAuthModal },
  name: "App",
  created(){
    this.$store.dispatch('init_login')
  }
};
</script>




<style >
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

</style>
