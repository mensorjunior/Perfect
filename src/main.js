import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://perfect-31d41-default-rtdb.firebaseio.com/'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).use(store).mount('#app')


// O erro que você estava recebendo indicava que o objeto Vue estava sendo passado como undefined dentro do seu arquivo "axios.js", o que gerava um erro ao tentar executar Vue.use(). Esse problema ocorreu porque você estava importando o Vue no arquivo "axios.js", mas não estava exportando o objeto Vue.

// O código que eu sugeri corrige esse problema exportando o objeto Vue do arquivo "axios.js" para que ele possa ser usado no arquivo "main.js" ao chamar import './plugins/axios'.

// Além disso, como o Axios foi instalado como uma dependência do seu projeto, não é necessário importar o Axios no arquivo "axios.js". Em vez disso, basta acessá-lo através de axios.

// Por fim, ao substituir $http por $axios em todo o seu código, você deve ter resolvido completamente o problema e agora seu projeto deve ser capaz de fazer chamadas à API utilizando o Axios.