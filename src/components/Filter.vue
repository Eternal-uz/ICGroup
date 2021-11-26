<template>
  <form  class="bg-white rounded-md px-6 items-center py-4">
    <h3 class="font-SFProDisplay font-bold text-2xl">Filter</h3>
    <hr class="my-4" />
    <!-- otm-->
    <div class="my-2">
      <label class="uppercase font-Rubik font-medium text-xs text-black tracking-wider">OTM</label>
      <select name="select" class="w-full rounded-md bg-gray-50 border my-1">
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
    <!-- talabalik turi -->
    <div class="flex flex-col my-4">
      <label class="uppercase font-Rubik font-medium text-xs text-black tracking-wider">Talabalik Turi</label>
      <select name="" class="rounded-md w-full my-1 bg-gray-50 border">
        <option value="">Birinchi tur</option>
        <option value="">Ikkinchi tur</option>
        <option value="">Uchunchi tur</option>
      </select>
    </div>
    <hr class="my-4" />
    <div class="flex justify-between">
    <div class="flex  pr-10 ">
      <button @click.prevent="value = ''"
        class="text-bgblue border-2 border-blue-500  font-SFProText font-medium text-base rounded-md px-4 flex items-center py-1">
        <i class="fas fa-paint-brush block text-base font-bold mr-2 "></i> Tozalash
      </button>
    </div>
    <div class="flex ">
      <button @click="addStudent"
        class="text-white bg-bgblue font-SFProText font-medium text-base rounded-md px-4 flex items-center py-1">
        <i class="fal fa-plus block text-2xl font-bold mr-2"></i> Qo'shish
      </button>
    </div>
    
    </div>
  </form>
</template>

<script>

export default {
  name: "Filter",
  props:{
    dialogVisible: {
      type:Boolean,
      default: false,
      },
    },
  data(){
    return{
    }
  },
  methods:{
    reset(){
      this.seclected = ''
    }
  }
  
};
</script>
