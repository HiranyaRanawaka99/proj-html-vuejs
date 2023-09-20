
import { reactive } from 'vue';

export const store = reactive({
    data() {
        return {
            logoInfo: [
                {
                    logoImage: '../../assets/img/logo-sidearea-1.png',
                    logoText: 'Let\'s get started',
                }

            ]
        }
    }


})

export default store;