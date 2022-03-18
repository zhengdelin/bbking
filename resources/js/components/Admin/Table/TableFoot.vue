<template>
  <div class="border-t border-gray-100 bg-white text-center">
    <div class="grid grid-cols-6 gap-4">
      <div class="py-4 pl-2 col-span-3">
        <div class="grid gap-2 grid-flow-col items-center justify-center">
          <svg-render-vue
            type="arrows_left"
            size="lg"
            :class="{
              ' hover:cursor-pointer': props.current_page !== 0,
              ' text-gray-500': props.current_page === 0,
            }"
            @click="props.toFirstPage"
          ></svg-render-vue>
          <svg-render-vue
            type="arrow_left"
            size="lg"
            :class="{
              ' hover:cursor-pointer': props.current_page !== 0,
              ' text-gray-500': props.current_page === 0,
            }"
            @click="props.toPreviousPage"
          ></svg-render-vue>
          <slot name="page_control"></slot>
          <svg-render-vue
            type="arrow_right"
            size="lg"
            :class="{
              ' hover:cursor-pointer': props.current_page !== props.total_pages - 1,
              ' text-gray-500': props.current_page === props.total_pages - 1,
            }"
            @click="props.toNextPage"
          ></svg-render-vue>
          <svg-render-vue
            type="arrows_right"
            size="lg"
            :class="{
              ' hover:cursor-pointer': props.current_page !== props.total_pages - 1,
              ' text-gray-500': props.current_page === props.total_pages - 1,
            }"
            @click="props.toLastPage"
          ></svg-render-vue>
        </div>
      </div>
      <div class="py-4 col-span-2 flex items-center justify-center">
        每頁顯示
        <slot name="per_control"></slot>
        筆
      </div>
      <div class="py-4 flex items-center justify-center">共{{ props.total_pages }}頁</div>
    </div>
  </div>
</template>

<script>
import SvgRenderVue from "../../Objects/SvgRender.vue";

export default {
  components: { SvgRenderVue },
  props:{
      total_pages:{
          type:Number,
          default:0,
      },
      current_page:{
        type:Number,
        default:0,
      },
      toFirstPage:{
        type:Function,
        default:()=>{}
      },
      toPreviousPage:{
        type:Function,
        default:()=>{}
      },
      toLastPage:{
        type:Function,
        default:()=>{}
      },
      toNextPage:{
        type:Function,
        default:()=>{}
      },
  },
  setup(props) {
    // console.log('tableFoot->',props);
      return {props};
  }
};
</script>

<style>
</style>