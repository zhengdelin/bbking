<template>
  <div class="edit-button">
    <div class="flex-ac">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"
        />
      </svg>
      <div class="flex-cc">
        <span class="edit-text">編輯</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
svg {
  margin-bottom: 4px;
  fill: white;
}
.edit-button {
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: white;
  border-radius: 8px;
  background: rgb(58, 59, 60);
}
.edit-button:hover{
    background: rgb(78,79,80);
    cursor: pointer;
}
.edit-text {
  margin-left: 5px;
  font-size: 1rem;
}

</style>