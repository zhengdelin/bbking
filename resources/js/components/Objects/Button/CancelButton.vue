<template>
  <div class="cancel-button">
    <div class="flex-ac">
      <div class="flex-cc">
        <span class="cancel-text">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cancel-button {
  margin: 0 10px;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: white;
  border-radius: 8px;
  background: rgb(58, 59, 60);
}
.cancel-button:hover{
    background: rgb(78,79,80);
    cursor: pointer;
}
.cancel-text {
  font-size: 1rem;
}

</style>