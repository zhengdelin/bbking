<template>
    <FormContainer title="會員註冊">
        <InputText
            :title="TITLE.account"
            focus
            required
            v-model="account"
            placeholder="輸入帳號"
            @change="dispatch('userHandler/checkAccount', account)"
        />
        <InputText
            :title="TITLE.password"
            required
            type="password"
            v-model="password"
            placeholder="輸入密碼"
            @change="
                dispatch('userHandler/checkPassword', {
                    password,
                    check_password,
                })
            "
        />
        <InputText
            :title="TITLE.check_password"
            required
            type="password"
            v-model="check_password"
            placeholder="再次輸入密碼"
            @change="
                dispatch('userHandler/checkAgainPassword', {
                    password,
                    check_password,
                })
            "
        />
        <InputText
            :title="TITLE.email"
            type="email"
            required
            v-model="email"
            placeholder="輸入Email"
            @change="dispatch('userHandler/checkEmail', email)"
        />
        <InputSingleCheckbox title="保持登入" v-model="remember" />
        <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2"
            @click="handleRegister"
        >
            註冊
        </button>
        <div class="flex justify-center font-bold">
            <RouterLink class="hover:text-blue-500" :to="{ name: 'user-login' }"
                >返回登入</RouterLink
            >
        </div>
    </FormContainer>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { TITLE } from "../../TITLE";
import InputSingleCheckbox from "../../components/Objects/Input/InputSingleCheckbox.vue";
import FormContainer from "../../components/FrontEnd/FormContainer.vue";
import InputText from "../../components/FrontEnd/Input/InputText.vue";

export default {
    components: {
        InputText,
        InputSingleCheckbox,
        FormContainer,
    },
    setup() {
        const { dispatch, state } = useStore();
        //router
        const router = useRouter();
        //註冊資料
        const register_data = reactive({
            account: "",
            password: "",
            email: "",
            remember: true,
        });
        const check_password = ref("");
        //function
        const handleRegister = async () => {
            await dispatch("userHandler/register", register_data);
            if (state.is_login)
                router.push(
                    sessionStorage.getItem("redirect") === "/"
                        ? { name: "home" }
                        : sessionStorage.getItem("redirect")
                );
        };
        //更新狀態
        return {
            ...toRefs(register_data),
            check_password,
            handleRegister,
            dispatch,
            TITLE,
        };
    },
};
</script>

<style scoped></style>
