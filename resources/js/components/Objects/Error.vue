<template>
  <div class="error text-center">{{ error }}</div>
</template>

<script>
export default {
    props:{
        error:String
    }
};
</script>

<style>
.error {
  color: red;
  font-weight: bold;
}
</style>