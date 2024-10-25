<script setup lang="ts">
const state = ref({
    name: '',
});
</script>

<template>
    <div class="settingEdit">
        <div class="settingEdit__content">
            <div class="settingEdit__avatarWrapper">
                <img
                    class="settingEdit__avatar"
                    src="https://placehold.co/130x130"
                    alt="avatar"
                />
                <IconsEdit class="settingEdit__editIcon" />
            </div>
            <div class="settingEdit__fields">
                <UiInput
                    name="name"
                    id="name"
                    placeholder="Charlene Reed"
                    title="Your Name"
                    v-model="state.name"
                    class="settingEdit__input"
                />
                <UiInput
                    name="username"
                    id="username"
                    title="User Name"
                    v-model="state.name"
                    placeholder="Charlene Reed"
                    class="settingEdit__input"
                />
                <UiInput
                    name="email"
                    id="email"
                    title="Email"
                    placeholder="charlenereed@gmail.com"
                    v-model="state.name"
                    class="settingEdit__input"
                />
                <UiInput
                    name="password"
                    id="password"
                    title="Password"
                    placeholder="**********"
                    v-model="state.name"
                    type="bankdashpassword"
                    class="settingEdit__input"
                />
                <UiInput
                    name="dateofbirth"
                    id="dateofbirth"
                    placeholder="25 January 1990"
                    title="Date of Birth"
                    v-model="state.name"
                    class="settingEdit__input"
                />
                <UiInput
                    name="presentaddress"
                    id="presentaddress"
                    title="Present Address"
                    placeholder="San Jose, California, USA"
                    v-model="state.name"
                    class="settingEdit__input"
                />
                <UiInput
                    name="permanentaddress"
                    id="permanentaddress"
                    title="Permanent Address"
                    placeholder="San Jose, California, USA"
                    v-model="state.name"
                    class="settingEdit__input"
                />

                <UiInput
                    name="city"
                    id="city"
                    placeholder="San Jose"
                    title="City"
                    v-model="state.name"
                    class="settingEdit__input"
                />
                <UiInput
                    name="postalcode"
                    id="postalcode"
                    title="Postal Code"
                    placeholder="45962"
                    v-model="state.name"
                    class="settingEdit__input"
                />
                <UiInput
                    name="country"
                    id="country"
                    placeholder="USA"
                    title="Country"
                    v-model="state.name"
                    class="settingEdit__input"
                />
            </div>
        </div>
        <UiButton class="settingEdit__saveBtn">Save</UiButton>
    </div>
</template>

<style lang="scss">
.settingEdit {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;

    &__saveBtn {
        width: 190px;
        margin-left: auto;
        
    @media screen and (max-width: 450px) {
        margin: 0;
        width: 100%;
        }
    }
    &__content {
        display: flex;
        gap: 53px;

        @media screen and (max-width: 450px) {
            flex-direction: column;
            align-items: center;
        }
    }
    &__fields {
        display: flex;
        flex-wrap: wrap;
        gap: 29px;

        @media screen and (max-width: 450px) {
            flex-direction: column;
            width: 100%;
        }
    }

    &__input {
        width: calc((100% - 29px) / 2);

        @media screen and (max-width: 450px) {
            width: 100%;
        }
    }

    &__editIcon {
        position: absolute;
        right: 0;
        bottom: 16px;
        @media screen and (max-width: 450px) {
            bottom: 20px;
        }
    }

    &__avatar {
        width: 130px;
        height: 130px;
        border-radius: 50%;

        @media screen and (max-width: 450px) {
            width: 174.64px;
            height: 170px;
        }
    }

    &__avatarWrapper {
        display: flex;
        position: relative;
        align-items: center;
        width: 132px;
        height: 130px;

        @media screen and (max-width: 450px) {
            width: 170px;
            height: 170px;
        }
    }
}
</style>
