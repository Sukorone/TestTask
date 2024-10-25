<script setup lang="ts">
interface Props {
    icon: string;
    color: string;
    // URL
}
const props = defineProps<Props>();
const resolve_icon = resolveComponent(props.icon);
</script>

<template>
    <div class="headerButton">
        <component :is="resolve_icon" />
    </div>
</template>

<style lang="scss">
.headerButton {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;

    --iconColor: v-bind(color);
}
</style>
