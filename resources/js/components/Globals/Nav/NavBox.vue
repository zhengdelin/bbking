<template>
  <div id="navbox" class="flex-ac flex-col sm:flex-row w-full text-center">
    <router-link :to="{ name: 'home' }" class=" border-b sm:border-0 border-gray-500"
      >首頁</router-link
    >
    <!-- <a href="/" class=" border-b sm:border-0 border-gray-500">首頁</a> -->
    <a href="#" class=" border-b sm:border-0 border-gray-500">商品</a>
    <a href="#" class=" border-b sm:border-0 border-gray-500">文章</a>
    <router-link :to="{ name: 'user' }" class=" border-b sm:border-0 border-gray-500"
      >會員專區</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbox {
  height: 100vh;
}

#navbox > * {
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 1rem;
  width: 100%;
  /* display: inline-block; */
}
#navbox > a:hover {
  background-color: rgba(193, 247, 247, 0.5);
  font-weight: bold;
}
.router-link-active {
  background-color: rgba(193, 247, 247, 0.5);
  font-weight: bold;
}

@media all and (min-width: 576px) {
  #navbox {
    height: 50px;
  }
  #navbox > * {
    padding: 0.5rem 1rem 0 1rem; /* 上右下左 */
    width: auto;
  }
  #navbox > a:hover {
    border-bottom: purple 2px solid;
    color: purple;
    font-weight: bold;
    background-color: white;
  }
  .router-link-active {
    background-color: white;
    font-weight: normal;
    border-bottom: rgb(200, 111, 241) 2px solid;
    color: rgb(186, 37, 255) !important;
  }
}
</style>