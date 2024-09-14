<template>
    <div>
        <label class="block mb-2 text-sm">
            <span v-if="props.label" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                {{ props.label }}
            </span>
            <input
                :class="inputClass"
                :type="props.type"
                :placeholder="props.placeholder"
                required
            />
            <span v-if="props.helper" :class="helperClass" class="block mt-1">
                {{ props.helper }}
            </span>
        </label>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: String,
    type: String,
    placeholder: String,
    helper: String,
    validation: {
        type: String,
        default: 'default',
    }
});

const inputClass = computed(() => {
    const baseClasses = 'border-gray-300 block w-full p-3 text-base font-normal text-gray-400 dark:text-gray-500 ring-gradient rounded-md ring-1 outline-none focus:ring-2 dark:bg-midnight-900';
    const validationClasses = {
        default: '',
        valid: 'ring-validation focus:ring-validation',
        invalid: 'ring-error focus:ring-error'
    };

    return `${baseClasses} ${validationClasses[props.validation] || validationClasses.default}`;
});

const helperClass = computed(() => {
    const baseClasses = 'block mt-1 text-sm';
    const validationClasses = {
        default: 'text-gray-600 dark:text-gray-400',
        valid: 'text-validation',
        invalid: 'text-error'
    };

    return `${baseClasses} ${validationClasses[props.validation] || validationClasses.default}`;
});
</script>
