<template>
  <pro-header/>
  <div class="container flex justify-between max-w-full lg:max-w-full lg:px-6 md:px-4 my-2 xl:px-8 ">
    <ul class="flex items-center justify-center">
      <li class="">
        <a class=" text-lg border border-blue-300 px-4 py-1 mx-0 rounded-md text-bgblue hover:text-white hover:bg-bgblue ">DASHBOARD</a>
      </li>
      <li class="">
        <a class=" text-lg border border-blue-300 border-collapse px-4 py-1 mx-0 rounded-md text-bgblue hover:text-white hover:bg-bgblue " >HOMIYLAR</a>
      </li>
      <li class="">
        <a class=" text-lg border border-blue-300 px-4 py-1 mx-0 rounded-md text-bgblue hover:text-white hover:bg-bgblue ">TALABALAR</a>
      </li>
    </ul>
    <div class="flex relative focus:outline-none">
      <span class="absolute left-2 top-2 text-gray-400"><i class="fas fa-search"></i> </span>
      <input class=" border-0 outline-white pl-7 focus:outline-white bg-gray-200 rounded-mdw-full" type="text" placeholder="izlash" />
      <div @click="toggleDialogShow" class="flex relative ml-2">
        <my-dialog v-show="dialogVisible"> 
          <Filter/>
        </my-dialog>
        <i class="fas fa-filter absolute top-3 left-2 text-blue-500"></i>
        <button class="bg-btnColor mr-5 pl-7 px-2 rounded text-blue-500">
          Filter
        </button>
      </div>
    </div>
  </div>
    <div class="flex justify-end ">
      <my-button @click="$router.push('/add')" class="flex items-center mx-8 mb-2 ">
        <i class="fal fa-plus text-2xl font-bold mx-4"></i>Talaba qo'shish</my-button>
    </div>
  <div class="bg-gray-200  ">
    
    <talaba/>
    
  </div>
</template>

<script>
import Talaba from '@/components/Talaba.vue';
import MyButton from '@/components/UI/MyButton.vue'
import ProHeader from '@/components/UI/ProHeader.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import Filter from '@/components/Filter.vue';
export default {
  components: { Talaba, ProHeader, MyButton, MyDialog, Filter  },
  name: "Talabalar",
  data(){
    return{
      // showDialog: false,
      dialogVisible: false
    }
  },
  methods:{
    toggleDialogShow(){
      this.dialogVisible = !this.dialogVisible

      console.log(this.dialogVisible);
    },
  },
};
</script>

<style scooped>
.no-outline {
  outline: none;
}
.no-outline:focus {
  outline: none;
}

</style>