<template>
    <FormContainer title="找回密碼">
        <template v-if="step === 1 || step === 2">
            <InputText
                :title="TITLE.email"
                focus
                required
                v-model="data.email"
                placeholder="輸入Email"
                @change="dispatch('userHandler/checkEmail', data.email)"
            />
            <div class="flex">
                <InputText
                    :title="TITLE.code"
                    required
                    v-model="data.code"
                    placeholder="輸入驗證碼"
                />
                <template v-if="interval">
                    <button disabled class="flex-1 hover:cursor-not-allowed">
                        {{ interval + "s" }}
                    </button>
                </template>
                <button v-else type="button" class="flex-0 whitespace-nowrap" @click="sendEmail">
                    發送驗證碼
                </button>
            </div>
        </template>
        <InputText
            v-else
            :title="TITLE.password"
            required
            type="password"
            v-model="data.password"
            placeholder="輸入密碼"
        />
        <button
            :disabled="step === 1"
            type="submit"
            :class="[
                'w-full bg-blue-500 text-white py-2',
                { 'hover:cursor-not-allowed': step === 1 },
            ]"
            @click="step === 1 ? () => null : handleForgetPassword()"
        >
            送出
        </button>
        <div
            :class="[
                'flex font-bold',
                step === 3 ? 'justify-between' : 'justify-center',
            ]"
        >
            <RouterLink class="hover:text-blue-500" :to="{ name: 'user-login' }"
                >返回登入</RouterLink
            >
            <div v-if="step === 3" class="hover:text-blue-500" @click="step = 1">返回上一步</div>
        </div>
    </FormContainer>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import FormContainer from "../../components/FrontEnd/FormContainer.vue";
import InputText from "../../components/FrontEnd/Input/InputText.vue";
import { TITLE } from "../../TITLE";

const { dispatch } = useStore();
const router = useRouter();
const step = ref(1);
const interval = ref(0);
const data = reactive({
    email: "",
    code: "",
    password: "",
});
const handleForgetPassword = async () => {
    const res = await dispatch("userHandler/forgetPassword", {
        data,
        step: step.value,
    });
    if (res) {
        switch (step.value) {
            //寄送驗證信成功
            case 1:
                step.value = 2;
                interval.value = 60;
                let timer = setInterval(() => {
                    //計時器歸零
                    if (!--interval.value) {
                        clearInterval(timer);
                    }
                }, 1000);
                break;
            //驗證成功
            case 2:
                step.value = 3;
                break;
            //重設密碼成功
            case 3:
                router.push({ name: "user-login" });
        }
    }
};
const sendEmail = async () => {
    step.value = 1;
    await handleForgetPassword();
};
</script>

<style scoped></style>
