import { writable } from "svelte/store";
import { Auth0Client } from '@auth0/auth0-spa-js';

const dev = process.env.NODE_ENV === 'development';

const redirectUri = dev ? 'http://localhost:3000/callback' : 'https://test-auth0-sapper.onrender.com/callback';

const auth0 = new Auth0Client({
  domain: 'dev-knighted.auth0.com',
  client_id: 'BbmBAtUczZ51WiuJCsF7E61mdIe03tDZ',
  redirect_uri: redirectUri,
  cacheLocation: 'localstorage'
});



function createAuthStore() {
  const { subscribe, update } = writable({
    isAuthenticated: false,
    user: null,
    loading: null,
    popupOpen: null,
    loginWithPopup: null,
    getIdTokenClaims: null,
    getTokenSilently: null,
    getTokenWithPopup: null,
    appState: null
  });
  return {
    subscribe,
    handleRedirectCallback: async (search) => {
      let newAppState;
      const query = search;
      if (query.includes("code=") && query.includes("state=")) {
        const { appState } = await auth0.handleRedirectCallback();
        newAppState = appState;
        window.history.replaceState({}, document.title, "/");
      }
      const isAuthenticated = await auth0.isAuthenticated();
      const user = await auth0.getUser();
      const getIdTokenClaims = await auth0.getIdTokenClaims();
      const getTokenSilently = await auth0.getTokenSilently();
      console.log('USER: ', user)
      console.log('TOKEN_CLAIMS: ', getIdTokenClaims)
      update(state => (state = { ...state, getIdTokenClaims, getTokenSilently, isAuthenticated, user, appState: newAppState }));
    },

    loginWithRedirect: async (...p) => {
      update(state => (state = { ...state, loading: true }));
      try {
        // const auth0 = await createAuth0Client({
        //   domain: 'dev-knighted.auth0.com',
        //   client_id: 'BbmBAtUczZ51WiuJCsF7E61mdIe03tDZ',
        //   redirect_uri: redirectUri
        // });
        update(state => (state = { ...state, loading: false }));
        return auth0.loginWithRedirect(...p)
      } catch (e) {
        console.log(e.message);
        alert('Something happened. Please try again.')
      }
    },

    logout: async (origin) => {
      update(state => (state = { ...state, loading: true }));
      try {
        // const auth0 = await createAuth0Client({
        //   domain: 'dev-knighted.auth0.com',
        //   client_id: 'BbmBAtUczZ51WiuJCsF7E61mdIe03tDZ',
        //   redirect_uri: redirectUri
        // });
        update(state => (state = { ...state, isAuthenticated: false, loading: false }));
        await auth0.logout({
          returnTo: origin
        })
      } catch (e) {
        console.log(e.message);
        alert('Something happened. Please try again.')
      }
    }
  }
}

export const authStore = createAuthStore();