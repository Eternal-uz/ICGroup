<template>
  <div>
    <h3 class="font-Rubik text-xs font-medium tracking-wide  uppercase mb-1 mt-3 text-tcolor">To‘lov summasi</h3>
    <div class="flex flex-wrap">
      <div class="relative p-2 ">
       <label for="1000" :class="{border: !chosen}"  class="relative cursor-pointer border-blue-500 rounded-md py-1 px-2">
        <input @click="chosen = !chosen"  type="radio" id="1000" value="1" class="" />1000
          <i :class="{hidden: chosen}" class="fas fa-check bg-blue-500 rounded-xl text-white absolute  tick "></i>
          <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
        </label>
      </div>
      <div class=" p-2">
        <input @click="chosen = !chosen"  type="radio" id="5000"  value="5" />5000
        <label :class="{border: !chosen}" for="5000" class="relative cursor-pointer border-blue-500 rounded-md py-1 ">
          <i :class="{hidden: chosen}"  class="fas fa-check  absolute bg-blue-500 rounded-xl text-white  tick"></i>
          <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
      </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'radioSection',
  data(){
    return {
      chosen: false,
    };
  },
  methods:{
    picked(){
      this.chosen = !this.chosen;
      console.log(this.chosen);
    }
  }
}
</script>

<style scoped lang="scss">
.tick{
  top: -5px;
  right: -5px;
}
input[type="radio"] {
  display: none;
}


</style>