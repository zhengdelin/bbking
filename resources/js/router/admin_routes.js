export const admin_routes = {
    path: "/admin/members",
    name: "admin",
    meta: {
        title: "後臺管理",
    },
    component: () =>
        import ("../Pages/Admin"),
    children: [
        //會員首頁
        {
            path: "",
            name: "admin-members",
            meta: {
                title: "後台管理-會員",
            },
            component: () =>
                import ("../SubPages/Admin/members/AdminMembers"),
        },
        //新增會員
        {
            path: "/admin/members/create",
            meta: {
                title: "後台管理-新增會員",
            },
            name: "admin-members-create",
            component: () =>
                import ("../SubPages/Admin/members/CreateMember"),
        },
        //編輯會員資料
        {
            path: "/admin/members/update",
            meta: {
                title: "後台管理-編輯會員資料",
            },
            props: true,
            name: "admin-members-update",
            component: () =>
                import ("../SubPages/Admin/members/UpdateMember"),
        },
        //文章首頁
        {
            path: "/admin/articles",
            meta: {
                title: "後台管理-文章",
            },
            name: "admin-articles",
            component: () =>
                import ("../SubPages/Admin/articles/AdminArticles"),
        },
        //新增文章
        {
            path: "/admin/articles/create",
            meta: {
                title: "後台管理-新增文章",
            },
            name: "admin-articles-create",
            component: () =>
                import ("../SubPages/Admin/articles/CreateArticle"),
        },
        //編輯文章
        {
            path: "/admin/articles/update",
            meta: {
                title: "後台管理-編輯文章",
            },
            props: true,
            name: "admin-articles-update",
            component: () =>
                import ("../SubPages/Admin/articles/UpdateArticle"),
        },
        //產品首頁
        {
            path: "/admin/products",
            meta: {
                title: "後台管理-產品",
            },
            name: "admin-products",
            component: () =>
                import ("../SubPages/Admin/products/AdminProducts"),
        },
        //新增產品
        {
            path: "/admin/products/create",
            meta: {
                title: "後台管理-新增產品",
            },
            name: "admin-products-create",
            component: () =>
                import ("../SubPages/Admin/products/CreateProduct"),
        },
        //編輯產品
        {
            path: "/admin/products/update",
            meta: {
                title: "後台管理-編輯產品",
            },
            props: true,
            name: "admin-products-update",
            component: () =>
                import ("../SubPages/Admin/products/UpdateProduct"),
        },
        //類別檢視
        {
            path: "/admin/categories",
            meta: {
                title: "後台管理-類別",
            },
            name: "admin-categories",
            component: () =>
                import ("../SubPages/Admin/categories/AdminCategories"),
        },
        //新增類別
        {
            path: "/admin/categories/create",
            meta: {
                title: "後台管理-新增類別",
            },
            name: "admin-categories-create",
            component: () =>
                import ("../SubPages/Admin/categories/CreateCategory"),
        },
        //編輯類別
        {
            path: "/admin/categories/update",
            meta: {
                title: "後台管理-編輯類別",
            },
            props: true,
            name: "admin-categories-update",
            component: () =>
                import ("../SubPages/Admin/categories/UpdateCategory"),
        },
        //活動圖片
        {
            path: "/admin/activity_imgs",
            meta: {
                title: "後台管理-活動圖片檢視",
            },
            name: "admin-activity_imgs",
            component: () =>
                import ("../SubPages/Admin/activity_imgs/AdminActivityImgs"),
        },
        //新增活動圖片
        {
            path: "/admin/activity_imgs/create",
            meta: {
                title: "後台管理-新增活動圖片",
            },
            name: "admin-activity_imgs-create",
            component: () =>
                import ("../SubPages/Admin/activity_imgs/CreateActivityImg"),
        },
        //編輯活動圖片
        {
            path: "/admin/activity_imgs/update",
            meta: {
                title: "後台管理-編輯活動圖片",
            },
            props: true,
            name: "admin-activity_imgs-update",
            component: () =>
                import ("../SubPages/Admin/activity_imgs/UpdateActivityImg"),
        },
        /* 所有店家資訊 */
        {
            path: "/admin/store_infos",
            name: "admin-store_infos",
            meta: {
                title: "後台管理-店家資訊",
            },
            component: () => import("../SubPages/Admin/stores/AdminStoreInfos"),
        },
        {
            path: "/admin/store_infos/create",
            name: "admin-store_info-create",
            meta: {
                title: "後台管理-新增店家資訊",
            },
            component: () =>
                import("../SubPages/Admin/stores/CreateStoreInfo"),
        },
        {
            path: "/admin/store_infos/update",
            name: "admin-store_info-update",
            meta: {
                title: "後台管理-更新店家資訊",
            },
            props: true,
            component: () =>
                import("../SubPages/Admin/stores/UpdateStoreInfo"),
        },
        {
            path: "/admin/orders",
            name: "admin-orders",
            meta: {
                title: "後台管理-訂單",
            },
            component: () =>
                import("../SubPages/Admin/orders"),
        },
        {
            path: "/admin/orders/:id",
            name: "admin-orders-detail",
            meta: {
                title: "後台管理-訂單管理",
            },
            component: () =>
                import("../SubPages/Admin/orders/OrderDetail"),
        },
    ],
};