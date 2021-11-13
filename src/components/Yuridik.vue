<template>
  <form class=" pl-5" >
    <!-- ism -->
    <div class="mb-3">
      <label class=" inline-block mb-2 uppercase tracking-wider
          text-xs font-medium font-Rubik ">
          F.I.Sh. (Familiya Ism Sharifingiz)
      </label>
      <input type="text" class=" block w-full py-1.5 px-3 border border-gray-300
          transition duration-500 focus:outline-none focus:border-black rounded max-w-xl"
        placeholder="Abdullayev Abdulla Abdulla o’g’li" />
    </div>
    <!-- Telefon -->
    <div class="mb-3">
      <label class=" inline-block mb-2 uppercase tracking-wider text-xs
          font-medium font-Rubik" >Telefon raqamingiz</label>
      <input type="tel" class=" block w-full py-1.5 px-3 border border-gray-300 transition duration-500
          focus:outline-none focus:border-black rounded max-w-xl "
          placeholder="+998 00 000-00-00"
      />
    </div>
  </form>
</template>

<script>
export default {
    name: 'Registration'
};
</script>
