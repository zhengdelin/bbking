<template>
    <template v-if="header_columns.length">
        <th
            v-for="header_column in header_columns"
            :key="header_column"
            class="py-2 px-1"
        >
            {{ header_column }}
        </th>
    </template>
    <template v-else>
        <th v-for="key in keys" :key="key" class="py-2 px-1">
            {{ typeof key === "object" ? TITLE[key.name] : TITLE[key] }}
        </th>
    </template>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { TITLE } from "../../../TITLE";

export default {
    props: {
        keys: {
            type: Array,
            default: () => [],
        },
        header_columns: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { keys, header_columns } = toRefs(props);

        return { keys, header_columns, TITLE };
    },
};
</script>

<style scoped></style>
