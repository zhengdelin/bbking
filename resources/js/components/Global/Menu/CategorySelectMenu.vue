<template>
    <CollapseContainer close-text="展開選擇類別" init-open>
        <SelectMenu
            class="mb-4"
            option-value-key="name"
            :options="category_groups"
            v-model="cur_category_group"
            @update:modelValue="changeCategory"
        >
            <template #default="{ item }">
                <div>{{ item.name }}</div>
            </template>
        </SelectMenu>
        <SelectMenu
            option-value-key="id"
            :options="categories[cur_category_group]"
            v-model="cur_category"
        >
            <template #default="{ item }">
                <div>{{ item.name }}</div>
            </template>
        </SelectMenu>
    </CollapseContainer>
</template>

<script>
import SelectMenu from "./SelectMenu.vue";
import CollapseContainer from "../CollapseContainer.vue";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
export default {
    components: { SelectMenu, CollapseContainer },
    props: { categoryGroup: { type: undefined, default: 0 } },
    emits: ["update:modelValue", "update:categoryGroup"],
    setup(_, { attrs, emit }) {
        const { getters, state } = useStore();

        const categories = computed(() => getters["globalHandler/category_map_by_category_group"]);
        // console.log("category",categories.value);
        const category_groups = computed(
            () => state.globalHandler.category_groups
        );
        //目前的類別群組
        const cur_category_group = ref("");
        cur_category_group.value = category_groups.value[0].name;
        // console.log(cur_category_group.value, category_groups.value);
        //目前的類別
        const cur_category = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        const changeCategory = () => {
            emit("update:categoryGroup", cur_category_group.value);
            cur_category.value =
                categories.value[cur_category_group.value][0].id;
        };
        //初始化類別
        changeCategory();

        return {
            categories,
            category_groups,
            cur_category_group,
            cur_category,
            changeCategory,
        };
    },
};
</script>

<style scoped></style>
