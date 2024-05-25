<template>
    <div>
        <h1>Unknown</h1>
    </div>
</template>

<script setup>
    throw createError({statusCode: 404, statusMessage: 'Page Not Found', fatal: true});
</script>