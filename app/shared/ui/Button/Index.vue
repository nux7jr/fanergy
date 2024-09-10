<template>

    <button :class="[
        'transition-colors duration-200 ease-in-out flex items-center justify-center',
        sizeClasses,
        variantClasses,
        isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2',
    ]" :disabled="isDisabled">
        
        <!-- <Icon mode="svg" name="fanergy:bold-stars" /> -->
        <slot />
    </button>
</template>

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
        default: '', // todo добавитьб иконку из фигмы
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

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'medium':
            return 'px-4 py-2 text-base'
        case 'small':
            return 'px-3 py-1 text-sm'
        default:
            return 'px-6 py-3 text-base'
    }
})

const variantClasses = computed(() => {
    if (props.variant === 'secondary') {
        return 'text-[#1AB8E0] border border-[#1AB8E0] bg-transparent'
    }

    const gradientBackground = 'bg-gradient-to-r from-[#33BDB9] via-[#1AC8E0] to-[#1AB1E0]';
    return `${gradientBackground} text-white`
})
</script>

<style scoped>
button {
    border-radius: 0.375rem;
}
</style>


<!-- Ниже для primary -->
<!-- 33DBD9 0% 1AC8E0 46% 1AB1E0 100%  это обычная заливка--> 
<!-- 2BD2D0 0% 00ADC5 46% 0C9DCB 100%  это при ховере-->


<!-- Ниже для secondary -->
<!-- Полность прозрачная это обычная заливка--> 
<!-- FFFFFF на 10% opacity это при ховере-->
