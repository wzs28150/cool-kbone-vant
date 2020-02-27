import Axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'

if (process.env.isMiniprogram) {
  Axios.defaults.adapter = mpAdapter
}
Axios.defaults.headers['Content-Type'] = 'application/json'
// Axios.defaults.withCredentials = true
Axios.defaults.headers.type = 'pc'
const instance = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ?
    'http://114.115.177.23:9090/mock/93/' :
    'http://114.115.177.23:9090/mock/93/'
})
export default instance
