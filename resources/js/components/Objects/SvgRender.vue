<script>
import { computed, h, toRefs } from "@vue/runtime-core";
import { svg } from "../../SVG";
export default {
    props: {
        type: { type: String, default: "" },
        inline: { type: Boolean, default: true },
        size: { type: String, default: "" },
    pathClass: { type: String, default: "" },

    },
    setup(props) {
        //props
        const { type, inline, size, pathClass } = toRefs(props);
        // console.log('render',type,inline,size);
        const combined_svg = {
            strike: {
                "fill-rule": "evenodd",
                path: [
                    {
                        d: "M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 017 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z",
                    },
                    {
                        d: "M5 11h14a1 1 0 010 2H5a1 1 0 010-2z",
                        "fill-rule": "nonzero",
                    },
                ],
            },
        };
        // console.log(props);
        const getSizeClass = computed(() => (size.value && `fa-${size.value}`));
        // if (props.combination) {
        //   return () =>
        //     h(
        //       "svg",
        //       {
        //         width: width,
        //         height: height,
        //       },
        //       [
        //         h(
        //           "g",
        //           {
        //             "fill-rule": combined_svg[type]["fill-rule"]
        //               ? combined_svg[type]["fill-rule"]
        //               : "",
        //           },
        //           //用arrayfrom組成陣列 array map遍歷每個item
        //           Array.from(combined_svg[type].path).map((i) => {
        //             return h("path", {
        //               d: i.d,
        //               "fill-rule": i["fill-rule"] ? i["fill-rule"] : "",
        //             });
        //           })
        //         ),
        //       ]
        //     );
        // } else {
        return () =>
            h(
                "svg",
                {
                    class: `${inline.value ? "svg-inline--fa" : ""} ${
                        getSizeClass.value
                    }`,
                    viewBox: svg[type.value].viewBox,
                    xmlns: svg[type.value].xmlns,
                },
                [
                    h("path", {
                        class:pathClass.value,
                        d: svg[type.value].path.d,
                        "full-rule": svg[type.value].path["fill-rule"]
                            ? svg[type.value].path["fill-rule"]
                            : "",
                        fill: "currentColor",
                    }),
                ]
            );
        // }
    },
};
</script>

<style></style>
