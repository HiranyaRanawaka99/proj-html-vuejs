import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';


// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
//add icons to the library
library.add(faAngleLeft, faAngleRight)

//   <font-awesome-icon icon="fa-solid fa-user-secret" />

// FONT SOURCE
import '@fontsource/poppins';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
