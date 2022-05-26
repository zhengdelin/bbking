<template>
    <div class="bg-white no-tailwind-base">
        <slot name="title">
            <TitleItem
                v-if="title"
                :title="title"
            />
        </slot>
        <transition name="fade">
            <Editor v-model="modelValue" :init="config"></Editor>
        </transition>
    </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import Editor from "@tinymce/tinymce-vue";
import TitleItem from './Title/TitleItem.vue';
export default {
    components: { TitleItem, Editor },
    props: {
        title: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "...請輸入文字",
        },
    },
    emits: ["update:content"],
    setup(props, { emit }) {
        const { dispatch } = useStore();
        const show = ref(false);
        const modelValue = computed({
            get: () => props.content,
            set: (val) => emit("update:content", val),
        });
        //初始值
        const initVal = ref();
        initVal.value = modelValue.value;

        const placeholder = computed(() =>
            //如果已經有文字就不顯示提示文字了
            modelValue.value ? "" : props.placeholder
        );
        //上傳進度條
        const percent = ref();
        const uploadProgress = (progressEvent) => {
            percent.value =
                (progressEvent.loaded / progressEvent.total).toFixed(2) * 100;
        };
        const config = {
            // selector: "#tinymce_editor",
            //inline模式
            // inline: true,
            // fixed_toolbar_container: "#tinymce_toolbar",
            //保持toolbar存在
            // toolbar_persist: true,
            language_url: "../../assets/tinymce/langs/zh_TW.js",
            language: "zh_TW",
            placeholder: placeholder.value,
            //上傳圖片
            images_upload_url: "/api/article/admin/uploadArticlePic",
            images_upload_base_path: "/",
            //   images_upload_handler: (blobInfo, progress) =>
            //     new Promise((resolve, reject) => {
            //       Promise.resolve(
            //         dispatch("global/uploadEditorImg", { blobInfo, uploadProgress })
            //       ).then((res) => {
            //         progress(percent.value);
            //         if (res.code === 400) reject("上傳失敗");
            //         else resolve(res.location);
            //       });
            //     }),
            //不要轉譯url
            convert_urls: false,
            //阻擋不對的圖片格式
            block_unsupported_drop: true,
            //擴充套件
            plugins: `preview searchreplace autolink link image table autoresize autosave charmap code emoticons
            help insertdatetime lists media quickbars template wordcount`,
            //工具欄
            toolbar: `newdocument preview restoredraft | undo redo searchreplace |
      formatting text lists| alignment paragraphs styles|insertion|code wordcount help`,
            toolbar_groups: {
                formatting: {
                    icon: "format",
                    tooltip: "格式",
                    items: "color bold italic strikethrough underline| superscript subscript | removeformat",
                },
                text: {
                    icon: "change-case",
                    tooltip: "文字",
                    items: "forecolor backcolor lineheight |  fontfamily fontsize",
                },
                alignment: {
                    icon: "align-left",
                    tooltip: "對齊",
                    items: "alignleft aligncenter alignright alignjustify | outdent indent",
                },
                paragraphs: {
                    icon: "paragraph",
                    tooltip: "段落",
                    items: "H1 h2 h3 h4 h5 h6 div",
                },
                lists: {
                    icon: "ordered-list",
                    tooptip: "列表",
                    items: "numlist bullist",
                },
                insertion: {
                    icon: "plus",
                    tooltip: "新增",
                    items: "image media table |hr link emoticons charmap insertdatetime | template ",
                },
            },
            //插入時的工具欄
            quickbars_insert_toolbar:
                " image media table |hr link emoticons charmap insertdatetime | template",
            //快速編輯
            quickbars_selection_toolbar:
                "quicklink| styles | forecolor backcolor fontfamily fontsize",
            autosave_interval: "30s", //自動儲存間隔
            toolbar_sticky: true, //工具列黏附
            contextmenu: "redo undo", //上下文菜單(右鍵出來的)
            // skin: "tinymce-5",
        };
        // onMounted(async () => {
        //   window["tinymce"].init(config);
        //   window["tinymce"]
        //     .get("tinymce_editor")
        //     .setContent(initialValue.value || "<p></p>");
        //   show.value = true;
        // });
        // onBeforeRouteLeave(() => {
        //   if (window["tinymce"].get("tinymce_editor"))
        //     window["tinymce"].get("tinymce_editor").destroy();
        // });
        // onUnmounted(() => {
        //   if (window["tinymce"].get("tinymce_editor"))
        //     window["tinymce"].get("tinymce_editor").destroy();
        // });
        // const getContent = () => {
        //   return window["tinymce"].get("tinymce_editor").getContent();
        // };
        const resetInput = () => (modelValue.value = initVal.value);

        return { show, modelValue, config, resetInput };
    },
};
</script>

<style>
/* #tinymce {
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
} */
.tox.tox-tinymce-inline .tox-editor-header {
    border-radius: 0 !important;
    border-bottom: 0 !important;
}
/* #tinymce_editor {
  text-align: left;
  line-height: 1;
  font-size: 20px;
  background-color: #ffffff;
  vertical-align: top;
  border: 1px solid #ccc;
  border-top: 0;
} */
/* .mce-content-body:not([dir="rtl"])[data-mce-placeholder]:not(.mce-visualblocks)::before {
  left: 1rem !important;
  top: calc(1.75rem);
} */
.tox-notifications-container > .tox-notification--warning {
    display: none !important;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
