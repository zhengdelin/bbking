<template>
    <div class="px-10 relative">
        <title-item :title="store_info.name" return_to_route_name="about"></title-item>
        <div v-html="store_info.description"></div>
        <div class="absolute right-0 top-0"><img :src="store_info.logo" alt="logo"></div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import TitleItem from '../../components/Objects/Title/TitleItem.vue';
    export default {
  components: { TitleItem },
        setup(){
            const route = useRoute();
            const id = computed(()=>route.params.id);
            const {state} = useStore();
            const store_info = computed(()=>state.globalHandler.store_infos[id.value]);

            return {store_info};
        }
    }
</script>

<style scoped>

</style>