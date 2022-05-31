<template>
    <div class="">
        <slot :data="cur_data"></slot>
        <div
            class="bg-white border-t border-t-gray-300 rounded-sm py-4 px-5 flex justify-center relative"
        >
            <div class="flex items-center gap-4 mx-auto relative">
                <button
                    :class="[
                        'border-gray-300 border',
                        cur === 0
                            ? 'hover:cursor-not-allowed bg-gray-300'
                            : 'hover:bg-blue-500 hover:text-white',
                    ]"
                    @click="toPreviousPage"
                >
                    上一頁
                </button>
                <div class="flex gap-2">
                    <div
                        v-for="i in total"
                        :key="i"
                        @click="toPage(i - 1)"
                        :class="[
                            'hover:cursor-pointer hover:underline',
                            { 'text-blue-500 underline': i - 1 === cur },
                        ]"
                    >
                        {{ i }}
                    </div>
                </div>
                <button
                    :class="[
                        'border-gray-300 border',
                        cur < total - 1
                            ? 'hover:bg-blue-500 hover:text-white'
                            : 'hover:cursor-not-allowed bg-gray-300',
                    ]"
                    @click="toNextPage"
                >
                    下一頁
                </button>
            </div>
            <div class="absolute left-5 top-1/2 -translate-y-1/2 font-bold">
                第{{ cur + 1 }}頁
            </div>
            <div class="absolute right-5 top-1/2 -translate-y-1/2 font-bold">
                總共{{ total }}頁
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import usePageController from "../../compositions/pageController";
export default {
    props: {
        per: { type: Number, default: 10 },
        data: { type: [Array, Object], default: () => [] },
    },
    setup(props) {
        const data = computed(() => props.data);
        const { toNextPage, toPreviousPage, cur_data, cur, total, toPage } =
            usePageController(data, { per: props.per, dataChangeTo: 0 });
        return { toNextPage, toPreviousPage, toPage, cur_data, cur, total };
    },
};
</script>

<style scoped></style>
