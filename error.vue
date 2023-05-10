<script setup>
const props = defineProps({
    error: Object,
})
const handleError = () => clearError({ redirect: '/'})
</script>

<template>
    <div>
        <h1 class="text-red-500 text-center mt-7 text-2xl underline font-bold">Opps! an error has occurred</h1>
        <pre class="bg-neutral-900 text-neutral-200 p-10 mx-4 my-8 rounded-lg border border-accent-500">{{ JSON.stringify(error, null, 2)}}</pre>
        <button>Go Back</button>
    </div>

</template>