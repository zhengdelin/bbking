div
<template>
    <ShoppingListItem
        grid-cols-class="grid-cols-5 md:grid-cols-9"
        :product="product"
    >
        <button class="bg-yellow-500" @click="show = !show">評價商品</button>
    </ShoppingListItem>
    <InMask v-if="show" position="fixed" overflow-hidden>
        <!-- {{ data }} -->
        <FormContainer
            :title="product.name"
            class="px-10 w-[500px] min-h-[70vh]"
            form-class="gap-0 mt-5 justify-between"
        >
            <div>
                <StarsItem v-model="data.star" class="mb-6 gap-4 justify-center" />
                <InputTextarea
                    focus
                    v-model="data.evaluation"
                    @update:modelValue="
                        dispatch(
                            'productHandler/checkEvaluation',
                            data.evaluation
                        )
                    "
                    placeholder="請詳細描述您對此商品的評價..."
                />
                <ul class="list-inside list-disc font-bold">
                    <li>您的評價與姓名資訊將會一併公開發布在本網站上</li>
                </ul>
            </div>
            <div class="flex gap-5 justify-end">
                <CancelButton @click="cancel" />
                <SaveButton type="submit" :disabled="!data.star" @click="evaluate" />
            </div>
        </FormContainer>
    </InMask>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import ShoppingListItem from "../ShoppingListItem.vue";
import InMask from "../../../Global/Region/InMask.vue";
import FormContainer from "../../../FrontEnd/FormContainer.vue";
import InputTextarea from "../../../Objects/Input/InputTextarea.vue";
import CancelButton from "../../../Objects/Button/CancelButton.vue";
import SaveButton from "../../../Objects/Button/SaveButton.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import StarsItem from './StarsItem.vue';
export default {
    components: {
        ShoppingListItem,
        InMask,
        FormContainer,
        InputTextarea,
        CancelButton,
        SaveButton,
        StarsItem,
    },
    props: { product: { type: Object, default: () => ({}) } },
    setup(props) {
        const { dispatch } = useStore();
        const { product } = toRefs(props);
        const evaluation = computed(() => props.product.evaluation);
        // console.log("product,", product.value);
        const evaluationBox = ref();
        const evaluationBoxHeight = ref(0);
        const show = ref(false);
        const data = reactive({
            star: 0,
            evaluation: "",
        });
        //同步資料
        const sync = () => {
            for (const key of Object.keys(evaluation.value))
                data[key] = evaluation.value[key];
        };
        sync();
        //有更改過資料
        const isChanged = computed(
            () => JSON.stringify(data) !== JSON.stringify(evaluation.value)
        );
        const cancel = () => {
            //沒有輸入過
            if (!isChanged.value) {
                show.value = false;
                return;
            }
            if (confirm("確定要離開嗎?系統將不會保留您的輸入")) {
                show.value = false;
                sync();
            }
        };
        const evaluate = async () => {
            // console.log("evaluate",data);
            if (data.star) {
                if (isChanged.value) {
                    const res = await dispatch("productHandler/evaluate", {
                        product: product.value,
                        data,
                    });
                    if (res) show.value = false;
                    dispatch("productHandler/getOrders");
                    return;
                }
                show.value = false;
            }
        };

        return {
            product,
            evaluationBox,
            evaluationBoxHeight,
            show,
            data,
            cancel,
            dispatch,
            evaluate,
        };
    },
};
</script>

<style scoped></style>
