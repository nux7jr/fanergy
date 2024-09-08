<template>
    <div>
        <label>
            <span v-if="props.label" class="block mb-2 text-base font-medium  text-gray-900 dark:text-white">
                {{ props.label }}
            </span>
            <textarea 
                rows="4"
                class="block p-3 w-full text-base font-normal text-gray-400 dark:text--500 ring-gradient rounded-md ring-1 outline-none focus:ring-2 dark:bg-gray-900"
                :placeholder="props.placeholder"></textarea>
        </label>

    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    label: String,
    placeholder: String
})
</script>