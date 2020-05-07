import { NO_CAPTCHA_SCENE, NO_CAPTCHA_APPKEY } from './config'

interface Option {
  renderTo: string;
  appkey: string;
  scene: string;
  token: string;
  customWidth: string;
  trans: any;
  elementID: Array<number>;
  is_Opt: number;
  language: string;
  isEnabled: boolean;
  timeout: number;
  times: number;
  apimap: any;
  callback: (data: any) => void;
}

const optionDefault = {
  appkey: NO_CAPTCHA_APPKEY, 
  scene: NO_CAPTCHA_SCENE,
  token: [NO_CAPTCHA_APPKEY, (new Date()).getTime(), Math.random()].join(':'),
  customWidth: '100%',
  trans: { }, // 业务键字段
  elementID: [], // Dom的ID属性自动填写trans业务键
  is_Opt: 0,
  language: 'zh-CN',
  isEnabled: true,
  timeout: 3000,
  times: 5,
  apimap: { }, // 请求的接口地址
  callback: (data: any) => {console.log(data)}
} 

interface NoCaptchaLanguage {
  _startTEXT: string;
  _yesTEXT: string;
  _error300: string;
  _errorNetwork: string;
}

const defaultLanguage: Map<string, NoCaptchaLanguage> = new Map([
  [
    'zh-CN',
    {
      _startTEXT: '请按住滑块，拖动到最右边',
      _yesTEXT: '验证通过',
      _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
      _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
    }
  ],
  [
    'en-US',
    {
      _startTEXT: 'Slide to complete verification.',
      _yesTEXT: 'Done',
      _error300: 'Oops, wrong, Click <a href="javascript:__nc.reset()">refresh</a> to again',
      _errorNetwork: 'Network failure, Please <a href="javascript:__nc.reset()">Click Refresh</a>'
    }
  ] 
])

interface InjectedWindow {
  noCaptcha?: any;
}

export default class NoCaptcha {
  noCaptcha!: any
  token!: string
  option!: Option

  constructor(elementID: string, callback: Option['callback']) {
    this.setOption(elementID, callback)
    this.noCaptcha = new (window as InjectedWindow).noCaptcha(this.option)
    this.setLanguage('en-US')
    return this.noCaptcha
  }

  updateToken() {
    this.token = [NO_CAPTCHA_APPKEY, (new Date()).getTime(), Math.random()].join(':')
    this.option.token = this.token
    this.noCaptcha.reload()
  }

  set renderElementId(elementID: string) {
    this.option.renderTo = elementID
  }

  setOption(elementID: string, callback: Option['callback']) {
    const elementSign = elementID.slice(0, 1) === '#' ? elementID : `#${elementID}`
    this.option = Object.assign(optionDefault, {
      renderTo: elementSign,
      callback
    })
  }

  setLanguage(locale: string) {
    if (!defaultLanguage.get(locale)) {
      return
    }
    this.noCaptcha.upLang(locale, defaultLanguage.get(locale))
  }
}