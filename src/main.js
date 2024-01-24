import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import MainMenu from '@/router/main-menu.js'

const app = createApp(App)


app.provide('menus', {
    MainMenu
})

app.use(router)
app.mount('#app')