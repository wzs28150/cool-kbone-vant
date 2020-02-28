import instance from './config'
// 获取系统信息
export const getNavbar = instance.get('/index/navbar')
export const getNewsCategory = instance.get('/api/news/category')
