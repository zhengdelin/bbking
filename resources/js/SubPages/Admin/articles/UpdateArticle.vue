<template>
    <title-item
        title="文章 - 編輯文章"
        return_to_route_name="admin-articles"
    ></title-item>
    <title-item title="文章資訊">
        <template v-slot:button>
            <save-button-vue @click="handleUpdateArticle"></save-button-vue>
        </template>
    </title-item>
    <admin-input-form-vue class="mb-2">
        <template v-slot:form_items>
            <div class="col-span-6">
                <input-text-vue
                    :focus="true"
                    :trim="true"
                    :required="true"
                    :title="TITLE.title"
                    v-model="article.title"
                    @change="
                        dispatch('articleHandler/checkTitle', article.title)
                    "
                ></input-text-vue>
            </div>
            <div class="col-span-6 md:col-span-3">
                <InputSelectVue
                    :required="true"
                    :title="TITLE.category"
                    :options="categories"
                    group
                    v-model="article.category_id"
                    @update:modelValue="
                        dispatch(
                            'globalHandler/checkCategory',
                            article.category_id
                        )
                    "
                />
            </div>
            <div class="col-span-3">
                <input-single-checkbox
                    :required="true"
                    title="開放顯示"
                    v-model="article.status"
                ></input-single-checkbox>
            </div>
        </template>
    </admin-input-form-vue>
    <TinymceEditor
        v-model:content="article.content"
        placeholder="...請輸入文章內容"
    />
</template>

<script>
import TinymceEditor from "../../../components/Objects/TinymceEditor.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";
import SaveButtonVue from "../../../components/Objects/Button/SaveButton.vue";

import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
import { TITLE } from "../../../TITLE";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import InputSingleCheckbox from '../../../components/Objects/Input/InputSingleCheckbox.vue';

export default {
    components: {
        SaveButtonVue,
        TinymceEditor,
        AdminInputFormVue,
        InputTextVue,
        InputSelectVue,
        TitleItem,
        InputSingleCheckbox,
    },
    props: {
        info: {
            type: String,
            default: () => {},
        },
    },
    setup(props) {
        const router = useRouter();
        const { dispatch, state, getters } = useStore();
        //info
        const info = computed(() => props.info);
        /* 如果沒東西跳轉回去 */
        if (!info.value) router.push({ name: "admin-articles" });
        //類別
        const categories = computed(
            () => getters["globalHandler/category_map_by_category_group"]
        );
        //掛載資料
        const article = ref();
        article.value = info.value ? JSON.parse(info.value) : {};
        // console.log(article.value);

        const handleUpdateArticle = () => {
            dispatch("articleHandler/updateArticle", article.value).then(() => {
                if (state.status !== "error")
                    router.push({
                        name: "admin-articles",
                        params: { update_article: true },
                    });
            });
        };
        return { TITLE, categories, article, handleUpdateArticle, dispatch };
    },
};
</script>

<style scoped></style>
