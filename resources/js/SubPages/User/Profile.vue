<template>
    <div class="bg-white p-5 h-full">
        <!-- {{ user_info }} -->
        <TitleItem title="會員專區">
            <template #return_router>
                <RouterLink
                    :to="{ name: 'user' }"
                    class="md:hidden text-blue-500"
                >
                    <svg-render-vue type="return" size="lg"></svg-render-vue>
                </RouterLink>
            </template>
            <template #button>
                <EditButton @click="toEdit" v-if="read_only"/>
                <template v-else>
                    <CancelButton @click="cancel"/>
                    <SaveButton @click="handleUpdateOwnProfile"/>
                </template>
            </template>
        </TitleItem>
        <div class="grid gap-3 pt-2 sm:p-0">
            <InputText
                title="姓名"
                v-model.trim="user_info.name"
                placeholder="姓名"
                :readonly="read_only"
                @change="dispatch('userHandler/checkName', user_info.name)"
            ></InputText>
            <InputText
                title="手機號碼"
                v-model.trim="user_info.phone"
                :readonly="read_only"
                placeholder="手機號碼"
                @change="dispatch('userHandler/checkPhone', user_info.phone)"
            ></InputText>
            <InputText
                title="帳號"
                v-model.trim="user_info.account"
                :readonly="read_only"
                :required="!read_only"
                @change="
                    dispatch('userHandler/checkAccount', user_info.account)
                "
            ></InputText>
            <InputText
                title="Email"
                v-model.trim="user_info.email"
                :readonly="read_only"
                :required="!read_only"
                @change="dispatch('userHandler/checkEmail', user_info.email)"
            ></InputText>
            <div class="md:col-span-2">
                <InputTextarea
                    title="地址"
                    v-model="user_info.address"
                    @update:modelValue="
                        dispatch('userHandler/checkAddress', user_info.address)
                    "
                    placeholder="地址"
                />
            </div>
        </div>
    </div>
</template>

<script>
import InputTextarea from "../../components/Objects/Input/InputTextarea.vue";
import InputText from "../../components/FrontEnd/Input/InputText.vue";
import EditButton from "../../components/Objects/Button/EditButton.vue";
import SaveButton from "../../components/Objects/Button/SaveButton.vue";
import CancelButton from "../../components/Objects/Button/CancelButton.vue";
import ReturnButton from "../../components/Objects/Button/ReturnButton.vue";
import { ref } from "@vue/reactivity";
import { computed, nextTick, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import TitleItem from "../../components/Objects/Title/TitleItem.vue";
export default {
    components: {
        InputTextarea,
        InputText,
        EditButton,
        SaveButton,
        CancelButton,
        ReturnButton,

        TitleItem,
    },
    setup() {
        const { state, dispatch, commit } = useStore();
        //data
        const show = ref(false);
        const read_only = ref(true);
        const state_user_info = computed(() => state.user_info);
        const user_info = ref();
        user_info.value = JSON.parse(JSON.stringify(state_user_info.value));
        //進入編輯
        const toEdit = () => {
            read_only.value = false;
        };
        //更新
        const handleUpdateOwnProfile = async () => {
            if (changed.value) {
                await dispatch(
                    "userHandler/updateOwnProfile",
                    user_info.value
                ).then(() => {
                    if (state.status !== "error") {
                        commit("setUserInfo", user_info.value);
                        read_only.value = true;
                    }
                });
            } else read_only.value = true;
        };
        //取消
        const cancel = () => {
            nextTick(() => {
                user_info.value = { ...state_user_info.value };
                read_only.value = true;
            });
        };
        const changed = computed(() => {
            return (
                JSON.stringify(user_info.value) !==
                JSON.stringify(state_user_info.value)
            );
        });
        return {
            show,
            read_only,
            user_info,
            toEdit,
            handleUpdateOwnProfile,
            cancel,
            dispatch,
        };
    },
};
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

.border-black {
    border: 1.5px solid black !important;
}
</style>
