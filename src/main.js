import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import BaseBoard from './components/ui/BaseBoard.vue'
import BaseButton from './components/ui/BaseButton.vue';
import BaseBoardBg from './components/ui/BaseBoardBg.vue';
import BaseFlexWrapper from './components/ui/BaseFlexWrapper.vue';

const app = createApp(App);

app.use(router);

// app.component('base-card', BaseBoard)
app.component('base-button', BaseButton);
app.component('base-board-bg', BaseBoardBg);
app.component('base-flex-wrapper', BaseFlexWrapper);

app.mount('#app');
