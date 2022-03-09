<template>
  <div id="tinymce" class="bg-white">
    <div id="tinymce_toolbar" class="sticky z-[2] top-0"></div>
    <div id="tinymce_editor" class="bg-white article-box min-h-[20rem]"></div>
  </div>
</template>

<script>
import { nextTick, onMounted, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  props: {
    initial_value: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const route = useRoute();
    // const initial_value = computed(() => props.initial_value);
    const config = {
      selector: "#tinymce_editor",
      inline: true,
      fixed_toolbar_container: "#tinymce_toolbar",
      toolbar_persist: true,
      language_url: "../../assets/tinymce/langs/zh_TW.js",
      language: "zh_TW",
      images_upload_url: "/api/article/admin/uploadArticlePic/",
      images_upload_base_path: "/",
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
          items:
            "color bold italic strikethrough underline| superscript subscript | removeformat",
        },
        text: {
          icon: "change-case",
          tooltip: "文字",
          items: "forecolor backcolor lineheight |  fontfamily fontsize",
        },
        alignment: {
          icon: "align-left",
          tooltip: "對齊",
          items:
            "alignleft aligncenter alignright alignjustify | outdent indent",
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
          items:
            "image media table |hr link emoticons charmap insertdatetime | template ",
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
    };
    onMounted(() => {
      tinymce.init(config);
      console.log("tinymce->",props);
      if (props.initial_value)
        tinymce.get("tinymce_editor").setContent(props.initial_value);
    });

    watch(route, () => {
      // console.log(route);
      if (
        route.name.toString().indexOf("create") !== -1 ||
        route.name.toString().indexOf("update") !== -1
      ) {
        nextTick(() => {
          tinymce.init(config);
        });
      } else {
        tinymce.get("tinymce_editor").destroy();
      }
    });
    return { };
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