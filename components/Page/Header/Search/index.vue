<script setup lang="ts"></script>

<template>
    <div class="headerSearch">
        <IconsSearch class="headerSearch__icon" />
        <input
            type="text"
            placeholder="Search for something"
            name="search"
            id="search"
            class="headerSearch__input"
        />
    </div>
</template>

<style lang="scss">
.headerSearch {
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    background: var(--background-color);
    border-radius: 40px;
    padding: 0px 43px 0px 60px;

    --iconColor: #718ebf;

    &__input {
        width: 100%;
        height: 100%;
        border: none;
        background: var(--background-color);

        &::placeholder {
            color: var(--input-placeholder-color);
            font-size: 15px;
            font-weight: 400;
        }

        &:active,
        &:focus {
            outline: none;
        }
    }

    &__icon {
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
        pointer-events: none;
    }
}
</style>
