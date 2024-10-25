<script setup lang="ts">
interface Props {
    tabs: { id: string; text: string }[];
    activeTab: string;
}

defineProps<Props>();

const emit = defineEmits(['change']);

const handle_click_tab = (tab: { id: string }) => {
    emit('change', tab);
};
</script>

<template>
    <div class="settingTabs">
        <div
            class="settingTabs__tab"
            :class="{ 'settingTabs__tab--active': tab.id === activeTab }"
            v-for="(tab, idx) in tabs"
            :key="tab.id"
            @click="handle_click_tab(tab)"
        >
            <p class="settingTabs__tab-text">{{ tab.text }}</p>
            <span class="settingTabs__tab-line" v-if="tab.id === activeTab" />
        </div>
    </div>
</template>

<style lang="scss">
.settingTabs {
    display: flex;
    gap: 57px;
    align-items: center;
    height: 30px;
    
    @media screen and (max-width: 450px) {
        gap: 0;
        border-bottom: 1px solid var(--thirth-color);
        justify-content: space-between;
        }
    &__tab {
        position: relative;
        height: 100%;
        padding: 0 15px;
        cursor: pointer;

        &--active {
            .settingTabs__tab-text {
                color: var(--secondary-color);
            }
        }

        &-line {
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            border-radius: 10px 10px 0 0;
            background: var(--secondary-color);
        }

        &-text {
            height: 100%;
            font-size: 16px;
            font-weight: 500;
            color: var(--primary-color-disabled);
            transition: color 0.3s ease;
            user-select: none;
        }
    }
}
</style>
