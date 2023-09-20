
import { markRaw, reactive } from 'vue';

export const store = reactive({
    logoInfo: [
        {
            logoImage: '/src/assets/img/logo-sidearea-1.png',
            logoText: 'Let\'s get started',
            alt: 'marée-logo',
        },

    ]

})

export default store;