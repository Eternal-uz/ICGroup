<template>
        <div class="payment pl-5  max-w-xl w-full">
            <h2 class="font-Rubik text-xs font-medium tracking-wide  uppercase mb-1 mt-3 text-tcolor">To‘lov summasi</h2>
        <div class="buttons grid grid-cols-3 grid-rows-2 gap-1">
          <button class=" btn
              text-lg
              font-Rubik font-medium
              text-tcolor
              border-2
              rounded-sm
              hover:bg-gray-200
            "
          >
            1 000 000
            <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
          </button>
          <button
            class="
              btn
              text-lg
              font-Rubik font-medium
              text-tcolor
              border-2
              rounded-sm
              hover:bg-gray-200
            "
          >
            5 000 000
            <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
          </button>
          <button
            class="
              btn
              text-lg
              font-Rubik font-medium
              text-tcolor
              border-2
              rounded-sm
              hover:bg-gray-200
            "
          >
            7 000 000
            <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
          </button>
          <button
            class="
              btn
              text-lg
              font-Rubik font-medium
              text-tcolor
              border-2
              rounded-sm
              hover:bg-gray-200
            "
          >
            10 000 000
            <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
          </button>
          <button class="
              btn
              text-lg
              font-Rubik font-medium
              text-tcolor
              border-2
              rounded-sm
              hover:bg-gray-200"
          >
            30 000 000
            <span class="text-uzs text-xs font-Rubik font-normal">UZS</span>
          </button>
          <button
            class="
              btn
              text-lg
              font-Rubik font-medium
              text-tcolor
              border-2
              rounded-sm
              hover:bg-gray-200
            "
          >
            BOSHQA
          </button>
        </div>
        <my-button type="submit" >
          Yuborish
        </my-button>
      </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
    name: 'Tolov',
    components:{MyButton,}
}
</script>

