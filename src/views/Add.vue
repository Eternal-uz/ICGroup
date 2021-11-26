<template >
  <pro-header class="shadow-lg"/>
  <div class="w-full h-screen bg-gray-50">
  <div class="container flex  max-w-full lg:max-w-full lg:px-6 md:px-4 items-center xl:px-8 bg-white  py-4">
    <router-link to="/talabalar" class="font-SFProDisplay font-bold text-2xl px-8 " > <i class="fas fa-arrow-left mr-2"></i>
      Talaba Qo'shish
    </router-link>
  </div>
  <div class="container flex max-w-full justify-center  lg:max-w-full lg:px-6 md:px-4  xl:px-8 py-8">
    <form class="bg-white rounded-md w-2/4 px-6 items-center py-4">
      <div class="flex ">
        <div class="flex flex-col w-2/4 mr-2">
          <label class="uppercase font-Rubik font-medium text-xs text-black tracking-wider">f.i.ish (familiya ism sharif)</label>
          <input class="bg-gray-50 rounded-md box-border outline-none" type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li"/>
        </div>
        <div class="flex flex-col w-2/4 pl-2">
          <label class="uppercase font-Rubik font-medium text-xs text-black tracking-wider">telefon taqam</label>
          <input class="bg-gray-50 rounded-md box-border outline-none" type="tel" placeholder="+998 00 000 00 00 " />
        </div>
      </div>
      <div>
        <label class="uppercase font-Rubik font-medium text-xs text-black tracking-wider">OTM</label>
        <select name="select" class="w-full rounded-md bg-gray-50 border">
        <label for="select">OTM ni tanlang</label>
          <option value="university 0">University 0</option>
          <option value="university 1">University 1</option>
          <option value="university 2">University 2</option>
          <option value="university 3">University 3</option>
          <option value="university 4">University 4</option>
          <option value="university 5">University 5</option>
          <option value="university 6">University 6</option>
          <option value="university 7">University 7</option>
          <option value="university 8">University 8</option>
          <option value="university 9">University 9</option>
        </select>
      </div>
      <div class="flex">
        <div class="flex flex-col w-2/4 mr-2">
          <label class="uppercase font-Rubik font-medium text-xs text-black tracking-wider">Talabalik Turi</label>
          <select name=""  class="rounded-md bg-gray-50 border">
            <option value="">Birinchi tur</option>
            <option value="">Ikkinchi tur</option>
            <option value="">Uchunchi tur</option>
          </select>
        </div>
        <div class="flex flex-col w-2/4 pl-2">
          <label class="uppercase  font-Rubik font-medium text-xs text-black tracking-wider">kontrakt summari</label>
          <input class="bg-gray-50  rounded-md box-border outline-none" type="number" placeholder="Summani kiriting" />
        </div>
      </div>
      <hr class="my-4">
      <div class="flex justify-end">
      <button @click="addStudent" class=" text-white bg-bgblue font-SFProText  font-medium text-base rounded-md px-4  flex items-center py-1 ">
        <i class="fal fa-plus block text-2xl font-bold mr-2"></i> Qo'shish
      </button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import ProHeader from '@/components/UI/ProHeader.vue'
export default {
  components:{ProHeader},
  name: "Add",
};
</script>


