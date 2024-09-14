<template>
    <div class="flex items-center h-5">
        <label class="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <input 
                type="checkbox" 
                :checked="modelValue" 
                @change="updateValue" 
                :disabled="disabled"
                class="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent form-checkbox rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400"
            >
            <span v-if="props.label">
                {{ label }}
            </span>
        </label>
    </div>
</template>
<script setup>
import {  defineEmits } from 'vue';

// Define component props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

// Define emits
const emit = defineEmits(['update:modelValue']);
// Event handler to update the checkbox value
const updateValue = (event) => {
    const target = event.target;
    emit('update:modelValue', target.checked);
};

</script>
