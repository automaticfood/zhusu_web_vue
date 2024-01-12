import XRequest from '../request/index'

export function getCityAll() {
  return XRequest.get({
    url: "/city/all"
  })
}