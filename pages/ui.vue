<template>
    <div class="p-20 flex gap-4 flex-col">
        <FanergyButtonPrimary>Подарить подписку</FanergyButtonPrimary>
        <div class="grid grid-cols-5 gap-2">
            <FanergyButtonPrimary>Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary>Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary>Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary icon="left">Подарить</FanergyButtonPrimary>
            <FanergyButtonPrimary disabled>Подарить подписку</FanergyButtonPrimary>

            <FanergyButtonPrimary size="medium">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="medium">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="medium">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="medium" icon="right">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="medium" disabled>Подарить подписку</FanergyButtonPrimary>

            <FanergyButtonPrimary size="small">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="small">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="small">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="small" icon="left">Подарить подписку</FanergyButtonPrimary>
            <FanergyButtonPrimary size="small" disabled>Подарить подписку</FanergyButtonPrimary>
        </div>
        <div class="grid grid-cols-5 gap-2 mt-3">
            <FanergyButtonSecondary>Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary>Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary>Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary icon="left">Подарить</FanergyButtonSecondary>
            <FanergyButtonSecondary disabled>Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="medium">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="medium">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="medium">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="medium" icon="right">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="medium" disabled>Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="small">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="small">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="small">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="small" icon="left">Подарить подписку</FanergyButtonSecondary>
            <FanergyButtonSecondary size="small" disabled>Подарить подписку</FanergyButtonSecondary>
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
        <FanergyInputText
        label="Username"
        type="text"
        placeholder="Enter your username"
        helper="This is a required field"
        validation="valid">
    </FanergyInputText>
    <FanergyInputText
        label="Username"
        type="text"
        placeholder="Enter your username"
        helper="This is a required field"
        validation="invalid">
    </FanergyInputText>
    <FanergyInputText
        label="Username"
        type="text"
        placeholder="Enter your username"
        helper="This is a required field"
        validation="default">
    </FanergyInputText>
         <!-- или "invalid" или "default" -->
        <!-- <FanergyThemeSwitcher></FanergyThemeSwitcher> -->
        <!-- <FanergyInputCheckbox></FanergyInputCheckbox> -->
        {{ selected }}
        <!-- <FanergyInputCheckbox v-model="selected" label="Checkbox Text"></FanergyInputCheckbox> -->
        <!-- <FanergyInputCheckboxRound label="Checkbox Text"></FanergyInputCheckboxRound> -->
        <FanergyInputToggle></FanergyInputToggle>
        <div class="flex flex-wrap gap-2">
            <FanergyBadge v-for="item in bar" :type="item">
                Текст
            </FanergyBadge>
        </div>
        <FanergyBadge>
            Текст
        </FanergyBadge>
        <FanergyDropdown></FanergyDropdown>

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