<template>
    <div class="flex items-center">
        <button
            @click="decrement"
            class="border border-gray-200 px-2 py-1 hover:bg-gray-200"
        >
            <svg-render-vue type="minus"></svg-render-vue>
        </button>
        <input
            type="text"
            id="amount"
            v-model="amount"
            class="px-1 py-1 text-center"
            :style="{ width: getInputWidth }"
            @change="emitAmount"
        />
        <button
            @click="increment"
            class="border border-gray-200 px-2 py-1 hover:bg-gray-200"
        >
            <svg-render-vue type="plus"></svg-render-vue>
        </button>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
    props: {
        value: {
            type: [Number, String],
            default: 1,
        },
    },
    emits: ["update:value", "decreaseLowerThan0"],

    setup(props, { emit }) {
        /* 數量 */
        const amount = ref(props.value);
        /* 字串長度 */
        const amount_length = computed(() => amount.value.toString().length);
        /* 增加減少 */
        const increment = () => {
            amount.value++;
            emitAmount();
        };
        const decrement = () => {
            if (amount.value === 1) {
                emit("decreaseLowerThan0");
            } else {
                amount.value--;
                emitAmount();
            }
        };
        const emitAmount = () => {
            if (amount.value) {
                amount.value = amount.value
                    .toString()
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1");
                amount.value = Number(amount.value);
            }
            if (amount.value <= 0) {
                emit("decreaseLowerThan0");
                amount.value = 1;
            }
            emit("update:value", amount.value);
        };
        const getInputWidth = computed(
            () => (amount_length.value < 3 ? 3 : amount_length.value) + "rem"
        );
        return {
            amount,
            increment,
            decrement,
            getInputWidth,
            emitAmount,
        };
    },
};
</script>

<style scoped></style>
