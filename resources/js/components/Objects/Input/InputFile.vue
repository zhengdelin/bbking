<template>
  <div class="grid gap-2 grid-flow-col auto-cols-max items-center">
    <div class="font-bold">
      <span v-if="required" class="text-red-500">* </span>
      <span> {{ title }}</span>
    </div>
    <upload-button-vue
      :svg_name="type"
      :target_text="target_text[type]"
      @click="inputDOM.click()"
    ></upload-button-vue>
    <template v-if="img_data">
      <div class="overflow-hidden whitespace-nowrap text-ellipsis w-20">
        {{ file_name }}
      </div>
      <delete-button-vue @click="deleteFile"></delete-button-vue>
      <preview-button-vue @click="toggleShowPreview"></preview-button-vue>
    </template>

    <input
      type="file"
      @change="fileChange"
      :accept="accept"
      ref="inputDOM"
      hidden
    />
  </div>
  <template v-if="show_preview">
    <image-preview-vue
      :toggleShow="toggleShowPreview"
      :src="img_data"
      v-if="type === 'image'"
    ></image-preview-vue>
  </template>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import UploadButtonVue from "../Button/UploadButton.vue";
import ImagePreviewVue from "../../Preview/ImagePreview.vue";
import PreviewButtonVue from "../Button/PreviewButton.vue";
import DeleteButtonVue from "../Button/DeleteButton.vue";

export default {
  components: {
    UploadButtonVue,
    PreviewButtonVue,
    DeleteButtonVue,
    ImagePreviewVue,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    accept: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    image_src:{
      type:String,
      default:"",
    }
  },
  emits: {
    fileChange: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    //ref
    const inputDOM = ref();
    // data
    const { title, required, accept, type,image_src } = props;
    const file_name = ref("");
    //預覽圖片
    const img_data = ref("");
    const fileChange = (e) => {
      /* 如果有檔案 */
      if (e.target.files.length > 0) {
        /* new file reader */
        let fileReader = new FileReader();
        /* 更新filename */
        file_name.value = e.target.files[0].name;
        /* 回傳file */
        emit("fileChange", e.target.files[0]);
        /* 如果是image */
        if (type === "image") {
          fileReader.addEventListener("load", () => {
            img_data.value = fileReader.result;
          });
          fileReader.readAsDataURL(e.target.files[0]);
        }
      }
    };
    //刪除file
    const deleteFile = () => {
      file_name.value = "";
      /* 清空file */
      emit("fileChange", {});
      if (type === "image") {
        img_data.value = "";
      }
    };
    //按鈕設置
    const target_text = {
      image: "圖片",
    };
    //toggle preview
    const show_preview = ref(false);
    const toggleShowPreview = () => (show_preview.value = !show_preview.value);
    //初始化時 如果image_src有值就將file_name、image_data 賦值
    onMounted(()=>{
      file_name.value = image_src;
      img_data.value = image_src;
    })
    return {
      inputDOM,
      title,
      required,
      accept,
      type,
      img_data,
      file_name,
      target_text,
      show_preview,
      toggleShowPreview,
      fileChange,
      deleteFile,
    };
  },
};
</script>

<style>
</style>