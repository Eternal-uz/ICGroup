<template>
  <div class="home">
      <div class="w-full justify-center flex">
    <!-- the left side -->
    <div class="w-3/5 pl-16 pt-24">
      <h1 class="font-Poppins font-bold text-4xl tracking-wide ml-4 mb-8">
        Homiy sifatida ariza topshirish
      </h1>
      <!-- tabs -->
      <ul class="flex flex-wrap max-w-xl pl-5 ">
        <li class="flex-auto text-center">
          <a class=" block
              rounded
              py-3
              transition
              font-Rubik
              uppercase
              text-xs
              font-medium
              text-center
              tracking-wider
              w-full "
               :class="{
                  'hover:text-white text-white bg-bgblue': tab === 'Jismoniy',
                  'hover:text-blue-600 ': tab === 'Yuridik',
                }"
            href="#"
             @click.prevent="tab = 'Jismoniy'"
            >Jismoniy shaxs</a
          >
        </li>
        <li class="flex-auto text-center">
          <a class=" block
              rounded
              py-3
              transition
              font-Rubik
              uppercase
              text-xs
              font-medium
              text-center
              tracking-wider
              ml-4
              w-full 
              "
            :class="{
                  'hover:text-white text-white bg-bgblue': tab === 'Yuridik',
                  'hover:text-blue-600': tab === 'Jismoniy',
                }"
            href="#"
            @click.prevent="tab = 'Yuridik'"
            >Yuridik shaxs</a
          >
        </li>
      </ul>
      <div class="forms max-w-xl ">
        <Jismoniy v-show="tab ==='Jismoniy'" />
        <!-- Registration Form -->
        <Yuridik v-show="tab === 'Yuridik'"/>
      </div>
      <!-- payment -->
      <Tolov/>
    </div>
    <!-- the right side -->
    <div class="flex flex-col justify-between bg-gray-50 w-2/5">
     <div class="px-5 py-10">
       <div class="p-10">
        <h2 class="font-SFProDisplay font-medium text-justify  text-xl">
          Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
          oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik
          kerak.
        </h2>
       </div>
      <div class="flex px-10 mt-3">
        <img src="@/assets/images/president.png" class="president object-cover w-14 h-14 rounded-2xl my-3 mr-3 " />
        <p class="font-SFProText font-semibold text-lg text-justify tracking-tight my-3 mr-3 ">
          Shavkat Mirziyoyev <br />
          <span class="font-SFProText text-sm span-text   "> O‘zbekiston Respublikasi Prezidenti </span>
        </p>
      </div>
     </div>
      <div class="flex items-end justify-end">
        <img src="@/assets/images/rightBg.png" class="" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Jismoniy from '@/components/Jismoniy.vue'
import Yuridik from '@/components/Yuridik.vue'
import Tolov from '@/components/Tolov.vue'
export default {
  name: 'Home',
  data(){
    return{
      tab: 'Jismoniy'
    }
  },
  components: { Jismoniy, Yuridik, Tolov },

}
</script>
