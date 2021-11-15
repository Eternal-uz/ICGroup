<template>
    <div id="header">
    <nav class="header__nav flex justify-between px-14 py-6">
      <div class="flex items-center">
        <a href="#"
          ><img class="pl-4" src="./assets/images/Logo.png" alt="" />
        </a>
        <p class="font-OpenSans font-semibold">
          METSETNAT<span
            class="text-span bg-logo m-1 px-1 text-white rounded-sm text-xs"
            >club</span>
        </p>
      </div>
      <ul class="flex items-center">
        <li><a href="#" class="mx-2 text-base p-1">Asosiy</a></li>
        <li><a href="#" class="mx-2 text-base p-1">Grantlar</a></li>
        <li><a href="#" class="mx-2 text-base p-1">Soliq Imtiyozlari</a></li>
        <li><a href="#" class="mr-2 text-base"><i class="fas fa-sign-in-alt mr-2"></i>Kirish</a></li>
       <my-dialog v-model:show="dialogVisible" >
        <register/>
       </my-dialog>
        <li> <a href="#" @click="register" class="border-2 rounded-md border-bgblue mx-2 text-base p-1" >Royxatdan O'tish</a></li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>


<script>
import MyDialog from '@/components/UI/MyDialog.vue';
import Register from '@/components/Register.vue';
export default {
  components: { MyDialog, Register },
  name: 'App',
  data(){
    return{
      dialogVisible: false

    }
  },
  methods:{
    register(){
      this.dialogVisible = true
      console.log(this.dialogVisible);
    }
  }
}
</script>




<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
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
