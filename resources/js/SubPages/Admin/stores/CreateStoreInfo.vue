<template>
    <!-- {{ store_info }} -->
    <title-item
        return_to_route_name="admin-store_infos"
        title="店家資訊 - 新增店家資訊"
    ></title-item>
    <title-item title="店家資訊">
        <template v-slot:button>
            <create-button @click="handleCreateStoreInfo"></create-button>
        </template>
    </title-item>
    <admin-input-form-vue class="mb-2">
        <template v-slot:form_items>
            <div
                class="col-span-6 md:col-span-2"
                v-for="col in input_cols"
                :key="col.model"
            >
                <input-text-vue
                    :title="TITLE[col.model]"
                    :focus="col.focus"
                    :required="col.required"
                    v-model="store_info[col.model]"
                    @change="
                        col.func_call
                            ? dispatch(col.func_call, store_info[col.model])
                            : null
                    "
                ></input-text-vue>
            </div>
            <div class="col-span-3 md:col-span-2">
                <input-single-checkbox
                    :required="true"
                    :title="TITLE.isHeadquarter"
                    v-model="store_info.isHeadquarter"
                ></input-single-checkbox>
            </div>
            <div class="col-span-3 md:col-span-2">
                <input-single-checkbox
                    :required="true"
                    title="狀態"
                    v-model="store_info.status"
                ></input-single-checkbox>
            </div>
            <div class="col-span-6 md:col-span-3">
                <input-file-vue
                    type="image"
                    :required="true"
                    accept="image/png,image/jpeg"
                    title="Logo"
                    @fileChange="fileChange"
                ></input-file-vue>
            </div>
        </template>
    </admin-input-form-vue>
    <tinymce-editor
        placeholder="...請輸入關於我們"
    ></tinymce-editor>
</template>

<script>
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputFileVue from "../../../components/Objects/Input/InputFile.vue";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import { TITLE } from "../../../TITLE";
import { useStore } from "vuex";
import { reactive, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import InputSingleCheckbox from "../../../components/Objects/Input/InputSingleCheckbox.vue";
import TinymceEditor from "../../../components/Objects/TinymceEditor.vue";
import CreateButton from '../../../components/Objects/Button/CreateButton.vue';

export default {
    components: {
        AdminInputFormVue,
        InputTextVue,
        InputFileVue,
        TitleItem,
        InputSingleCheckbox,
        TinymceEditor,
        CreateButton,
    },
    props: {
        info: {
            type: String,
            default: () => {},
        },
    },
    setup() {
        const { dispatch, state } = useStore();
        const router = useRouter();
        //產品資訊
        const store_info = ref({
            name:"",
            eng_name:"",
            url:"",
            address:"",
            phone:"",
            email:"",
            business_hours:"",
            description:"",
            logo:null,
            isHeadquarter:false,
            status:true,
        });
        //欄位
        const input_cols = reactive([
            {
                model: "name",
                focus: true,
                required: true,
                
                func_call: "globalHandler/checkStoreInfoName",
            },
            {
                model: "eng_name",
            },
            {
                model: "url",
            },
            {
                model: "address",
            },
            {
                model: "phone",
            },
            {
                model: "email",
            },
            {
                model: "business_hours",
                func_call:"globalHandler/checkStoreInfoBH"
            },
        ]);
        //更新產品
        const handleCreateStoreInfo = () => {
            //   console.log("handleCreateStoreInfo", store_info);
            store_info.value.description = tinymce
                .get("tinymce_editor")
                .getContent();
            dispatch("globalHandler/createStoreInfo", store_info.value).then(() => {
                if (state.status !== "error")
                    router.push({
                        name: "admin-store_infos",
                        params: { update_store_info: true },
                    });
            });
        };
        //file更改時，接受input file的物件
        const fileChange = (file) => {
            store_info.value.logo = file;
            // console.log(file,store_info);
        };
        return {
            TITLE,
            store_info,
            input_cols,
            handleCreateStoreInfo,
            fileChange,
            dispatch,
        };
    },
};
</script>

<style scoped></style>
