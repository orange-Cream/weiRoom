<template>
  <div class="container">
    <van-tabs v-model="activeChannelIndex">
      <!-- <van-tab title="标签名称">当前标签对应的内容</van-tab> -->
      <van-tab :title="item.name" v-for="item in channelList" :key="item.id">
          <!-- 把频道id传递给 子组件 -->
        <com-article :channelID="item.id"></com-article>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 导入api函数
import { apiChannelList } from '@/api/channel.js'
// 对com-article.vue 做导入、注册、使用
import ComArticle from './components/com-article.vue'
export default {
  name: 'home-index',
  components: {
    ComArticle
  },
  data () {
    return {
      // 用户频道列表
      channelList: [],
      // 激活频道下标标志
      activeChannelIndex: 0
    }
  },
  created () {
    // 频道
    this.getChannelList()
  },
  methods: {
    // 频道
    async getChannelList () {
      const result = await apiChannelList()
      console.log(result)
      // data接收频道列表
      this.channelList = result.channels
    }
  }
}
</script>

<style scoped lang="less">
.van-tabs {
  // 弹性布局
  display: flex;
  // 灵活的项目将垂直显示，正如一个列一样
  flex-direction: column;
  height: 100%;
  //   /deep/ .van-tabs__content {
  //     // flex:1;的值是1 1 0%，【父控件有剩余空间占1份放大，父控件空间不足按1缩小，自身的空间大小是0%】
  //     flex: 1;
  //     overflow: hidden;
  //   }
  //   /deep/ .van-tab__pane {
  //     height: 100%;
  //     // 给上拉列表设置样式
  //     .scroll-wrapper {
  //       height: 100%;
  //       overflow-y: auto;
  //     }
  //   }
  // 给频道下边沿横向设置样式
  /deep/ .van-tabs__line {
    background-color: #07c160;
  }
}
</style>
