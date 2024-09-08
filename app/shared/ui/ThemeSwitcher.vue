<template>
    <fieldset class="switcher">
        <legend class="switcher__legend hidden">Схема</legend>
        <label>
            <input class="" type="radio" name="color-scheme" value="auto" aria-label="Системная" checked="">
        </label>
        <label>
            <input class="" type="radio" name="color-scheme" value="light" aria-label="Светлая">
        </label>
        <label>
            <input class="" type="radio" name="color-scheme" value="dark" aria-label="Тёмная">
        </label>
        
        <!-- <div class="switcher__status"></div> -->
        <pre>
           {{ $colorMode.preference }}
        </pre>
    </fieldset>
</template>

<script setup>
// v-model="$colorMode.preference" :options="['system', 'light', 'dark']"
</script>