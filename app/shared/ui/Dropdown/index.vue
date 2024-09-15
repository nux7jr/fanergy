<template>
    <div class="flex flex-col w-55 relative">
        <span v-if="label" class="text-midnight-950 text-lg mb-2.5">
            {{ label }}
        </span>
        <button @click="openDropDown"
            class="text-midnight-500 ring-1 ring-midnight-200 dark:bg-gray-800 dark:ring-midnight-600 dark:text-gray-500 flex items-center justify-between gap-2 rounded-lg px-4 py-2.5"
            :class="{'ring-linear-40 dark:ring-linear-40': isOpen}"
            type="button">
            <span class="dark:text-gray-500 font-normal">
                {{ selectedValue || 'Dropdown button' }}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M2.41469 5.03551L2.41467 5.03552L2.41749 5.03828L7.76749 10.2633L8.0015 10.4918L8.23442 10.2622L13.5844 4.98716L13.5844 4.98717L13.5861 4.98551C13.6809 4.89068 13.8199 4.89068 13.9147 4.98551C14.0092 5.08005 14.0095 5.21846 13.9155 5.31326C13.9152 5.31354 13.915 5.31382 13.9147 5.3141L8.16676 10.962L8.16676 10.962L8.16469 10.9641C8.06838 11.0604 8.02352 11.0665 8.00039 11.0665C7.94147 11.0665 7.89042 11.052 7.82064 10.9989L2.08526 5.36327C1.99127 5.26846 1.99154 5.13005 2.08609 5.03551C2.18092 4.94068 2.31986 4.94068 2.41469 5.03551Z"
                    fill="#6B7280" stroke="#6B7280" stroke-width="0.666667" />
            </svg>
        </button>

        <div v-show="isOpen" class="z-10 w-full absolute left-0 top-14 bg-white rounded-lg ring-1 shadow ring-midnight-200 dark:bg-midnight-800 dark:ring-gray-600 dark:text-gray-500">
            <ul class="py-2 font-normal">
                <li v-for="item in values" :key="item">
                    <button
                        type="button"
                        @click="selectValue(item)"
                        class="block w-full text-midnight-500 text-left px-4 py-2 hover:bg-gradient-to-r from-linear-0 from-0% via-linear-40 via-40% to-linear-100 to-100% hover:text-white dark:hover:text-gradient">
                        {{ item }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    values: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedValue = ref(null);

const openDropDown = () => {
    if (props.disabled) {
        return;
    }
    isOpen.value = !isOpen.value;
};

const selectValue = (value) => {
    selectedValue.value = value;
    isOpen.value = false;
    emit('update:modelValue', value);
};
</script>

<style scoped>
.dark .hover\:bg-gradient-to-r {
    background: none;
}
.dark .hover\:bg-gradient-to-r:hover {
    background: #374151;
}
</style>