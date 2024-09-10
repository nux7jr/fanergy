<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'normal', // 'normal', 'medium', 'small'
    },
    variant: {
        type: String,
        default: 'primary', // 'primary', 'secondary'
    },
    icon: {
        type: String,
        default: '', // todo добавить иконку из фигмы
    },
    iconPosition: {
        type: String,
        default: 'left', // 'left' or 'right'
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
})

const buttonClasses = computed(() => {
    const baseClasses = 'transition-colors duration-200 ease-in-out flex items-center justify-center rounded';
    const sizeClasses = 'px-4 py-2 text-base'; 
    const variantClasses = props.variant === 'secondary'
        ? 'text-[#1AB8E0] border border-[#1AB8E0] bg-transparent'
        : 'text-white bg-gradient-to-r from-[#33BDB9] via-[#1AC8E0] to-[#1AB1E0]';
    
    const disabledClasses = props.isDisabled
        ? 'cursor-not-allowed opacity-60'
        : 'hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2';

    return `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses}`;
});
</script>
<template>
    <button :class="buttonClasses" :disabled="isDisabled">
        <slot />
    </button>
</template>
<style scoped>
button {
    border-radius: 0.375rem;
    outline: none;
}

button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5); 
}

button:hover {
    /* Primary button hover styles */
    background-color: rgba(51, 189, 185, 0.2); 
}

button:disabled {
    background-color: transparent; 
}

button:disabled:hover {
    background-color: transparent;
}
</style>
