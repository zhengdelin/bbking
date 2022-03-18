<template>
    <div id="tinymce" class="bg-white">
        <transition name="fade">
            <div
                id="tinymce_toolbar"
                class="sticky z-[2] top-0 h-[78px]"
                v-show="show"
            ></div>
        </transition>
        <div
            id="tinymce_editor"
            class="bg-white article-box min-h-[20rem]"
            v-html="initial_value"
        ></div>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "@vue/runtime-core";
export default {
    props: {
        initial_value: {
            type: String,
            default: "123",
        },
    },
    setup(props) {
        const show = ref(false);
        const initial_value = computed(() => props.initial_value);
        const config = {
            selector: "#tinymce_editor",
            inline: true,
            fixed_toolbar_container: "#tinymce_toolbar",
            toolbar_persist: true,
            language_url: "../../assets/tinymce/langs/zh_TW.js",
            language: "zh_TW",
            images_upload_url: "/api/article/admin/uploadArticlePic",
            images_upload_base_path: "/",
            convert_urls: false,
            block_unsupported_drop: true,
            plugins: `preview searchreplace autolink link image table autoresize autosave charmap code emoticons
            help insertdatetime lists media quickbars template wordcount`,
            // toolbar: `wordcount code undo redo restoredraft| quicklink styles fontfamily fontsize|formatting numlist bullist
            //   | alignment| outdent indent |image media table insertdatetime `,
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
            quickbars_insert_toolbar:
                " image media table |hr link emoticons charmap insertdatetime | template", //插入快速編輯
            quickbars_selection_toolbar:
                "quicklink| styles | forecolor backcolor fontfamily fontsize", //快速編輯
            autosave_interval: "30s", //自動儲存間隔
            toolbar_sticky: true, //工具列黏附
            contextmenu: "redo undo", //上下文菜單(右鍵出來的)
            skin: "tinymce-5",
            templates: [
                {
                    title: "Date modified example",
                    description:
                        "Adds a timestamp indicating the last time the document modified.",
                    content:
                        '<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>',
                },
            ],
            // style_formats: [
            //     { title: "Bold text", inline: "b" },
            //     {
            //         title: "Red text",
            //         inline: "span",
            //         styles: { color: "#ff0000" },
            //     },
            //     {
            //         title: "Red header",
            //         block: "h1",
            //         styles: { color: "#ff0000" },
            //     },
            //     { title: "Example 1", inline: "span", classes: "example1" },
            //     { title: "Example 2", inline: "span", classes: "example2" },
            //     { title: "Table styles" },
            //     { title: "Table row 1", selector: "tr", classes: "tablerow1" },
            // ],
            // style_formats_merge: true,
        };
        onMounted(() => {
            tinymce.init(config);
            // console.log("tinymce->",props);
            if (props.initial_value)
                tinymce.get("tinymce_editor").setContent(props.initial_value);
            show.value = true;
        });
        onUnmounted(() => {
            // console.log("tinymce-onUnmounted");
            tinymce.get("tinymce_editor").destroy();
        });
        // watch(route, () => {
        //   // console.log(route);
        //   if (
        //     route.name.toString().indexOf("create") !== -1 ||
        //     route.name.toString().indexOf("update") !== -1
        //   ) {
        //     nextTick(() => {
        //       tinymce.init(config);
        //     });
        //   } else {
        //     tinymce.get("tinymce_editor").destroy();
        //   }
        // });
        return { initial_value, show };
    },
};
</script>

<style>
#tinymce {
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
}
.tox.tox-tinymce-inline .tox-editor-header {
    border-radius: 0 !important;
    border-bottom: 0 !important;
}
#tinymce_editor {
    text-align: left;
    line-height: 1;
    font-size: 20px;
    background-color: #ffffff;
    vertical-align: top;
    border: 1px solid #ccc;
    border-top: 0;
}
.article-box {
    padding: 0.5rem 1rem;
}
.article-box h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.article-box h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.article-box h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1.2em;
    margin-block-end: 0.8em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.article-box h4 {
    display: block;
    margin-block-start: 0.7em;
    margin-block-end: 0.7em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.article-box h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.article-box h6 {
    display: block;
    font-size: 0.67em;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.article-box blockquote {
    display: block;
    padding: 10px 20px;
    margin: 0 0 20px 0;
    font-size: 17.5px;
    border-left: 5px solid rgb(161, 175, 194);
}
.article-box blockquote p {
    margin: 0.5rem 0;
}
.article-box p {
    display: block;
    /* margin-block-start: 1em; */
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
