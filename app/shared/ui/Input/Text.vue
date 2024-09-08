<template>
    <div>
        <label class="block mb-2 text-sm">
            <span v-if="props.label" class="block mb-2 text-base font-medium  text-gray-900 dark:text-white">
                {{ props.label }}
            </span>
            <input class="border-gray-300 block w-full p-3 text-base font-normal text-gray-400 dark:text-gray-500 ring-gradient rounded-md ring-1 outline-none focus:ring-2 dark:bg-midnight-900" :type="props.type" :placeholder="props.placeholder" required />
            <span v-if="props.helper" class="block mt-1">
                {{ props.helper }}
            </span>
        </label>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    label: String,
    type: String,
    placeholder: String,
    helper: String
})
</script>