<template>
  <div v-if="show">
    <br /><br /><br /><br /><br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
    Profilebr
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 300);
  },
};
</script>

<style scoped>
</style>