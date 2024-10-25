<script setup lang="ts">
interface Props {
    icon?: string;
    active?: boolean;
    url: string;
}

const props = defineProps<Props>();

const resolved_icon = computed(() => resolveComponent(props.icon ?? ''));
</script>

<template>
    <nuxt-link class="sidebarButton__link" :to="props.url">
        <button
            class="sidebarButton"
            :class="{ 'sidebarButton--active': props.active }"
        >
            <span v-if="props.active" class="sidebarButton__activeStatus" />
            <component :is="resolved_icon" />
            <p class="sidebarButton__text"><slot /></p>
        </button>
    </nuxt-link>
</template>

<style lang="scss">
.sidebarButton {
    display: flex;
    align-items: center;
    gap: 26px;
    height: 25px;

    background: unset;
    outline: none;
    border: none;
    position: relative;
    padding-left: 35px;

    &__link {
        text-decoration: none;
    }

    &__activeStatus {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 60px;
        background-color: var(--secondary-color);
        border-radius: 0 10px 10px 0;
    }

    &__text {
        color: var(--thirth-color);
        font-size: 18px;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    &--active {
        --iconColor: var(--secondary-color);

        .sidebarButton__text {
            color: var(--secondary-color);
        }
    }

    --iconColor: var(--thirth-color);
}
</style>
