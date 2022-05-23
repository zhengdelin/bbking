<template>
    <div>
        <div
            :class="[
                'group relative py-1 text-sm text-center rounded-sm mb-2 font-bold duration-300',
                bg,
            ]"
            v-hover="`hover:${hoverBg} hover:cursor-pointer`"
            @click="handleToggle"
        >
            {{ toggle ? openText : closeText }}
            <div
                class="absolute right-2 top-1/2 -translate-y-1/2 duration-300"
                v-hover="'group-hover:scale-110'"
            >
                <svg-render-vue
                    :class="['duration-500', { 'rotate-180': toggle }]"
                    type="arrow_down"
                ></svg-render-vue>
            </div>
        </div>
        <div
            class="overflow-hidden duration-500"
            :style="{ height }"
            ref="main"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
const props = defineProps({
    initOpen: { type: Boolean, default: false },
    closeText: { type: String, default: "展開" },
    openText: { type: String, default: "摺疊" },
    bg: { type: String, default: "bg-cyan-300" },
    hoverBg: { type: String, default: "bg-cyan-400" },
});
const { initOpen, closeText, openText, bg, hoverBg } = toRefs(props);

const main = ref();
const toggle = ref(false);

const height = ref(0);

const handleToggle = () => {
    toggle.value = !toggle.value;

    height.value = toggle.value ? main.value.scrollHeight + "px" : 0;
};
onMounted(() => {
    // if (initOpen.value) height.value = main.value.scrollHeight;
    if (initOpen.value) {
        height.value = "auto";
        toggle.value = true;
        let timer = setInterval(() => {
            if (main.value.scrollHeight) {
                height.value = main.value.scrollHeight + "px";

                clearInterval(timer);
            }
        }, 100);
    }
});
</script>

<style scoped></style>
