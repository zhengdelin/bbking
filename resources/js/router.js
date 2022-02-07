import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router'
async function Auth(to, from) {

    axios.post('/getUser').then((res) => {
        // console.log(res)
        if (res.data.user) {
            
            // router.push({ name: 'user' })
            if (to.name === "user_register" || to.name === "user_login") {
                router.push({ path: from.fullPath });
            }
            return true;
        } else {
            if (to.name !== "user_register") {
                // alert('123')
                router.push({ name: 'user_login' })
            }
            return true;
        }
    })
}
export const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/user',
            name: 'user',
            component: () => import('./components/Pages/User'),
            meta: {
                title: '會員專區',
                auth: true
            },
            children: [
                {
                    path: 'profile',
                    name:'user_profile',
                    meta: {
                        title: '會員專區-個人資料'
                    },
                    component: () => import('./components/User/Pages/Profile')
                },
                {
                    path: 'shopping-cart',
                    name: 'user_shopping_cart',
                    meta: {
                        title: '會員專區-購物車'
                    },
                    component: () => import('./components/User/Pages/ShoppingCart')
                },
                {
                    path: 'article-collection',
                    name: 'user_article_collection',
                    meta: {
                        title: '會員專區-珍藏文章'
                    },
                    component: () => import('./components/User/Pages/ArticleCollection')
                },
                {
                    path: 'shopping-record',
                    name: 'user_shopping_record',
                    meta: {
                        title: '會員專區-購物紀錄'
                    },
                    component: () => import('./components/User/Pages/ShoppingRecord')
                },
            ],
        },
        {
            path: '/user/login',

            component: () => import('./components/Pages/UserLogin'),
            children: [
                {
                    path: '',
                    name: 'user_login',
                    meta: {
                        title: "會員專區-登入"
                    },
                    component: () => import('./components/Login/LoginForm'),
                },
                {
                    path: '/user/register',
                    name: 'user_register',
                    meta: {
                        title: "會員專區-註冊"
                    },
                    component: () => import('./components/Login/RegisterForm'),
                },
            ],
            beforeEnter: (to, from) => {
                Auth(to, from)
            }
        },
        {
            path: '/',
            name: 'home',
            meta:{
                title:'123'
            },
            component: () => import('./components/Pages/Home'),
        },
    ],
});
router.beforeEach((to, from) => {
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
    // if ((from.path !== "/" && (to.fullPath === "/"))) {
    //     window.location.assign(to.fullPath);
    // }
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // if (to.fullPath === "/user") {

    // }
});

