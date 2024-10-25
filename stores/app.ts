import { sidebar } from '~/storage/obj/sidebar';
import { useRuntimeConfig } from 'nuxt/app';
import { defineStore } from 'pinia';

export interface IAppStore {
    activeRoute?: string;
}

export const useAppStore = defineStore('app', {
    state: (): IAppStore => {
        return {
            activeRoute: undefined,
        };
    },
    actions: {
        async init() {
            try {
                const router = useRouter();
                const activeRoute = router.currentRoute.value.path;
                this.activeRoute = sidebar.buttons.find(
                    (button) => button.url === activeRoute
                )?.text;
            } catch (e: any) {
                throw new Error(e.message, e);
            } finally {
            }
        },
        changeRoute(path: string) {
            this.activeRoute = sidebar.buttons.find(
                (button) => button.url === path
            )?.text;
        },
    },
});
