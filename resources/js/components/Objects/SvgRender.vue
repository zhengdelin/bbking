<script>
import { computed, h } from "@vue/runtime-core";
export default {
  props: {
    type: { type: String, default: "" },
    width: { type: Number, default: 24 },
    height: { type: Number, default: 24 },
    combination: { type: Boolean, default: false },
  },
  setup(props) {
    //props
    const type = props.type;
    const width = props.width;
    const height = props.height;
    //svg
    const svg = {
      bold: {
        path: {
          d: "M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z",
          "fill-rule": "evenodd",
        },
      },
      italic: {
        path: {
          d: "M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z",
          "fill-rule": "evenodd",
        },
      },
      underline: {
        path: {
          d: "M16 5c.6 0 1 .4 1 1v5.5a4 4 0 01-.4 1.8l-1 1.4a5.3 5.3 0 01-5.5 1 5 5 0 01-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 01-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 002.2.8 3.4 3.4 0 002.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2z",
          "fill-rule": "evenodd",
        },
      },
    };
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

    if (props.combination) {
      return () =>
        h(
          "svg",
          {
            width: width,
            height: height,
          },
          [
            h(
              "g",
              {
                "fill-rule": combined_svg[type]["fill-rule"]
                  ? combined_svg[type]["fill-rule"]
                  : "",
              },
              //用arrayfrom組成陣列 array map遍歷每個item
              Array.from(combined_svg[type].path).map((i) => {
                return h("path", {
                  d: i.d,
                  "fill-rule": i["fill-rule"] ? i["fill-rule"] : "",
                });
              })
            ),
          ]
        );
    } else {
      return () =>
        h(
          "svg",
          {
            width: width,
            height: height,
          },
          [
            h("path", {
              d: svg[type].path.d,
              "full-rule": svg[type].path["fill-rule"]
                ? svg[type].path["fill-rule"]
                : "",
            }),
          ]
        );
    }
  },
};
</script>

<style>
</style>