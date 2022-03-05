<template>
  <div id="tiptap_editor" v-if="editor" class="bg-white p-2 w-full h-full">
    <div class="">
      <button
        v-for="button in buttons"
        :key="button.svg"
        @click="button.click"
        :class="{ 'is-active': editor.isActive(button.isActive) }"
      >
        <svg-render-vue :type="button.svg" :combination="button.svg_combination"></svg-render-vue>
      </button>
    </div>
    <editor-content :editor="editor"> </editor-content>
  </div>
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline"; //底線
import { computed, reactive } from "@vue/runtime-core";
import SvgRenderVue from "./SvgRender.vue";
export default {
  components: {
    EditorContent,
    SvgRenderVue,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: {
    "update:modelValue": {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    //綁定的值
    const modelValue = computed(() => props.modelValue);

    const editor = useEditor({
      content: modelValue.value,
      extensions: [StarterKit, Underline],
      autofocus: true,
      onCreate: () => {},
      onUpdate: () => {
        emit("update:modelValue", editor.value.getHTML());
      },
    });

    const buttons = [
      {
        click: () => editor.value.chain().focus().toggleBold().run(),
        isActive: "bold",
        svg: "bold",
      },
      {
        click: () => editor.value.chain().focus().toggleItalic().run(),
        isActive: "italic",
        svg: "italic",
      },
      {
        click: () => editor.value.chain().focus().toggleUnderline().run(),
        isActive: "underline",
        svg: "underline",
      },
      {
        click: () => editor.value.chain().focus().toggleStrike().run(),
        isActive: "strike",
        svg: "strike",
        svg_combination:true,
      },
    ];
    return { editor, buttons };
  },
};
</script>

<style>
#tiptap_editor button:hover {
  border-radius: 0.125rem;
  background-color: rgb(209 213 219);
}
#tiptap_editor .is-active {
  border-radius: 0.125rem;
  background-color: rgb(209 213 219);
}
</style>