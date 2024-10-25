<script setup lang="ts">
import { header } from '@/storage/obj/header';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const appStore = toRefs(useAppStore());
const header_buttons = ref(header.buttons || []);

const { activeRoute } = appStore;
</script>

<template>
    <div class="header">
        <div class="header__burger" v-if="width < 450">
            <IconsBurger />
        </div>
        <p class="header__activeRoute">{{ activeRoute ?? 'BankDash' }}</p>
        <div class="header__content">
            <PageHeaderSearch class="header__search"/>
            <div class="header__buttons">
                <PageHeaderButton
                    v-for="(item, idx) in header_buttons"
                    :key="idx"
                    v-bind="item"
                />
            </div>
            <img
                class="header__avatar"
                src="https://placehold.co/60x60"
                alt="avatar"
            />
        </div>
    </div>
</template>

<style lang="scss">
.header {
    height: 100px;
    background-color: var(--block-background-color);
    width: calc(100svw - 249px);
    display: flex;
    align-items: center;
    padding: 0px 40px;
    justify-content: space-between;

    @media screen and (max-width: 450px) {
        width: 100svw;
        padding: 0 25px;
        align-items: center;
    }
    &__avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    &__search {
        @media screen and (max-width: 450px) {
            display: none;
        }
    }
    &__buttons {
        display: flex;
        align-items: center;
        gap: 30px;
        @media screen and (max-width: 450px) {
            display: none;
        }
    }

    &__content {
        display: flex;
        align-items: center;
        gap: 30px;

@media screen and (max-width: 450px) {
    gap: 0;
}
    }

    &__activeRoute {
        font-size: 28px;
        font-weight: 600;
        @media screen and (max-width: 450px) {
            font-size: 20px !important;
        }
    }
}
</style>
