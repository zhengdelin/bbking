// 主要活動區塊

<template>
  <div class="section fp-auto-height">
    <div class="slide">
      <img class="event-img" src="/pictures/test.jpg" alt="" />
    </div>
    <div class="slide fp-auto-height">
      <img class="event-img" src="/pictures/test1.webp" alt="" />
    </div>
    <div class="slide fp-auto-height">
      <img class="event-img" src="/pictures/test.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name:'v-event-img-banner',
  data() {
    
    return {
    }
  },
  methods: {
  },
  mounted() {
    
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