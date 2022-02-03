import Keycloak from 'keycloak-js';
import { createApp } from 'vue'
import App from './App.vue'

let options = {
    url: 'https://kdl.erajaya.com/auth',
    realm: 'erajaya',
    clientId: 'vuejs-poc',
    onLoad: 'login-required',
}

let keycloak = Keycloak(options);

keycloak.init({ onLoad: options.onLoad as any}).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        console.log("Authenticated");
        createApp(App, { keycloak: keycloak }).mount('#app')
    }


    //Token Refresh
    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.log('Token refreshed' + refreshed);
            } else {
                console.log('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed?.exp as any + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.log('Failed to refresh token');
        });
    }, 6000)

}).catch(() => {
    console.log("Authenticated Failed");
});


