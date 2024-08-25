<template>
    <div>
        
        <FanergyWrapper class="flex gap-4 mt-4">
            <p>
                index page
                <ColorScheme>
                    <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
                </ColorScheme>
            </p>
            <div class="">
                <FanergyButton class="mb-2">Подарить подписку</FanergyButton>
                <FanergyButton variant="secondary">Поддержать автора</FanergyButton>
            </div>
        </FanergyWrapper>
    </div>

</template>
<script setup lang="ts">

</script>