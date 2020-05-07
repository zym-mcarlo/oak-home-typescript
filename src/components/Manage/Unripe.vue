<template>
  <div class="unripe">
    <div class="welcome">
      <h3>欢迎使用矿宝OS矿机智能管理后台！三步完成配置，立即开挖！</h3>
      <div class="button-container">
        <button class="primary-button" @click="jumpTo('https://www.minerbabe.com/pc.html/#/helps/startDig')">打开详细教程</button>
      </div>
    </div>

    <ol class="operation">
      <li class="item">
        <b class="caption">1.添加一个钱包</b>
        <span class="step">【钱包管理】 ——— 【添加钱包】</span>
        <button class="primary-button disabled">去完成</button>
      </li>
      <li class="item">
        <b class="caption">2.创建一个分组配置</b>
        <span class="step">【分组配置】 ——— 【添加分组】</span>
        <button class="primary-button disabled">去完成</button>
      </li>
      <li class="item">
        <b class="caption">3.关联分组</b>
        <span class="step">【矿机管理】 ——— 【(勾选矿机)关联矿机分组】</span>
        <button class="primary-button">去完成</button>
      </li>
    </ol>

    <div class="prompt">
      <h3>判断你的矿机是否开始正常挖矿？</h3>
      <p>在【矿机管理】界面观察你的矿机是否有了算力信息，如果已经开始提交算力了，那就是已经开始挖矿了呢！</p>
    </div>

    <div class="question">
      <h3>问题反馈</h3>
      <p>点击右上角【反馈】联系24小时技术支持进行反馈。</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { jumpTo } from '@/assets/js/util'

@Component
export default class Dashboard extends Vue {
  jumpTo = jumpTo
}
</script>

<style lang="stylus" scoped>
piece() 
  padding 30px 0
  border-bottom 1px solid var(--boundary-color)
  h3, .caption
    color var(--text-color)
    font-weight bold
    font-size 16px
.unripe
  padding-left 20px
  .welcome
    piece()
    .button-container
      margin-top 20px
      button
        width 120px
        height 34px
  .operation
    piece()
    .item
      display flex
      align-items center
      .caption
        width 200px
      .step
        width 400px
      button
        width 78px
        height 34px
      &:not(:first-of-type)
        margin-top 20px
  .prompt
    piece()
    p
      margin-top 20px
      font-size 16px
  .question
    piece()
    p
      margin-top 20px
      font-size 16px
</style>