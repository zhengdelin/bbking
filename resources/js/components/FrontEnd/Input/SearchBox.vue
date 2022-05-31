<template>
    <form class="flex gap-3" @submit.prevent>
        <label class="flex items-center gap-3 px-5 py-4 rounded-md bg-white">
            <svg-render-vue
                class="icon hover:cursor-pointer"
                type="search"
                size="lg"
            />
            <input
                v-model="modelValue"
                ref="input"
                placeholder="搜尋文章或產品"
                class="focus:outline-none placeholder:font-bold font-bold w-[300px]"
                type="search"
            />
        </label>
        <button
            type="submit"
            class="text-white bg-blue-500 hover:bg-blue-400 px-6"
            @click="search"
        >
            搜尋
        </button>
    </form>
</template>

<script>
import { computed, toRefs } from "@vue/runtime-core";

export default {
    props: {
        search: { type: Function, default: () => null },
    },
    emits: ["update:modelValue"],
    setup(props, { emit, attrs }) {
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        return { modelValue, ...toRefs(props) };
    },
};
</script>

<style scoped>
/* .search-container {
    height: 2.5rem;
    padding: 0.5rem 0;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
}
.search-container > input {
    width: 0;
    transition: width 1s ease, padding 1s ease;
}
.search-container:hover > input,
input:focus {
    padding-left: 0.5rem;
    width: 200px;
}
.search-container:hover > .icon {
    color: rgb(59, 130, 246);
} */
</style>
