<template>
  <header id="header">
    <nav class="border-gray-200 py-6 px-4 ml-4 ">
      <div
        class="container mx-auto flex flex-wrap items-center justify-between"
      >
        <div class="flex items-center">
          <a href="#"
            ><img class="pl-4" src="@/assets/images/Logo.png" alt="" />
          </a>
          <p class="font-OpenSans font-semibold">
            METSETNAT<span
              class="text-span bg-logo m-1 px-1 text-white rounded-sm text-xs"
              >club</span
            >
          </p>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="
            md:hidden
            ml-3
            text-gray-400
            hover:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-300
            rounded-lg
            inline-flex
            items-center
            justify-center
          "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden md:block w-full md:w-auto">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                @click="this.$router.push('/')"
                class="mx-2 text-base p-1 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rouned  "
                >Asosiy</a
              >
            </li>
            <li><a href="#" class="mx-2 text-base p-1 hover:bg-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Grantlar</a></li>
            <li>
              <a href="#" class="mx-2 text-base p-1 hover:bg-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Soliq Imtiyozlari</a>
            </li>
            <li @click="togglePagesFn" v-if="!userLoggedIn">
              <a href="#" @click.prevent="toggleLogModal" class="mr-2 text-base hover:bg-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                ><i class="fas fa-sign-in-alt mr-2"></i>Kirish</a
              >
            </li>
            <li v-else>
              <a @click.prevent="signout" class="px-2 hover:bg-bgblue border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" href="#">Chikish</a>
            </li>
            <li @click="togglePagesFn">
              <a
                href="#"
                @click.prevent="toggleRegModal"
                :class="{ hidden: userLoggedIn }"
                class="border-2 rounded-md border-bgblue mx-2 text-base p-1 hover:bg-bgblue"
                >Royxatdan O'tish</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations(["toggleLogModal", "toggleRegModal", "togglePagesFn"]),
    ...mapActions(["signout"]),
  },

  computed: {
    ...mapState(["userLoggedIn"]),
  },
};
</script>

<style>
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