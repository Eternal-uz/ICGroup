<template>
    <Header/>
    <RegAuthModal/>
    <log-auth-modal/>
  <router-view />
</template>


<script>
import Header from '@/components/Header.vue'
import RegAuthModal from './components/RegAuthModal.vue'
import LogAuthModal from './components/LogAuthModal.vue'
export default {
  components: { Header, RegAuthModal, LogAuthModal },
    name: 'App',
 
}
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
