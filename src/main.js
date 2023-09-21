import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';


// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft, faAngleRight, faLightbulb, faCloud, faPenClip, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faPinterestP, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
//add icons to the library
library.add(faAngleLeft, faAngleRight, faLightbulb, faCloud, faComment, faPenClip, faSpinner, faTwitter, faPinterestP, faFacebookF, faLinkedinIn)

// FONT SOURCE
import '@fontsource/poppins';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
