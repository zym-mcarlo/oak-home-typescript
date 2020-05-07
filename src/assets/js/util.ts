import moment from 'moment'

export function jumpTo (url: string) {
  if (url.match(/^https?/)) {
    window.open(url)
  } else {
    const formatUrl = url.substr(0, 1) === '/' ? url.substr(1) : url
    window.open(`${window.location.origin}/${formatUrl}`)
  }
}

export function getSession(key: string) {
  if (!key) return
  let storage = window.localStorage.getItem(key)
  if (!storage) return
  storage = decodeURIComponent(storage)
  const resultAndExpires = storage.split('&expires=')
  let result: string
  try {
    result = JSON.parse(resultAndExpires[0])
    const expires = moment(resultAndExpires[1])
    const nowTime = moment()
    if (expires.isBefore(nowTime)) {
      result = ''
      deleteSession(key)
    }
  } catch (error) {
    throw error
  }
  return result
}

export function setSession(key: string, value: any, expires: number | string) {
  if (!key) return
  const formatValue = encodeURIComponent(`${JSON.stringify(value)}&expires=${expires}`)
  window.localStorage.setItem(key, formatValue)
}

export function deleteSession(key: string) {
  window.localStorage.removeItem(key)
}

export function clearSession() {
  window.localStorage.clear()
}