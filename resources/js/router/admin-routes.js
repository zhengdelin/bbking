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
        }, {
            path: "/admin/members",
            meta: {
                title: "後台管理-會員"
            },
            name: 'admin-members',
            component: () =>
                import ("../components/Admin/members/AdminMembers")
        },
        //新增會員
        {
            path: "/admin/members/create",
            meta: {
                title: "後台管理-新增會員"
            },
            name: 'admin-members-create',
            component: () =>
                import ("../components/Admin/members/CreateMember")
        },
        //編輯會員資料
        {
            path: "/admin/members/edit",
            meta: {
                title: "後台管理-編輯會員資料"
            },
            props: true,
            name: 'admin-members-edit',
            component: () =>
                import ("../components/Admin/members/EditMember")
        },
        {
            path: "/admin/articles",
            meta: {
                title: "後台管理-文章"
            },
            name: "admin-articles"
        },
        {
            path: "/admin/products",
            meta: {
                title: "後台管理-產品"
            },
            name: "admin-products"
        }
    ]
}, ]