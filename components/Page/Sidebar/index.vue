<script setup lang="ts">
import { sidebar } from '@/storage/obj/sidebar';

const view_buttons = ref(sidebar.buttons ?? []);
const active_button_idx = ref(0);
const { activeRoute } = toRefs(useAppStore());

const handle_click_button = (idx: number) => {
    active_button_idx.value = idx;
};

if (activeRoute?.value) {
    console.log(activeRoute.value);
    active_button_idx.value = sidebar.buttons.findIndex(
        (button) => button.text === activeRoute.value
    );
}
</script>

<template>
    <div class="sidebar">
        <div class="sidebar__wrapper">
            <IconsLogo />
        </div>
        <div class="sidebar__content">
            <PageSidebarButton
                @click="handle_click_button(idx)"
                v-for="(button, idx) in view_buttons"
                :key="idx"
                :url="button.url"
                :icon="button.icon"
                :active="active_button_idx === idx"
                >{{ button.text }}</PageSidebarButton
            >
        </div>
    </div>
</template>

<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    max-width: 249px;
    width: 100%;
    background-color: var(--block-background-color);
    height: 100svh;
    max-height: 100svh;
    overflow-y: auto;
    gap: 31px;
    border-right: 1px solid var(--blocks-border);

    &__wrapper {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 39px;
    }
}
</style>
