<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'normal', // 'normal', 'medium', 'small'
    },
    icon: {
        type: String, // left, right
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})


const buttonClasses = computed(() => {
    const sizeClasses = {
        'normal': 'py-3 text-sm md:py-5 md:text-base',
        'medium': 'py-3 text-sm md:py-4 md:text-sm',
        'small': 'py-3 text-sm',
    }

    return [
        !props.disabled ? 'button-gradient' : '',
        sizeClasses[props.size] || 'py-5 text-xs',
    ].join(' ')
})

const iconSize = computed(() => props.size === 'normal' ? '24' : '16')


</script>
<template>
    <button
    :class="buttonClasses"
    :disabled="props.disabled"
    class="flex items-center relative gap-x-2 justify-center rounded-lg text-white disabled:text-gray-400 disabled:bg-gray-200 dark:disabled:bg-midnight-600 dark:disabled:text-midnight-400 disabled:cursor-not-allowed" 
        >
        <svg v-if="props.icon === 'left'" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"
            viewBox="0 0 24 24" fill="none">
            <path
                d="M7.45284 2.71266C7.8276 1.76244 9.1724 1.76245 9.54716 2.71267L10.7085 5.65732C10.8229 5.94743 11.0526 6.17707 11.3427 6.29148L14.2873 7.45284C15.2376 7.8276 15.2376 9.1724 14.2873 9.54716L11.3427 10.7085C11.0526 10.8229 10.8229 11.0526 10.7085 11.3427L9.54716 14.2873C9.1724 15.2376 7.8276 15.2376 7.45284 14.2873L6.29148 11.3427C6.17707 11.0526 5.94743 10.8229 5.65732 10.7085L2.71266 9.54716C1.76244 9.1724 1.76245 7.8276 2.71267 7.45284L5.65732 6.29148C5.94743 6.17707 6.17707 5.94743 6.29148 5.65732L7.45284 2.71266Z"
                fill="white" />
            <path
                d="M16.9245 13.3916C17.1305 12.8695 17.8695 12.8695 18.0755 13.3916L18.9761 15.6753C19.039 15.8348 19.1652 15.961 19.3247 16.0239L21.6084 16.9245C22.1305 17.1305 22.1305 17.8695 21.6084 18.0755L19.3247 18.9761C19.1652 19.039 19.039 19.1652 18.9761 19.3247L18.0755 21.6084C17.8695 22.1305 17.1305 22.1305 16.9245 21.6084L16.0239 19.3247C15.961 19.1652 15.8348 19.039 15.6753 18.9761L13.3916 18.0755C12.8695 17.8695 12.8695 17.1305 13.3916 16.9245L15.6753 16.0239C15.8348 15.961 15.961 15.8348 16.0239 15.6753L16.9245 13.3916Z"
                fill="white" />
        </svg>
        <span class="button-text">
            <slot />
        </span>
        <svg v-if="props.icon === 'right'" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"
            viewBox="0 0 24 24" fill="none">
            <path
                d="M7.45284 2.71266C7.8276 1.76244 9.1724 1.76245 9.54716 2.71267L10.7085 5.65732C10.8229 5.94743 11.0526 6.17707 11.3427 6.29148L14.2873 7.45284C15.2376 7.8276 15.2376 9.1724 14.2873 9.54716L11.3427 10.7085C11.0526 10.8229 10.8229 11.0526 10.7085 11.3427L9.54716 14.2873C9.1724 15.2376 7.8276 15.2376 7.45284 14.2873L6.29148 11.3427C6.17707 11.0526 5.94743 10.8229 5.65732 10.7085L2.71266 9.54716C1.76244 9.1724 1.76245 7.8276 2.71267 7.45284L5.65732 6.29148C5.94743 6.17707 6.17707 5.94743 6.29148 5.65732L7.45284 2.71266Z"
                fill="white" />
            <path
                d="M16.9245 13.3916C17.1305 12.8695 17.8695 12.8695 18.0755 13.3916L18.9761 15.6753C19.039 15.8348 19.1652 15.961 19.3247 16.0239L21.6084 16.9245C22.1305 17.1305 22.1305 17.8695 21.6084 18.0755L19.3247 18.9761C19.1652 19.039 19.039 19.1652 18.9761 19.3247L18.0755 21.6084C17.8695 22.1305 17.1305 22.1305 16.9245 21.6084L16.0239 19.3247C15.961 19.1652 15.8348 19.039 15.6753 18.9761L13.3916 18.0755C12.8695 17.8695 12.8695 17.1305 13.3916 16.9245L15.6753 16.0239C15.8348 15.961 15.961 15.8348 16.0239 15.6753L16.9245 13.3916Z"
                fill="white" />
        </svg>
    </button>
</template>



<style scoped>
.button-gradient {
    position: relative;
    background: linear-gradient(to right, #33DBD9 0%, #1AC8E0 46%, #1AB1E0 100%);
    transition: color 0.5s ease-out;
    z-index: 1;
}

.button-gradient::before,
.button-gradient::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: opacity 0.5s ease-out;
    z-index: -1;
}

.button-gradient::before {
    background: linear-gradient(to right, #33DBD9 0%, #1AC8E0 46%, #1AB1E0 100%);
    opacity: 1;
}

.button-gradient::after {
    background: linear-gradient(to right, #2BD2D0 0%, #00ADC5 46%, #0C9DCB 100%);
    opacity: 0;
}

.button-gradient:hover::before {
    opacity: 0;
}

.button-gradient:hover::after {
    opacity: 1;
}
.button-gradient:disabled::before,
.button-gradient:disabled::after {
    content: none;
    opacity: 0;
}

</style>

