<script setup>
const props = defineProps({
    avatarImg: {
        type: String,
        required: false,
        default: ''
    }
})
</script>


<template>
    <img class="w-10 h-10 rounded-full" :src="props.avatarImg" alt="Rounded avatar">
</template>