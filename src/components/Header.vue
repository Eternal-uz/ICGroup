<template>
    <header id="header">
    <nav class="header__nav flex justify-between px-14 py-6">
      <div class="flex items-center">
        <a href="#"
          ><img class="pl-4" src="@/assets/images/Logo.png" alt="" />
        </a>
        <p class="font-OpenSans font-semibold">
          METSETNAT<span
            class="text-span bg-logo m-1 px-1 text-white rounded-sm text-xs"
            >club</span>
        </p>
      </div>
      <ul class="flex items-center flex-row mt-1">
        <li><a href="#" class="mx-2 text-base p-1">Asosiy</a></li>
        <li><a href="#" class="mx-2 text-base p-1">Grantlar</a></li>
        <li><a href="#" class="mx-2 text-base p-1">Soliq Imtiyozlari</a></li>
        <li v-if="!userLoggedIn" ><a href="#" @click.prevent="toggleLogModal"  class="mr-2 text-base"><i class="fas fa-sign-in-alt mr-2"></i>Kirish</a></li>
        <li v-else ><a @click.prevent="signout" class="px-2 text-white" href="#">Chikish</a></li>
        <li> <a href="#" @click.prevent="toggleRegModal"  class="border-2 rounded-md border-bgblue mx-2 text-base p-1" >Royxatdan O'tish</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    name: 'Header',
     methods: {
    ...mapMutations(["toggleLogModal", "toggleRegModal"]),
    ...mapActions(['signout'])

  },
  computed: {
    ...mapState(["userLoggedIn"]),
  },
}
</script>

<style>
.president{
  filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
}
.span-text{
  color: #86868B;
}
.header__nav{
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
}

</style>