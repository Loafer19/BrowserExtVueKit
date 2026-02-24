import axios from 'axios'

class fetcher {
    axios

    response

    _errorHandler = null

    constructor() {
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    async get(endpoint, data) {
        this.response = await this.axios
            .get(endpoint, { params: data })
            .catch((e) => this.errorMessage(e))

        return this
    }

    async post(endpoint, data) {
        this.response = await this.axios
            .post(endpoint, data)
            .catch((e) => this.errorMessage(e))

        return this
    }

    async patch(endpoint, data) {
        this.response = await this.axios
            .patch(endpoint, data)
            .catch((e) => this.errorMessage(e))

        return this
    }

    async delete(endpoint, data) {
        this.response = await this.axios
            .delete(endpoint, data)
            .catch((e) => this.errorMessage(e))

        return this
    }

    setToken(token) {
        this.axios.defaults.headers.common.Authorization = `Bearer ${token}`

        return this
    }

    setErrorHandler(handler) {
        this._errorHandler = handler

        return this
    }

    getData() {
        return this.response.data
    }

    errorMessage(error) {
        this._errorHandler?.(error.response?.data?.message ?? error.message)
    }

    isOk() {
        return this.response.status === 200
    }
}

export default new fetcher()
