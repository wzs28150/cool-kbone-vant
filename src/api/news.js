import instance from './config'
// 获取系统信息
export const getNewsCategory = instance.get('/api/news/category')
export const getNewsList = ({
  catid,
  page
}) => instance.get(`/api/news/index?catid=${catid}&page=${page}`)
export const getNewsHot = () => instance.get('/api/news/hot')

export const getNewsInfo = ({
  catid,
  id
}) => instance.get(`/api/news/info?catid=${catid}&id=${id}`)
