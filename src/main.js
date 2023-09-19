import { createApp } from 'vue'
import App from './App.vue'
import Bootstrap from '../node_modules/bootstrap/scss/bootstrap.scss'


// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
//add icons to the library
library.add(faUserSecret)

//   <font-awesome-icon icon="fa-solid fa-user-secret" />

// FONT SOURCE
import '@fontsource/poppins';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
