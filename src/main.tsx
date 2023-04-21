import ReactDOM from 'react-dom/client'
import {App} from './App'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Auth0Provider} from "@auth0/auth0-react";
import {getConfig} from "./config";



const onRedirectCallback = () => {
    console.log(window.location.pathname)
}

const config = getConfig()


const providerConfig = {
    domain:config.domain,
    clientId:config.clientId,
    authorizationParams:{redirect_uri:window.location.origin},
    onRedirectCallback
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <Auth0Provider domain="dev-qwtkmghf1qvj8cpu.us.auth0.com"
        clientId="29w5wjpgPfCwnYe96nlg3Z6w2jXPBVHq"
        authorizationParams={{
            redirect_uri:window.location.origin
        }}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Auth0Provider>
    </HashRouter>
)
