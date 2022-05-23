// 主要活動區塊

<template>
    <div class="p-5">
        <swiper
            :modules="modules"
            :pagination="{ clickable: true }"
            :autoplay="{ autoplay: true }"
            navigation
            loop
        >
            <swiper-slide
                class="flex items-center justify-center"
                v-for="activity_img in activity_imgs"
                :key="activity_img.id"
            >
                <router-link :to="activity_img.url">
                    <img
                        class="h-[450px]"
                        :src="activity_img.image"
                        :alt="activity_img.image"
                    />
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
    name: "ActivityImgBanner",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const { state } = useStore();
        const activity_imgs = computed(() => state.globalHandler.activity_imgs);
        const modules = [Navigation, Pagination, Autoplay, A11y];
        return { activity_imgs, modules };
    },
};
</script>

<style>
.event-img {
    width: 100%;
}
.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
    width: 20px;
    height: 20px;
    border: none;
    border-left: black 8.5px solid;
    border-bottom: black 8.5px solid;
}
.fp-controlArrow.fp-prev::after,
.fp-controlArrow.fp-next:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 1.5px;
    left: -6.5px;
    right: 1.5px;
    bottom: -6.5px;
    border-left: white 5px solid;
    border-bottom: white 5px solid;
}
.fp-controlArrow.fp-prev {
    transform: rotate(45deg);
}
.fp-controlArrow.fp-next {
    transform: rotate(225deg);
}
.fp-controlArrow.fp-prev:hover {
    transform: rotate(45deg) translate(-2.5px, 2.5px);
}
.fp-controlArrow.fp-next:hover {
    transform: rotate(225deg) translate(-2.5px, 2.5px);
}
/* slides導航 */
.fp-slidesNav {
    text-align: center;
    padding-top: 20px;
}
.fp-slides,
.fp-slidesContainer {
    height: auto;
}
/* slides導航的點點 */
.fp-slidesNav ul li a span {
    background: white;
}
</style>
