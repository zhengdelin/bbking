<template>
    <div
        class="text-center flex flex-col gap-3 justify-center items-center py-10"
    >
        <div class="max-w-[10rem] min-h-[10rem]">
            <slot name="image">
                <img src="/pictures/empty.png" alt="空圖示" />
            </slot>
        </div>
        <div class="font-bold">
            <slot>這裡甚麼都沒有</slot>
        </div>
        <div class="flex gap-3 font-bold">
            <slot name="button"> </slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
