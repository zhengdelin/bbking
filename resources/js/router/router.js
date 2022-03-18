import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store/index";
// NProgress.inc(0.2);
// NProgress.configure({ easing: 'linear', speed: 500, showSpinner: false, trickle: false })

// function Auth(to, from) {
//     // console.log(!store._state.data.user);
//     if (to.name === "user-login") {
//         return true;
//     } else {
//         if (!store._state.data.is_login) {
//             // router.push({ name: 'user' })
//             if (to.name !== "user-register") {
//                 // alert('123')
//                 router.push({
//                     name: "user-login",
//                 });
//             }
//             return true;
//         } else {
//             if (to.name === "user-register" || to.name === "user-login") {
//                 router.push({
//                     path: from.fullPath,
//                 });
//             }
//             return true;
//         }
//     }
// }
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        //首頁
        {
            path: "/",
            name: "home",
            meta: {
                title: "比比王樂器行",
            },
            components: {
                nav: () =>
                    import ("../components/Nav/Nav"),
                default: () =>
                    import ("../Pages/Home"),
            },
        },
        //登入註冊
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
                    name: "user-login",
                    meta: {
                        title: "會員專區-登入",
                    },
                    component: () =>
                        import ("../SubPages/Login/LoginForm"),
                },
                {
                    path: "/user/register",
                    name: "user-register",
                    meta: {
                        title: "會員專區-註冊",
                    },
                    component: () =>
                        import ("../SubPages/Login/RegisterForm"),
                },
            ],
            // beforeEnter: (to, from) => {
            //     Auth(to, from);
            // },
        },
        //文章
        {
            path: "/articles",
            name: "article",
            meta: {
                title: "比比王樂器行-文章資訊"
            },
            components: {
                nav: () =>
                    import ("../components/Nav/Nav"),
                default: () =>
                    import ("../Pages/Article"),
            },

        },
        //文章類別
        {
            path: "/articles/:category",
            name: "article-category",
            meta: {
                title: "比比王樂器行-文章類別"
            },
            components: {
                nav: () =>
                    import ("../components/Nav/Nav"),
                default: () =>
                    import ("../Pages/Article"),
            },
        },
        //404
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            meta: {
                title: "比比王樂器行",
            },
            component: () =>
                import ("../Pages/404"),
        },
    ],
});
router.beforeEach((to, from) => {
    NProgress.start();
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
    NProgress.done();
    window.scrollTo(0, 0);
});