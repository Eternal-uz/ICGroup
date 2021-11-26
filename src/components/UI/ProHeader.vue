<template>
    <div class="container max-w-full lg:max-w-full lg:px-8 md:w-full md:px-4 md:pr-2 flex py-2 xl:px-12 justify-between drop-shadow-md shadow-sm " >
     <div class="flex items-center">
      <img class="pl-6" src="@/assets/images/Logo.png" alt="" />
      <router-link :to="{ name: 'talabalar' }">
        <p class="font-OpenSans font-semibold">METSETNAT</p>
        <span class="text-span bg-teal m-1 px-1 text-white rounded-sm text-xs">pro</span>
      </router-link>
    </div>
    <ul class="flex px-4 py-2">
      <li class=" block text-xl bg-gray-100 items-center rounded-md justify-center px-1">name
        <i class="fas fa-user-alt text-white bg-green-700 p-2 rounded-md m-1" ></i>
      </li>
      <li class="text-white flex items-center justify-center">
        <i class="fas fa-sign-out-alt bg-gray-500 text-xl ml-8 rounded-md px-1"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'ProHeader',
}
</script>

<style>

</style>