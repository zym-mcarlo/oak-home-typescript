import axios, { AxiosInstance } from 'axios'
import { LoginParams } from './paramsType'

const LOGIN_URL = '/login'

export default class Client {
  http: AxiosInstance
  constructor (serverUrl: string, timeout = 500) {
    this.http = axios.create({
      baseURL: serverUrl,
      timeout: timeout
    })
  }

  async get (requestUrl: string, params: object) {
    const result = await this.http.get(requestUrl, params)
    return result
  }

  async post (requestUrl: string, params: object) {
    const result = await this.http.post(requestUrl, params)
    return result
  }

  async login ({username, password, captcha_token, captcha_session, captcha_sig}: LoginParams) {
    const data = await this.post(LOGIN_URL, {
      username,
      password,
      captcha_token,
      captcha_session,
      captcha_sig
    })
    return data
  }

  signOut () {

  }
}