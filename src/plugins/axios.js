import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://perfect-31d41-default-rtdb.firebaseio.com/'

Vue.useAttrs({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})