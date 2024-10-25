<script setup lang="ts">
const appStore = useAppStore();
const router = useRouter();

onMounted(async () => {
    await appStore.init();
});

watch(
    () => router.currentRoute.value.path,
    () => {
        appStore.changeRoute(router.currentRoute.value.path);
    },
    {
        deep: true,
        immediate: true,
    }
);
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
