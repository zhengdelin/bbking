<template>
    <div>
        <template v-if="isNullOrEmpty">
            <EmptyItem>
                <slot name="emptyText"></slot>
                <template #button>
                    <slot name="button"></slot>
                </template>
            </EmptyItem>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import EmptyItem from "./EmptyItem.vue";
import { computed } from "@vue/runtime-core";
export default {
    components: { EmptyItem },
    props: {
        data: { type: undefined, default: "" },
    },
    setup(props) {
        const { data } = toRefs(props);
        const type = computed(() => Object.prototype.toString.call(data.value));
        const isNullOrEmpty = computed(() => {
            switch (type.value) {
                case "[object Array]":
                    return data.value.length === 0;
                case "[object Object]":
                    return Object.keys(data.value).length === 0;
                default:
                    return !data.value;
            }
        });
        // console.log(Object.prototype.toString.call({}));
        //[object String]
        // const type =
        return { data, isNullOrEmpty };
    },
};
</script>

<style scoped></style>
