<template>
    <div class="bg-white py-5 px-10 flex flex-col gap-2">
        <!-- {{ data }} -->
        <InputRadio
            v-model:value="data.delivery_method"
            title="配送方式"
            :options="delivery_options"
        />
        <InputTextarea
            v-if="data.delivery_method === 1"
            title="收件地址"
            required
            v-model="data.address"
            rows="4"
            @update:modelValue="
                dispatch('userHandler/checkAddress', data.address)
            "
        />
        <InputText
            title="收件人姓名"
            required
            v-model="data.name"
            @update:modelValue="dispatch('userHandler/checkName', data.name)"
        />
        <InputText
            title="Email"
            required
            v-model="data.email"
            @update:modelValue="dispatch('userHandler/checkEmail', data.email)"
        />
        <InputText
            title="手機"
            required
            v-model="data.phone"
            @update:modelValue="dispatch('userHandler/checkPhone', data.phone)"
        />
        <InputRadio
            v-model:value="data.pay_method"
            title="付款方式"
            :options="pay_method_options"
        />
        <InputText
            v-if="data.pay_method === 1"
            title="匯款帳戶後五碼"
            required
            v-model="data.pay_account"
            @update:modelValue="dispatch('productHandler/checkPayAccount',data.pay_account)"
        />
        <InputTextarea title="備註" v-model.trim="data.note" rows="4" />
    </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import InputRadio from "../../Objects/Input/InputRadio.vue";
import InputTextarea from "../../Objects/Input/InputTextarea.vue";
import InputText from "../../FrontEnd/Input/InputText.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

const { state, dispatch } = useStore();
// console.log("state",state);
const data = reactive({
    delivery_method: 1,
    address: state.user_info.address,
    pay_method: 1,
    pay_account: "",
    name: state.user_info.name,
    email: state.user_info.email,
    phone: state.user_info.phone,
    note: "",
});
const delivery_options = computed(()=>state.productHandler.delivery_options)
const pay_method_options = computed(()=>state.productHandler.pay_method_options)
defineExpose({
    data,
});
</script>

<style scoped></style>
