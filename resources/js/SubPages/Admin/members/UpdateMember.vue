// 新增使用者
<template>
    {{ user_info }}
    <title-item title="會員 - 編輯會員" return_to_route_name="admin-members">
    </title-item>
    <title-item title="會員資訊">
        <template v-slot:button>
            <save-button-vue @click="updateUserMember"></save-button-vue>
        </template>
    </title-item>
    <admin-input-form-vue>
        <template v-slot:form_items>
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
                <input-text-vue
                    :title="TITLE['account']"
                    :trim="true"
                    :required="true"
                    :focus="true"
                    v-model="user_info['account']"
                    @change="
                        dispatch(
                            'userHandler/checkAccount',
                            user_info['account']
                        )
                    "
                ></input-text-vue>
            </div>
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
                <input-text-vue
                    :title="TITLE['email']"
                    :trim="true"
                    :required="true"
                    v-model="user_info['email']"
                    @change="
                        dispatch(
                            'userHandler/checkEmail',
                            user_info['password']
                        )
                    "
                ></input-text-vue>
            </div>
            <div
                class="col-span-6 md:col-span-3 lg:col-span-2"
                v-for="col in input_cols"
                :key="col.model"
            >
                <input-text-vue
                    :title="TITLE[col.model]"
                    :trim="true"
                    v-model="user_info[col.model]"
                    @change="dispatch(col.func_call, user_info[col.model])"
                ></input-text-vue>
            </div>
            <div class="col-span-3 md:col-span-2" v-if="role === 3">
                <input-select
                    required
                    :title="TITLE.role_id"
                    :options="roles"
                    v-model="user_info.role_id"
                ></input-select>
            </div>
            <input-single-checkbox-vue
                :title="TITLE.status"
                v-model="user_info['status']"
            ></input-single-checkbox-vue>
        </template>
    </admin-input-form-vue>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
//components
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSingleCheckboxVue from "../../../components/Objects/Input/InputSingleCheckbox.vue";
import SaveButtonVue from "../../../components/Objects/Button/SaveButton.vue";
import { TITLE } from "../../../TITLE";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import { computed } from "@vue/runtime-core";
import InputSelect from '../../../components/Objects/Input/InputSelect.vue';

export default {
    props: {
        info: {
            type: String,
            default: () => {},
        },
    },
    components: {
        SaveButtonVue,
        AdminInputFormVue,
        InputTextVue,
        InputSingleCheckboxVue,
        TitleItem,
        InputSelect,
    },
    async setup(props) {
        const router = useRouter();
        const { dispatch, state } = useStore();
        //info
        const info = computed(() => props.info);
        //如果沒有info跳出
        if (!props.info) router.push({ name: "admin-members" });
        //掛載資料
        const user_info = ref();
        user_info.value = info.value ? JSON.parse(info.value) : {};
        // console.log('updatemember->',user_info);

        const updateUserMember = async () => {
            await dispatch("userHandler/updateUserMember", user_info.value);
            if (state.status === "success") {
                router.push({
                    name: "admin-members",
                    params: { update_user_info: 1 },
                });
            }
        };
        const input_cols = reactive([
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
        const role = computed(() => state.user_info.role_id);
        const roles = computed(() => state.userHandler.boss.roles);
        if (role.value === 3 && !roles.value)
            await dispatch("userHandler/getRoles");

        return {
            TITLE,
            user_info,
            input_cols,
            updateUserMember,
            dispatch,role,roles
        };
    },
};
</script>

<style scoped></style>
