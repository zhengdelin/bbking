// 新增使用者
<template>
    <!-- {{ user_info }} -->
    <title-item title="會員 - 新增會員" return_to_route_name="admin-members">
    </title-item>
    <title-item title="會員資訊">
        <template v-slot:button>
            <create-button-vue @click="createUser"></create-button-vue>
        </template>
    </title-item>
    <admin-input-form-vue>
        <template v-slot:form_items>
            <div
                class="col-span-6 md:col-span-3 lg:col-span-2"
                v-for="col in input_cols"
                :key="col.model"
            >
                <input-text-vue
                    :type="col.type"
                    :title="TITLE[col.model]"
                    :trim="true"
                    :focus="col.focus"
                    :required="col.required"
                    v-model="user_info[col.model]"
                    @change="
                        dispatch(
                            col.func_call,
                            col.model === 'password'
                                ? { password: user_info['password'] }
                                : user_info[col.model]
                        )
                    "
                ></input-text-vue>
            </div>
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
                <input-single-checkbox-vue
                    title="啟用"
                    v-model="user_info['status']"
                ></input-single-checkbox-vue>
            </div>
        </template>
    </admin-input-form-vue>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
//components
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import { TITLE } from "../../../TITLE";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSingleCheckboxVue from "../../../components/Objects/Input/InputSingleCheckbox.vue";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";

export default {
    components: {
        CreateButtonVue,
        AdminInputFormVue,
        InputTextVue,
        InputSingleCheckboxVue,
        TitleItem,
    },
    setup() {
        const router = useRouter();
        const { dispatch, state } = useStore();
        const user_info = ref({
            account: "",
            password: "",
            email: "",
            name: "",
            phone: "",
            address: "",
            status: true,
        });
        const createUser = async () => {
            await dispatch("userHandler/createUserMember", user_info.value);
            // console.log(state);
            if (state.status === "success") {
                router.push({
                    name: "admin-members",
                    params: { update_user_info: true },
                });
            }
        };
        const input_cols = reactive([
            {
                model: "account",
                focus: true,
                required: true,
                func_call: "userHandler/checkAccount",
            },
            {
                type: "password",
                model: "password",
                required: true,
                func_call: "userHandler/checkPassword",
            },
            {
                model: "email",
                required: true,
                func_call: "userHandler/checkEmail",
            },
            {
                model: "name",
                func_call: "userHandler/checkName",
            },
            {
                model: "phone",
                func_call: "userHandler/checkPhone",
            },
            {
                model: "address",
                func_call: "userHandler/checkAddress",
            },
        ]);
        return {
            TITLE,
            user_info,
            input_cols,
            createUser,
            dispatch,
        };
    },
};
</script>

<style scoped></style>
