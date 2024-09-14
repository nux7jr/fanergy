<template>
    <div class="flex flex-col space-y-2">
        <div v-for="item in fo" :key="item.value" class="flex items-center">
            <input 
                type="radio" 
                :id="'radio-' + item.value" 
                :value="item.value" 
                v-model="selectedValue" 
                name="custom-radio" 
                class="w-4 h-4 border-midnight-300 border dark:bg-midnight-900 dark:border-midnight-700"
            />
            <label :for="'radio-' + item.value" class="ml-2 text-sm font-medium text-midnight-900 dark:text-midnight-100">
                {{ item.label }}
            </label>
        </div>
    </div>
</template>


<script setup>
const fo = [
    { 
        label: "test radio",
        value: "values1"
    },
    { 
        label: "test radio 1",
        value: "values2"
    },
    { 
        label: "test radio 2",
        value: "values3"
    }
]
</script>
<!-- border: 0.5px solid #92969c;  -->
<style scoped>
input[type="radio"] {
    appearance: none;
    border-radius: 50%;
    outline: none;
    position: relative;
    cursor: pointer;
}

input[type="radio"]:checked {
    background-color: #1AB8E0; 
    border: 0.5px solid #1AB8E0; 
}

input[type="radio"]:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
</style>