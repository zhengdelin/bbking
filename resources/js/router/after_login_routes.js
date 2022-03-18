export const after_login_routes = [{
    path: "/user",
    name: "user",
    components: {
        nav: () =>
            import ("../components/Nav/Nav"),
        default: () =>
            import ("../Pages/User"),
    },
    meta: {
        title: "會員專區",
        auth: true,
    },
    beforeEnter(to, next) {
        if (document.body.clientWidth > 768 && to.name === "user") {
            return { name: "user-profile" };
        }
    },
    children: [{
            path: "profile",
            name: "user-profile",
            meta: {
                title: "會員專區-個人資料",
            },
            component: () =>
                import ("../SubPages/User/Profile"),
        },
        {
            path: "shopping-cart",
            name: "user-shopping_cart",
            meta: {
                title: "會員專區-購物車",
            },
            component: () =>
                import ("../SubPages/User/ShoppingCart"),

        },
        {
            path: "article-collection",
            name: "user-article_collection",
            meta: {
                title: "會員專區-珍藏文章",
            },
            component: () =>
                import ("../SubPages/User/ArticleCollection"),
        },
        {
            path: "shopping-record",
            name: "user-shopping_record",
            meta: {
                title: "會員專區-購物紀錄",
            },

            component: () =>
                import ("../SubPages/User/ShoppingRecord"),
        },
    ],
}]