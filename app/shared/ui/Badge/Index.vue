<template>
    <div class="w-max flex gap-2 justify-center items-center px-3 py-1.5 bg-yellow border-full rounded-3xl">
        <Icon size="16px" v-if="props.type" :name="'fanergy:' + props.type" />
        <div class="text-midnight-900 font-medium">
            <slot/>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    type: String,
})
</script>