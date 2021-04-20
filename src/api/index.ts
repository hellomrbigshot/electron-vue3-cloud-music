import fetch from '../plugins/fetch'

/**
 * 获取热门话题
 * @param limit 取出评论数量
 * @param offset 偏移数量
 */
const getHotTop = (limit: string | number = 20, offset: string | number = 0) => fetch('/api/hot/topic', { limit, offset }, 'get')

export default {
  getHotTop
}
