// 封装获取频道的模块函数
// 导入axios模块
import request from '@/utils/request.js'

// 获取用户频道列表数据
export function apiChannelList () {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'get'
  })
}
