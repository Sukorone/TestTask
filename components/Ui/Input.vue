<script setup lang="ts">
interface Props {
    placeholder?: string;
    name: string;
    id: string;
    type?: string;
    centerText?: boolean;
    modelValue: string | number;
    maxlength?: string;
    minlength?: string;
    title?: string;
    min?: string;
    max?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const INPUT_TYPE = ref<string>(props.type || 'text');
const INPUT_PLACEHOLDER = ref<string>(props.placeholder || '');
const COMPUTED_STATE = computed<string | number>({
    get(): string | number {
        return props.modelValue;
    },
    set(value: string | number) {
        emit('update:modelValue', value);
    },
});
</script>

<template>
    <div class="uiInput">
        <p class="uiInput__title" v-if="title">{{ title }}</p>
        <input
            :type="INPUT_TYPE"
            :placeholder="INPUT_PLACEHOLDER"
            :name="name"
            :id="id"
            :maxlength="maxlength"
            :minlength="minlength"
            :min="min"
            :max="max"
            class="uiInput__input"
            v-model="COMPUTED_STATE"
        />
    </div>
</template>

<style lang="scss">
.uiInput {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 11px;

    &__title {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
    }

    &__input {
        width: 100%;
        height: 50px;
        padding: 0 20px;
        border-radius: 15px;
        outline: unset;
        border: 1px solid #dfeaf2;
        font-size: 16px;
        font-weight: 500;
        color: #718ebf;
        transition: border 0.3s ease;
        text-align: v-bind('centerText ? "center" : "left"');

        &:focus,
        &:active {
            border: 1px solid var(--color-primary);
        }

        &::placeholder {
            color: #718ebf;
            user-select: none;

            font-size: 15px;
            font-weight: 400;
        }
    }
}
</style>
