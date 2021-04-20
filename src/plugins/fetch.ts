import axios, { Method, AxiosResponse } from 'axios'

interface Params {
  [key: string]: string | number | boolean;
}

const server = axios.create()
server.interceptors.response.use((res) => {
  if (res.data.code === 301) { // 登录过期，跳转到登录界面
    console.log('登录过期')
  }
  return res
}, (error) => {
  if (error.response.status === 301) {
    console.log('登录过期')
  }
})

/**
 * 封装的 fetch 函数
 * @param {string} url
 * @param {object} params
 * @param {Method} method
 */
async function fetch (url: string, params: Params, method: Method | undefined = 'post'): Promise<AxiosResponse> {
  const data = await server({
    url,
    params,
    method
  })
  return data
}

export default fetch
