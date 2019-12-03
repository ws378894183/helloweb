import axios from '@/libs/api.request'

export const getPort = () => {
  return axios.request({  // 这里返回的是一个Promise，request方法传入一个配置对象，配置项可参考axios
    url: 'eurekaClient/client/port',
    method: 'get'
  })
}