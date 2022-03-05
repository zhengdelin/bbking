<template>
  <div>
    <textarea name="tinymce_editor" id="tinymce_editor"></textarea>
  </div>
</template>

<script>
import { nextTick, onMounted, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  setup(props) {
    const route = useRoute();
    const config = {
      selector: "#tinymce_editor",
      language_url: "../../assets/tinymce/langs/zh_TW.js",
      language: "zh_TW",
      plugins: `preview searchreplace autolink link image table autoresize autosave charmap code emoticons
           fullscreen help image insertdatetime lists media quickbars template wordcount`,
      toolbar: `wordcount code undo redo restoredraft| quicklink styles forecolor fontfamily fontsize| color bold italic strikethrough underline numlist bullist
        | alignleft aligncenter alignright alignjustify | outdent indent |image media table insertdatetime `,
      autosave_interval: "30s", //自動儲存間隔
      toolbar_sticky: true, //工具列黏附
      quickbars_selection_toolbar:
        "bold italic underline | styles | numlist bullist | quicklink blockquote", //快速編輯
      contextmenu: "redo undo",//上下文菜單(右鍵出來的)
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
      branding: false,
      
    };
    onMounted(() => {
      tinymce.init(config);
      console.log(tinymce.activeEditor.ui.registry.getAll().buttons);
    });
    watch(route, () => {
      console.log(route);
      if (route.name.toString() === "admin-articles-create") {
        nextTick(() => {
          tinymce.init(config);
        });
      } else {
        tinymce.get("tinymce_editor").destroy();
      }
    });
  },
};
</script>

<style scoped>
</style>