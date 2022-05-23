<template>
    <div class="p-5 bg-white border-gray-300-sm">
        <div
            class="pb-3 flex justify-between border-b-2 border-slate-300 font-bold"
        >
            <div class="flex">
                <div :class="['mr-3 ', cur_status.color]">
                    {{ cur_status.label }}
                </div>
                <div
                    @click="cancelOrder"
                    v-if="cur_status.cancelable"
                    class="group px-3 border-l border-slate-300 text-red-500 hover:cursor-pointer"
                >
                    <div class="group-hover:-translate-y-1 duration-500">
                        取消訂單
                    </div>
                </div>
                <div
                    @click="recoverOrder"
                    v-if="cur_status.recoverable"
                    class="group px-3 border-l border-slate-300 text-blue-500 hover:cursor-pointer"
                >
                    <div class="group-hover:-translate-y-1 duration-500">
                        恢復訂單
                    </div>
                </div>
            </div>
            <slot name="link">
                <router-link
                    :to="{
                        path: `orders/${order.id}`,
                    }"
                    class="hover:cursor-pointer hover:text-blue-500"
                >
                    查看訂單詳情<svg-render-vue
                        type="arrow_right"
                        class="ml-2"
                    />
                </router-link>
            </slot>
        </div>
        <div class="flex justify-between pt-2">
            <table>
                <tr>
                    <td class="py-2.5 font-bold">訂單編號</td>
                    <td class="py-2.5 px-5">{{ order.id }}</td>
                </tr>
                <tr>
                    <td class="py-2.5 font-bold">訂單時間</td>
                    <td class="py-2.5 px-5">
                        {{ order.updated_time }}
                    </td>
                </tr>
                <tr>
                    <td class="py-2.5 font-bold">收件人</td>
                    <td class="py-2.5 px-5">
                        {{ order.name }}
                    </td>
                </tr>
                <tr>
                    <td class="py-2.5 font-bold">電話</td>
                    <td class="py-2.5 px-5">
                        {{ order.phone }}
                    </td>
                </tr>
                <tr>
                    <td class="py-2.5 font-bold">配送方式</td>
                    <td class="py-2.5 px-5">
                        {{ delivery_options[order.delivery_method].label }}
                    </td>
                </tr>
                <tr>
                    <td class="py-2.5 font-bold">地址</td>
                    <td class="py-2.5 px-5">
                        {{ order.address }}
                    </td>
                </tr>
            </table>
            <table class="mt-auto">
                <tr>
                    <td class="font-bold py-2.5 text-right">商品價格</td>
                    <td class="py-2.5 px-5">
                        <FormattedPrice :price="order.product_price" />
                    </td>
                </tr>
                <tr>
                    <td class="font-bold py-2.5 text-right">運費</td>
                    <td class="py-2.5 px-5">
                        <FormattedPrice :price="order.delivery_fee" />
                    </td>
                </tr>
                <!-- <tr>
                        <td colspan="2" class="py-2.5">
                            <hr class="">
                        </td>
                    </tr> -->
                <tr>
                    <td class="font-bold py-2.5 text-right">總計</td>
                    <td class="py-2.5 px-5">
                        <FormattedPrice :price="order.total_price" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import FormattedPrice from "./FormattedPrice.vue";
export default {
    components: { FormattedPrice },
    props: { order: { type: Object, default: () => ({}) } },
    setup(props) {
        const { order } = toRefs(props);
        const { state, dispatch } = useStore();
        const status = computed(() => state.productHandler.status);
        const cur_status = computed(() => status.value[order.value.status]);

        const delivery_options = computed(
            () => state.productHandler.delivery_options
        );
        const pay_method_options = computed(
            () => state.productHandler.pay_method_options
        );

        const cancelOrder = async () => {
            await dispatch("productHandler/cancelOrder", {
                order: order.value,
            });
        };
        const recoverOrder = async()=>{
            await dispatch("productHandler/recoverOrder",{
                order:order.value
            })
        }
        return {
            order,
            status,
            delivery_options,
            pay_method_options,
            cancelOrder,
            recoverOrder,
            cur_status
        };
    },
};
</script>

<style scoped></style>
