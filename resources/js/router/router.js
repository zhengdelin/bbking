import { createRouter, createWebHistory } from "vue-router";
import { admin_routes } from "../router/admin-routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store/index";
// NProgress.inc(0.2);
// NProgress.configure({ easing: 'linear', speed: 500, showSpinner: false, trickle: false })

// console.log(...admin_routes);

function Auth(to, from) {
    // console.log(!store._state.data.user);
    if (to.name === "user_login") {
        return true;
    } else {
        if (!store._state.data.is_login) {
            // router.push({ name: 'user' })
            if (to.name !== "user_register") {
                // alert('123')
                router.push({
                    name: "user_login",
                });
            }
            return true;
        } else {
            if (to.name === "user_register" || to.name === "user_login") {
                router.push({
                    path: from.fullPath,
                });
            }
            return true;
        }
    }
}
export const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: "home",
            meta: {
                title: "首頁",
            },
            components: {
                nav: () =>
                    import ("../components/Nav/Nav"),
                // default: () =>
                //     import ('../Pages/Home')
                default: () =>
                    import ("../Pages/Home"),
            },
        },
        {
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
                    return { name: "user_profile" };
                }
            },
            children: [{
                    path: "profile",
                    name: "user_profile",
                    meta: {
                        title: "會員專區-個人資料",
                    },
                    component: () =>
                        import ("../SubPages/User/Profile"),
                },
                {
                    path: "shopping-cart",
                    name: "user_shopping_cart",
                    meta: {
                        title: "會員專區-購物車",
                    },
                    component: () =>
                        import ("../SubPages/User/ShoppingCart"),

                },
                {
                    path: "article-collection",
                    name: "user_article_collection",
                    meta: {
                        title: "會員專區-珍藏文章",
                    },
                    component: () =>
                        import ("../SubPages/User/ArticleCollection"),
                },
                {
                    path: "shopping-record",
                    name: "user_shopping_record",
                    meta: {
                        title: "會員專區-購物紀錄",
                    },

                    component: () =>
                        import ("../SubPages/User/ShoppingRecord"),
                },
            ],
        },
        {
            path: "/user/login",
            components: {
                nav: () =>
                    import ("../components/Nav/Nav"),
                default: () =>
                    import ("../Pages/UserLogin"),
            },
            children: [{
                    path: "",
                    name: "user_login",
                    meta: {
                        title: "會員專區-登入",
                    },
                    component: () =>
                        import ("../SubPages/Login/LoginForm"),
                },
                {
                    path: "/user/register",
                    name: "user_register",
                    meta: {
                        title: "會員專區-註冊",
                    },
                    component: () =>
                        import ("../SubPages/Login/RegisterForm"),
                },
            ],
            beforeEnter: (to, from) => {
                Auth(to, from);
            },
        },
        {
            path: "/errors",
            name: "exception_error",
            meta: {
                title: "Oops!!出錯啦!!",
            },
            component: () =>
                import ("../components/Loading/Loading"),
        },
        ...admin_routes,
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            meta: {
                title: "not found"
            },
            redirect: "/"
        },
    ],
});
router.beforeEach((to, from) => {
    NProgress.start();
    if (!store.state.exception_error && to.name === "exception_error") {
        router.push({ name: "home" });
    }
    if (from.path !== "/" && to.fullPath === "/") {
        window.location.assign(to.fullPath);
    }
    if (to.meta.auth) {
        Auth(to, from);
    }
    // console.log("to");
    // console.log(to);
    // console.log("from");
    // console.log(from);
    // let auth=false;
    // for (let i = 0; i < router.options.routes.length-1; i++) {
    //     const element = i.fullPath;
    //     if(element==to.fullPath || element=='/')
    //         auth=true;
    // }
    // if(!auth){
    //     window.location.assign('/');
    // }
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // if (to.fullPath === "/user") {

    // }
});
router.afterEach((to) => {
    // console.log('router afterEach');
    // if (store.state.exception_error && to.name !== 'exception_error') {
    //     router.push({ name: 'exception_error' })
    // }
    NProgress.done();
    window.scrollTo(0, 0);
});