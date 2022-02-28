<template>
  <div class="save-button">
    <div class="flex-ac">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
        />
      </svg>
      <div class="flex-cc">
        <span class="save-text">儲存</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
svg {
  /* margin-bottom: 4px; */
  fill: white;
}
.save-button {
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: white;
  border-radius: 8px;
  background: rgb(36,120,221);
}
.save-button:hover {
  background: rgb(58,133,224);
  cursor: pointer;
}
.save-text {
  margin-left: 5px;
  font-size: 1rem;
}
</style>