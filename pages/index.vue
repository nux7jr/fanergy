<template>
    <div>
        <FanergyWrapper class="flex gap-4 mt-4">
            <div>
                <ColorScheme>
                    <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
                </ColorScheme>
                <div>
                    <!-- <FanergyThemeSwitcher /> -->
                    <!-- <FanergyTooltip></FanergyTooltip> -->
                </div>
            </div>
            <!-- <FanergyIcon></FanergyIcon> -->
            <div class="">
                <FanergyButton class="mb-2">Подарить подписку</FanergyButton>
                <FanergyButton variant="secondary">Поддержать автора</FanergyButton>
            </div>
        </FanergyWrapper>
    </div>

</template>
<script setup lang="ts">

</script>