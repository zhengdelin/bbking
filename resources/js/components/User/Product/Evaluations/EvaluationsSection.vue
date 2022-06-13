<template>
    <section class="bg-white px-3 pb-5 pt-2">
        <TitleItem title="商品評價" />
        <div class="bg-red-50 px-6 py-10 flex items-center gap-5">
            <div class="flex flex-col gap-2 text-center">
                <div>
                    <span class="text-[1.5rem]">{{ average_star }}</span
                    >/5
                </div>
                <StarsItem
                    v-model="average_star"
                    :editable="false"
                    :size="'lg'"
                />
            </div>
            <SelectMenu
                v-model="cur_star"
                class="justify-center gap-3"
                :options="options"
                item-class="py-2"
                :item-style="{ width: '30%' }"
            >
                <template #default="{ item }"> {{ item.label }} </template>
            </SelectMenu>
        </div>
        <EmptyContainer :data="evaluations" class="mt-2">
            <div
                v-for="evaluation in evaluations"
                :key="evaluation.member_id"
                class="py-2 border-b-2 border-gray-300"
            >
                <div>
                    {{ formattedAccount(evaluation.account) }}
                    <div class="text-xs text-gray-400">
                        {{ evaluation.updated_at }}
                    </div>
                </div>
                <StarsItem
                    v-model="evaluation.star"
                    :editable="false"
                    :size="'xs'"
                    class="mt-1 mb-3 gap-[2px]"
                />

                <pre class="my-4 leading-5">{{ evaluation.evaluation }}</pre>
            </div>
            <template #emptyText>暫無商品評價</template>
        </EmptyContainer>
    </section>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import SelectMenu from "../../../Global/Menu/SelectMenu.vue";
import { computed } from "@vue/runtime-core";
import StarsItem from "./StarsItem.vue";
import TitleItem from "../../../Objects/Title/TitleItem.vue";
import EmptyContainer from "../../../Global/EmptyContainer.vue";
export default {
    components: { SelectMenu, StarsItem, TitleItem, EmptyContainer },
    props: { evaluations: { type: Array, default: () => [] } },
    setup(props) {
        const data = reactive({
            //原始資料
            rawData: computed(() => props.evaluations),
            //依照星數分類
            groupByStar: computed(() => {
                return props.evaluations.reduce((acc, val) => {
                    acc[val["star"]] = acc[val["star"]] || [];
                    acc[val["star"]].push(val);
                    return acc;
                }, {});
            }),
        });
        //依照星數分類
        const options = [
            { id: 0, value: 0, label: "全部" },
            { id: 1, value: 5, label: "5星" },
            { id: 2, value: 4, label: "4星" },
            { id: 3, value: 3, label: "3星" },
            { id: 4, value: 2, label: "2星" },
            { id: 5, value: 1, label: "1星" },
        ];
        const cur_star = ref(0);
        const evaluations = computed(() =>
            cur_star.value ? data.groupByStar[cur_star.value] : data.rawData
        );
        const average_star = computed(
            () =>
                data.rawData.reduce((acc, val) => acc + val["star"], 0) /
                    data.rawData.length || 0
        );

        const formattedAccount = computed(
            () => (account) => account.slice(0, 1) + "*****" + account.slice(-1)
        );
        return {
            evaluations,
            average_star,
            options,
            cur_star,
            data,
            evaluations,
            formattedAccount,
        };
    },
};
</script>

<style scoped></style>
