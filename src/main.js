import Vue from 'vue'
import App from './App.vue'

/* bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faPlay, faChartColumn, faSignal, faWallet, faBullseye, faArrowLeftLong, faArrowRight, faPlus, faArrowUp } from '@fortawesome/free-solid-svg-icons'

/* import regular icon */
import { faMessage } from '@fortawesome/free-regular-svg-icons'

/* import brand icon */
import { faInstagram, faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faPlay, faChartColumn, faSignal, faWallet, faBullseye, faArrowLeftLong, faArrowRight, faPlus, faInstagram, faLinkedinIn, faFacebookF, faTwitter, faMessage, faArrowUp)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

faInstagram, faLinkedinIn, faFacebookF, faTwitter

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')