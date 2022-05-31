import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        //首頁
        {
            path: "",
            alias: "/home",
            name: "home",
            meta: {
                title: "比比王樂器行",
            },
            components: {
                nav: () => import("../components/Global/Nav/Nav"),
                default: () => import("../Pages/Home"),
                footer: () => import("../components/Global/Footer/Footer"),
            },
        },
        /* 關於我們 */
        {
            path: "/about",

            meta: {
                title: "比比王樂器行 - 關於我們",
            },
            components: {
                nav: () => import("../components/Global/Nav/Nav"),
                default: () => import("../Pages/About.vue"),
                footer: () => import("../components/Global/Footer/Footer"),
            },
            children: [
                {
                    path: "",
                    name: "about",
                    component: () => import("../SubPages/About/AboutList.vue"),
                },
                {
                    path: ":id",
                    name: "about-detail",
                    component: () =>
                        import("../SubPages/About/AboutDetail.vue"),
                },
            ],
        },
        //登入註冊
        {
            path: "/user/login",
            name: "user-login-register",
            components: {
                nav: () => import("../components/Global/Nav/Nav"),
                default: () => import("../Pages/UserLogin"),
                footer: () => import("../components/Global/Footer/Footer"),
            },
            beforeEnter(to, from) {
                sessionStorage.setItem("redirect", from.fullPath);
            },
            children: [
                {
                    path: "",
                    name: "user-login",
                    meta: {
                        title: "會員專區-登入",
                    },
                    component: () => import("../SubPages/Login/LoginForm"),
                },
                {
                    path: "/user/register",
                    name: "user-register",
                    meta: {
                        title: "會員專區-註冊",
                    },
                    component: () => import("../SubPages/Login/RegisterForm"),
                },
                {
                    path: "/user/findpassword",
                    name: "user-find-password",
                    meta: {
                        title: "會員專區-找回密碼",
                    },
                    component: () => import("../SubPages/Login/ForgetPassword"),
                },
            ],
        },
        //文章
        {
            // path: "/all-categories",
            components: {
                nav: () => import("../components/Global/Nav/Nav"),
                default: () => import("../Pages/AllCategories"),
                footer: () => import("../components/Global/Footer/Footer"),
            },
            children: [
                // //文章類別
                // {
                //     path: "",
                //     name: "all-categories",
                //     meta: {
                //         title: "比比王樂器行-所有分類",
                //     },
                //     component: () =>
                //         import("../SubPages/Category/AllCategories"),
                // },
                //文章依類別分組
                {
                    path: "/articles/:category*",
                    meta: {
                        title: "比比王樂器行-文章列表",
                    },
                    components: {
                        tab_title_bar: () =>
                            import("../components/Objects/Title/TabTitleBar"),
                        default: () => import("../SubPages/Article"),
                    },
                    children: [
                        {
                            path: "",
                            name: "article-list",
                            component: () =>
                                import("../SubPages/Article/Pages/ArticleList"),
                        },
                        //文章內文
                        {
                            path: ":id(\\d+)",
                            name: "article-content",
                            meta: {
                                title: "比比王樂器行-文章內容",
                            },
                            component: () =>
                                import(
                                    "../SubPages/Article/Pages/ArticleContent"
                                ),
                        },
                    ],
                },

                //產品列表
                {
                    path: "/products/:category?",
                    meta: {
                        title: "比比王樂器行-產品列表",
                    },
                    components: {
                        tab_title_bar: () =>
                            import("../components/Objects/Title/TabTitleBar"),
                        default: () => import("../SubPages/Product"),
                    },
                    children: [
                        {
                            path: "",
                            name: "product-list",
                            component: () =>
                                import("../SubPages/Product/Pages/ProductList"),
                        },
                        //產品內容
                        {
                            path: ":id(\\d+)",
                            name: "product-detail",
                            meta: {
                                title: "比比王樂器行-產品內容",
                            },
                            component: () =>
                                import(
                                    "../SubPages/Product/Pages/ProductDetail"
                                ),
                        },
                    ],
                },
            ],
        },
        //搜尋
        {
            path:"/search",
            name:"search",
            components: {
                nav: () => import("../components/Global/Nav/Nav"),
                default: () => import("../Pages/Search"),
                footer: () => import("../components/Global/Footer/Footer"),
            },
        },
        //404
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            meta: {
                title: "比比王樂器行",
            },
            components: {
                nav: () => import("../components/Global/Nav/Nav"),
                default: () =>import("../Pages/404"),
                footer: () => import("../components/Global/Footer/Footer"),
            },
        },
    ],
});
router.beforeEach((to, from) => {
    // if (from.path !== "/" && to.fullPath === "/") {
    //     window.location.assign(to.fullPath);
    // }
    // if (to.meta.auth) {
    //     Auth(to, from);
    // }
    // console.log('router.beforeEach', to, from);
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});
router.afterEach((to) => {
    window.scrollTo(0, 0);
});
