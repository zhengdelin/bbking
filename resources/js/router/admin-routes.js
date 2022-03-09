export const admin_routes = [{
    path: "/admin",
    name: "admin",
    mata: {
        title: ''
    },
    component: () =>
        import ("../Pages/Admin"),
    children: [{
            path: "/admin/home",
            name: "admin-home"
        },
        //會員首頁
        {
            path: "/admin/members",
            meta: {
                title: "後台管理-會員"
            },
            props: true,
            name: 'admin-members',
            component: () =>
                import ("../SubPages/Admin/members/AdminMembers")
        },
        //新增會員
        {
            path: "/admin/members/create",
            meta: {
                title: "後台管理-新增會員"
            },
            name: 'admin-members-create',
            component: () =>
                import ("../SubPages/Admin/members/CreateMember")
        },
        //編輯會員資料
        {
            path: "/admin/members/update",
            meta: {
                title: "後台管理-編輯會員資料"
            },
            props: true,
            name: 'admin-members-update',
            component: () =>
                import ("../SubPages/Admin/members/UpdateMember")
        },
        //文章首頁
        {
            path: "/admin/articles",
            meta: {
                title: "後台管理-文章"
            },
            name: "admin-articles",
            component: () =>
                import ("../SubPages/Admin/articles/AdminArticles"),
        },
        //新增文章
        {
            path: "/admin/articles/create",
            meta: {
                title: "後台管理-新增文章"
            },
            name: "admin-articles-create",
            component: () =>
                import ("../SubPages/Admin/articles/CreateArticle")
        },
        //編輯文章
        {
            path: "/admin/articles/update",
            meta: {
                title: "後台管理-編輯文章"
            },
            props: true,
            name: "admin-articles-update",
            component: () =>
                import ("../SubPages/Admin/articles/UpdateArticle")
        },
        //產品首頁
        {
            path: "/admin/products",
            meta: {
                title: "後台管理-產品"
            },
            name: "admin-products",
            component: () =>
                import ("../SubPages/Admin/products/AdminProducts")
        },
        //新增產品
        {
            path: "/admin/products/create",
            meta: {
                title: "後台管理-新增產品"
            },
            name: "admin-products-create",
            component: () =>
                import ("../SubPages/Admin/products/CreateProduct")
        },
        //編輯產品
        {
            path: "/admin/products/update",
            meta: {
                title: "後台管理-編輯產品"
            },
            name: "admin-products-update",
            component: () =>
                import ("../SubPages/Admin/products/UpdateProduct")
        },
    ]
}, ]