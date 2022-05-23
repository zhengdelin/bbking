<script>
import { toRefs } from "@vue/reactivity";
import { h, resolveComponent } from "@vue/runtime-core";
import ImagePreview from "../../Global/ImagePreview.vue";
export default {
    components: { ImagePreview },
    props: {
        /* 資料型態 */
        data_type: {
            type: String,
            default: "",
        },
        /* 資料 */
        data: {
            type: [String,Number] ,
            default:"",
        },
    },
    setup(props) {
        const { data, data_type } = toRefs(props);

        switch (data_type.value) {
            case "boolean":
                // console.log('123');
                return () =>
                    h(resolveComponent("svg-render-vue"), {
                        type: data.value ? "circle_check" : "x_mark",
                        class: data.value ? "text-green-500" : "text-red-500",
                    });
            case "image":
                return () =>
                    data.value
                        ? h(resolveComponent("image-preview"), {
                              src: data.value,
                          })
                        : h("span", data.value || "--");
            default:
                return () => h("span", data.value || "--");
        }
    },
};
</script>

<style scoped></style>
