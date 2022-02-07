import axios from 'axios';
import {createApp} from "vue";
import Nav from './components/Globals/Nav.vue';
import EventImgBanner from './components/EventImgBanner.vue';

const app =createApp({
    // render: h => h(app),
    components:{
        'v-nav':Nav,
        'v-event-img-banner':EventImgBanner,
    }
});
app.mount('#instrument_platform');




