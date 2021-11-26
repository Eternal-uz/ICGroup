<template>
  <header id="header">
    <nav class="border-gray-200 py-6 px-4 ml-4 ">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <img class="pl-4" src="@/assets/images/Logo.png" alt="" />
          <router-link :to="{name: 'home'}">
            <p class="font-OpenSans font-semibold">
              METSETNAT<span class="text-span bg-logo m-1 px-1 text-white rounded-sm text-xs">club</span>
            </p>
          </router-link>
        </div>
        <ul class="flex ">
          <li> 
            <router-link to="/"  class="mx-2 text-base p-1 hover:text-bgblue  md:bg-transparent block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rouned  ">Asosiy</router-link></li>
          <li>
            <router-link to="/" class="mx-2 text-base p-1 hover:text-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Grantlar</router-link></li>
          <li>
            <router-link to="/" class="mx-2 text-base p-1 hover:text-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Soliq Imtiyozlari</router-link></li>
          <li v-if="!userLoggedIn"> 
            <router-link to="/about" @click.prevent="toggleLogModal" class="mr-2 text-base hover:text-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
            <i class="fas fa-sign-in-alt mr-2"></i>Kirish</router-link>
          </li>
          <li v-else>
            <router-link :to="{name:'home'}" @click.prevent="signout" class="px-2 hover:text-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
              Chikish</router-link>
          </li>
          <li>
            <router-link to="/" @click.prevent="toggleRegModal"
              :class="{ hidden: userLoggedIn }"
              class="border-2 rounded-md border-bgblue mx-2 text-base p-1 hover:bg-bgblue">Royxatdan O'tish</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <router-view></router-view> 

</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations(["toggleLogModal", "toggleRegModal",]),
    ...mapActions(["signout"]),
  },

  computed: {
    ...mapState(["userLoggedIn"]),
  },
};
</script>

<style scoped >
.president {
  filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
}
.span-text {
  color: #86868b;
}
.header__nav {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
}
</style>