<template>
    <preview-button @click="toggleShowPreview"></preview-button>
    <InMask class="!fixed" v-show="toggle">
        <div
            class="w-[70vw] lg:w-[80vw] h-[70vh] bg-white rounded-lg p-3 relative"
        >
            <div
                class="p-2 m-3 hover:cursor-pointer absolute top-0 left-0"
                @click="toggleShowPreview"
            >
                <svg-render-vue
                    type="return"
                    class="text-blue-500"
                ></svg-render-vue>
            </div>
            <div class="h-full flex items-center justify-center">
                <img
                    :src="src"
                    class="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] max-h-[90%]"
                />
            </div>
        </div>
    </InMask>
</template>

<script>
import { ref } from "@vue/reactivity";
import PreviewButton from "../Objects/Button/PreviewButton.vue";
import InMask from "./Region/InMask.vue";
import { computed } from "@vue/runtime-core";
export default {
    components: { InMask, PreviewButton },
    props: {
        src: {
            type: String || Array,
            default: "",
        },
    },
    setup(props) {
        //data
        const src = computed(() => props.src);
        //預覽圖片
        const toggle = ref(false);
        const toggleShowPreview = () => {
            toggle.value = !toggle.value;
        };
        return { src, toggle, toggleShowPreview };
    },
};
</script>

<style scoped></style>
