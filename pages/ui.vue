<template>
    <div class="p-20 flex gap-4 flex-col">
        <FanergyThemeSwitcher></FanergyThemeSwitcher>
        <div class="w-40">
            <ColorScheme>
                <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
            </ColorScheme>
        </div>
        <FanergyInputTextarea label="Test" placeholder="placeholder"></FanergyInputTextarea>
        <FanergyInputText label="Test" placeholder="placeholder" helper="Helper Text"></FanergyInputText>
        <!-- <FanergyInputCheckbox></FanergyInputCheckbox> -->
        <UCheckbox v-model="selected" name="test" label="Checkbox Text" />
        <FanergyBadge v-for="item in bagesIcons" :type="item">
            Текст
        </FanergyBadge>
        <FanergyBadge>
            Текст
        </FanergyBadge>
        <FanergyDropdown></FanergyDropdown>
        <div class="bg-white p-3 flex gap-4 flex-col rounded-md">
            <h2 class="text-black">system</h2>
            <div class="flex gap-2">
                <Icon v-for="item in systemIcons" :name="'fanergy:' + item" />
            </div>
            <h2 class="text-black">bages</h2>
            <div class="flex gap-2">
                <Icon v-for="item in bagesIcons" :name="'fanergy:' + item" />
            </div>
            <h2 class="text-black">social</h2>
            <div class="flex gap-2">
                <Icon v-for="item in socialsIcons" :name="'fanergy:' + item" />
            </div>
        </div>
        <FanergyButton class="mb-2">Подарить подписку</FanergyButton>
        <FanergyButton variant="secondary">Поддержать автора</FanergyButton>
    </div>

</template>
<script setup lang="ts">
definePageMeta({
    layout: 'clear'
})

const systemIcons = [
    'banknote',
    'chart-spline',
    'circle-user-round',
    'ellipsis-vertical',
    'ellipsis',
    'eye',
    'flag',
    'gift',
    'heart',
    'house',
    'laptop-minimal',
    'link-2',
    'log-out',
    'megaphone',
    'message-circle',
    'message-square',
    'moon',
    'move-left',
    'move-right',
    'octagon-x',
    'search',
    'send',
    'settings',
    'share-2',
    'sparkles',
    'square-plus',
    'star',
    'sun-medium',
    'user',
    'users',
]
const bagesIcons = [
    'clapperboard',
    'film',
    'image',
    'images',
    'mic-vocal',
    'music',
]
const socialsIcons = [
    'tiktok',
    'youtube',
    'telegram',
    'facebook',
    'instagram',
    'linkedin',
    'twitch',
    'vk',
]

const selected = ref(true)
</script>