import { createApp } from "vue";
import { router } from "./router";

import Nav from './components/Globals/Nav';
// import Home from "./components/Pages/Home";

const app = createApp({
    components: {
        'v-nav': Nav,
        // "v-home": Home,
    },
    data() {
        return {
            is_home: false,
            prev_route: null,
            user: '',
            to_be_authenticated: ['user']
        }
    },
    watch: {
        $route(to, from) {
            // this.to_be_authenticated.forEach(e => {
            //     if (to.fullPath.indexOf(e)) {
            //         if (this.user) {
            //             this.$router.push({ name: to.name })
            //         } else {
            //             axios.get('/getUser').then((res) => {
            //                 this.user = res.data.user;
            //                 this.$router.push(res.data.user ? { name: to.name } : { name: 'user_login' })
            //             })

            //         }
            //     }
            // console.log(to,from)
            // if(from.name==undefined && to.fullPath==='/'){
            //     this.is_home=true;
            // }
            // else if (to.fullPath !== "/" && from.fullPath === "/") {
            //     // console.log('from home to others')
            //     // console.log(from.name)
            //     // console.log(to.fullPath !== "/")
            //     this.is_home=false
            //     if(from.name!==undefined){
            //         this.$refs.home.ClearInterval();
            //     }
            // }
        }
    },
    methods: {
    },

    computed: {

    },
    mounted() {
        console.log('mounted')
    },
    



})
app.use(router);
app.mount('#instrument_platform');




