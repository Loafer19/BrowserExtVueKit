import { createToaster } from '@meforma/vue-toaster'
import fetcher from '@/services/fetcher'
import { reactive } from 'vue'

const state = reactive({
  fetcher: fetcher,
  toaster: createToaster({ position: 'bottom', duration: 1500 }),

  token: null,
  user: null,

  handleAuth(data) {
    this.token = data.token
    this.user = data.user

    fetcher.setToken(data.token)

    chrome.storage.local.set({ token: data.token, user: data.user })
  },

  googleAuth() {
    let state = this

    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError) {
        return state.toaster.error(chrome.runtime.lastError.message)
      }

      state.fetcher
        .setToken(token)
        .get('https://www.googleapis.com/oauth2/v2/userinfo')
        .then(response => response.getData())
        .then((user) => {
          state.fetcher
            .post('/google-login', {
              email: user.email,
              password: user.id
            })
            .then(response => {
              state.handleAuth(response.getData())
            })
        })
    })
  },

  logout() {
    this.token = null
    this.user = null

    chrome.storage.local.remove(['token', 'user'])
  }
})

chrome.storage.local.get(['token', 'user'], state.handleAuth)

export default state
