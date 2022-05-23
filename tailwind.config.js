const plugin = require("tailwindcss/plugin");
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({ addComponents, addVariant, e }) => {
            addVariant("important", ({ container }) => {
                container.walkRules((rule) => {
                    rule.selector = `.\\!${rule.selector.slice(1)}\\`;
                    rule.walkDecls((decl) => {
                        decl.important = true;
                    });
                });
            });
        }),
    ],
};
