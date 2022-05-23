<template>
    <FormContainer title="會員登入">
        <InputText
            :title="TITLE.account"
            focus
            required
            v-model="account"
            placeholder="輸入帳號"
        />
        <InputText
            :title="TITLE.password"
            required
            type="password"
            v-model="password"
            placeholder="輸入密碼"
        />
        <InputSingleCheckbox title="保持登入" v-model="remember" />
        <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2"
            @click="handleLogin"
        >
            登入
        </button>
        <div class="flex justify-between font-bold">
            <RouterLink
                :to="{ name: 'user-find-password' }"
                class="hover:text-blue-500"
                >忘記密碼?</RouterLink
            >
            <RouterLink
                class="hover:text-blue-500"
                :to="{ name: 'user-register' }"
                >沒有帳號?立即註冊</RouterLink
            >
        </div>
    </FormContainer>
</template>

<script>
import InputText from "../../components/FrontEnd/Input/InputText.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { TITLE } from "../../TITLE";
import InputSingleCheckbox from "../../components/Objects/Input/InputSingleCheckbox.vue";
import FormContainer from "../../components/FrontEnd/FormContainer.vue";

export default {
    components: {
        InputText,
        InputSingleCheckbox,
        FormContainer,
    },
    setup() {
        const { dispatch, state, commit } = useStore();
        const router = useRouter();
        //data
        const login_data = reactive({
            account: "",
            password: "",
            remember: true,
        });
        //function
        const handleLogin = async () => {
            commit("clearStatus");
            await dispatch("userHandler/login", login_data).then(() => {
                if (state.is_login) {
                    router.push(
                        sessionStorage.getItem("redirect") === "/"
                            ? { name: "home" }
                            : sessionStorage.getItem("redirect")
                    );
                }
            });
        };
        return {
            ...toRefs(login_data),
            handleLogin,
            TITLE,
        };
    },
};
</script>

<style scoped></style>
