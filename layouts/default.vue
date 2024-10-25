<script setup lang="ts"></script>

<template>
    <div class="defaultLayout">
        <PageSidebar />
        <div class="defaultLayout__main">
            <PageHeader />
            <div class="defaultLayout__content">
                <slot />
            </div>
            <PageFooter />
        </div>
    </div>
</template>

<style lang="scss">
.defaultLayout {
    display: flex;
    overflow-x: hidden;
    &__main {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media screen and (max-width: 450px) {
            gap: 0;
        }
    }

    &__content {
        padding-left: 40px;
        padding-right: 40px;
        @media screen and (max-width: 450px) {
            padding: 25px;
        }
        
    }
}
</style>
