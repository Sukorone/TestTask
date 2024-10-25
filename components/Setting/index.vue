<script setup lang="ts">
const activeTab = ref('editprofile');
const tabs = ref([
    { id: 'editprofile', text: 'Edit Profile' },
    { id: 'preferences', text: 'Preferences' },
    { id: 'security', text: 'Security' },
]);

const current_step = computed(() => {
    switch (activeTab.value) {
        case 'editprofile':
            return 'SettingStepsEdit';
        default:
            return 'SettingStepsEdit';
    }
});
</script>

<template>
    <div class="setting">
        <SettingTabs
            @change="(tab) => (activeTab = tab.id)"
            :tabs="tabs"
            :active-tab="activeTab"
        />
        <component :is="current_step"></component>
    </div>
</template>

<style lang="scss">
.setting {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 37px 30px;
    background: var(--block-background-color);
    border-radius: 25px;
    gap: 55px;

    @media screen and (max-width: 450px) {
            gap: 25px;
            padding: 22px 20px;
        }

}
</style>
