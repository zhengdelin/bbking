<template>
    <InMask v-if="show" position="fixed" overflow-hidden>
        <FormContainer title="修改密碼">
            <InputText
                v-model="data.old_password"
                focus
                required
                type="password"
                title="舊密碼"
                placeholder="舊密碼"
            />
            <InputText
                v-model="data.new_password"
                required
                type="password"
                title="新密碼"
                placeholder="新密碼"
            />
            <div class="flex gap-3 w-full justify-center">
                <CancelButton @click="toggleShow" />
                <SaveButton @click="updatePassword" />
            </div>
        </FormContainer>
    </InMask>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import InputText from "../../FrontEnd/Input/InputText.vue";
import InMask from "../../Global/Region/InMask.vue";
import SaveButton from "../../Objects/Button/SaveButton.vue";
import CancelButton from "../../Objects/Button/CancelButton.vue";
import { useStore } from "vuex";
import FormContainer from "../../FrontEnd/FormContainer.vue";
export default {
    components: {
        InputText,
        InMask,
        SaveButton,
        CancelButton,
        FormContainer,
    },
    setup() {
        const { dispatch } = useStore();
        //修改密碼
        const show = ref(false);
        const toggleShow = () => {
            show.value = !show.value;
            if (!show.value) {
                data.old_password = "";
                data.new_password = "";
            }
        };

        const data = reactive({
            old_password: "",
            new_password: "",
        });
        const updatePassword = async () => {
            const res = await dispatch("userHandler/updatePassword", data);
            res && toggleShow();
        };
        return { show, toggleShow, data, updatePassword };
    },
};
</script>

<style scoped></style>

components: { InputText }, components: { InMask },
