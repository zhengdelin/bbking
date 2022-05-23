export const after_login_routes = [
    {
        path: "/user",
        name: "user",
        components: {
            nav: () => import("../components/Global/Nav/Nav"),
            default: () => import("../Pages/User"),
            footer: () => import("../components/Global/Footer/Footer"),
        },
        meta: {
            title: "會員專區",
        },
        beforeEnter(to, next) {
            if (document.body.clientWidth > 768 && to.name === "user") {
                return { name: "user-profile" };
            }
        },
        children: [
            {
                path: "profile",
                name: "user-profile",
                meta: {
                    title: "會員專區-個人資料",
                },
                component: () => import("../SubPages/User/Profile"),
            },
            {
                path: "orders",
                meta: {
                    title: "會員專區-訂單",
                },
                component: () => import("../SubPages/User/Orders"),
                children: [
                    {
                        path: "",
                        name: "user-orders",
                        component: () =>
                            import("../SubPages/User/Orders/index"),
                    },
                    {
                        path: ":id",
                        name: "user-order-detail",
                        meta: {
                            title: "會員專區-訂單詳情",
                        },
                        component: () =>
                            import("../SubPages/User/Orders/OrderDetail"),
                    },
                ],
            },

            {
                path: "article-collection",
                name: "user-article_collection",
                meta: {
                    title: "會員專區-珍藏文章",
                },
                component: () => import("../SubPages/User/ArticleCollection"),
            },
        ],
    },
    {
        path: "/shopping-cart",
        name: "shopping_cart",
        meta: {
            title: "比比王樂器-購物車內容",
        },
        components: {
            nav: () => import("../components/Global/Nav/Nav"),
            default: () => import("../Pages/Shopping"),
            footer: () => import("../components/Global/Footer/Footer"),
        },
    },
    {
        path: "/checkout",
        name: "checkout",
        meta: {
            title: "比比王樂器-結帳",
        },
        components: {
            nav: () => import("../components/Global/Nav/Nav"),
            default: () => import("../Pages/Shopping"),
            footer: () => import("../components/Global/Footer/Footer"),
        },
    },
];
