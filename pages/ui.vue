<template>
    <div class="p-20 flex gap-4 flex-col">
        <div class="grid grid-cols-5 gap-2">
            <FanergyButtonBar>Подарить подписку</FanergyButtonBar>
            <FanergyButtonBar>Подарить подписку</FanergyButtonBar>
            <FanergyButtonBar>Подарить подписку</FanergyButtonBar>
            <FanergyButtonBar>Подарить подписку</FanergyButtonBar>
            <FanergyButtonBar>Подарить подписку</FanergyButtonBar>

        </div>
        <div class="w-40">
            <ColorScheme>
                <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
            </ColorScheme>
        </div>
        <FanergyWrapper>
            <FanergyIcon></FanergyIcon>
        </FanergyWrapper>
        <FanergyInputTextarea label="Test" placeholder="placeholder"></FanergyInputTextarea>
        <FanergyInputText label="Test" placeholder="placeholder" helper="Helper Text"></FanergyInputText>
        <!-- <FanergyThemeSwitcher></FanergyThemeSwitcher> -->
        <!-- <FanergyInputCheckbox></FanergyInputCheckbox> -->
        <UCheckbox v-model="selected" name="test" label="Checkbox Text" />
        <div class="flex flex-wrap gap-2">
        <FanergyBadge v-for="item in bar" :type="item">
            Текст
        </FanergyBadge>
        </div>
        <FanergyBadge>
            Текст
        </FanergyBadge>
        <FanergyDropdown></FanergyDropdown>
        <div class="grid grid-cols-5 gap-2">
            <FanergyButton>Подарить подписку</FanergyButton>
            <FanergyButton>Подарить подписку</FanergyButton>
            <FanergyButton>Подарить подписку</FanergyButton>
            <FanergyButton>Подарить подписку</FanergyButton>
            <FanergyButton>Подарить подписку</FanergyButton>

            <FanergyButton size="medium">Подарить подписку</FanergyButton>
            <FanergyButton size="medium">Подарить подписку</FanergyButton>
            <FanergyButton size="medium">Подарить подписку</FanergyButton>
            <FanergyButton size="medium">Подарить подписку</FanergyButton>
            <FanergyButton size="medium">Подарить подписку</FanergyButton>

            <FanergyButton size="small">Подарить подписку</FanergyButton>
            <FanergyButton size="small">Подарить подписку</FanergyButton>
            <FanergyButton size="small">Подарить подписку</FanergyButton>
            <FanergyButton size="small">Подарить подписку</FanergyButton>
            <FanergyButton size="small">Подарить подписку</FanergyButton>
        </div>
        <div class="grid grid-cols-5 gap-2">
            <FanergyButton variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton variant="secondary">Подарить подписку</FanergyButton>

            <FanergyButton size="medium" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="medium" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="medium" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="medium" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="medium" variant="secondary">Подарить подписку</FanergyButton>

            <FanergyButton size="small" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="small" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="small" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="small" variant="secondary">Подарить подписку</FanergyButton>
            <FanergyButton size="small" variant="secondary">Подарить подписку</FanergyButton>
        </div>
        <div>

            <FanergyButton class="mt-2 max-w-fit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. loooooooooooooooong</FanergyButton>
            <FanergyButton class="mt-2 max-w-fit">Looding...</FanergyButton>
        </div>
        <!-- <FanergyButton class="mb-2">Подарить подписку</FanergyButton>
         <FanergyButton variant="secondary">Поддержать автора</FanergyButton> -->
    </div>

</template>

<script setup>

definePageMeta({
    layout: 'clear'
})


const bar = [
    'film',
    'image',
    'images',
    'mic-vocal',
    'music',
]
const selected = ref(true)
</script>