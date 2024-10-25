<script setup lang="ts">
interface Props {
    centerText?: boolean;
    type?: 'icon';
    rounded?: boolean;
    icon?: string;
    square?: boolean;
    dark?: boolean;
    spaceBetween?: boolean;
}

const props = defineProps<Props>();
const slots = useSlots();
const RESOLVED_ICON = props.icon
    ? resolveComponent(props.icon || '')
    : undefined;

const getAspectRatio = computed(() => {
    const { rounded, square } = props;
    if (rounded || square) return '1';
    return 'unset';
});

const getWidth = computed(() => {
    const { rounded, square } = props;
    if (rounded || square) return '56px';
    return 'auto';
});
const getPadding = computed(() => {
    const { rounded, square } = props;
    if (rounded || square) return '0';
    return '0 20px';
});
</script>

<template>
    <button class="uiButton" v-if="slots?.default || icon">
        <slot v-if="slots?.default" />
        <component
            class="uiButton__icon"
            v-if="icon"
            :is="RESOLVED_ICON"
        ></component>
    </button>
</template>

<style lang="scss">
.uiButton {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: v-bind('props.rounded ? "50%" : "12px"');
    border: unset;
    outline: unset;
    width: v-bind('getWidth');
    justify-content: v-bind('props.spaceBetween ? "space-between" : "center"');
    font-size: 14px;
    text-align: v-bind('props.centerText ? "center" : "left"');
    padding: v-bind('getPadding');
    background: var(--secondary-color);
    color: #fff;
    font-weight: 500;
    aspect-ratio: v-bind('getAspectRatio');
    transition: background 0.3s ease, color 0.3s ease;
    border: 0.5px solid;
    border-image-source: radial-gradient(
        100% 100% at 0% 0%,
        rgba(184, 110, 159, 0.12) 0%,
        rgba(102, 37, 37, 0.12) 100%
    );
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        user-select: none;
        pointer-events: none;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(204, 139, 139, 0.48) 0%,
            rgba(163, 59, 59, 0) 100%
        );
    }
}
</style>
