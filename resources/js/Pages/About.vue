<template>
    <RouterView v-slot="{Component}">
        <component :is='Component' class="p-3"/>
    </RouterView>
</template>

<script>

</script>

<style scoped></style>
