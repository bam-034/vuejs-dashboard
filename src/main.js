import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './css/style.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUsers } from '@fortawesome/free-solid-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUsers, faInstagram)

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('#app')
