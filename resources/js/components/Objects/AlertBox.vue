<template>
  <div class="alert-box" :class="status">
    <ul>
      <li v-for="item in errors" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
    status_object: Object,
  },
  computed:{
    errors(){
      let errors=[]
      Object.values(this.status_object).forEach(i=>{
        errors.push(...i)
      })
      return errors;
    },
  }
};
</script>

<style>
ul{
  margin:0;
}
.alert-box {
  position: relative;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.alert-box.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-box.error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>