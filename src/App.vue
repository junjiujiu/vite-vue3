<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    </nav>
    <router-view></router-view> -->
    <el-container>
      <!-- 头部区 -->
      <el-header>
        <HomeHeader></HomeHeader>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container class="home-container">
        <!-- 侧边栏 -->
        <el-aside class="aside">
          <!-- <HomeAsideLeft></HomeAsideLeft> -->
          <div>
            <div class="head">
              <div>
                <img src="https://s.weituibao.com/1582958061265/mlogo.png" alt="logo">
                <span>二手市场交易</span>
              </div>
            </div>
            <el-menu
            :default-active="$route.path"
            :default-openeds="['1','2','3','4']"
            router
            text-color="#fff"
            background-color="#222832"
            @select="handleSelect"
            >
              <el-sub-menu index="1">
                <template #title><i class="el-icon-message icon"></i>系统</template>
                <el-menu-item-group>
                  <el-menu-item index="/introduce"><i class="el-icon-data-line" />系统介绍</el-menu-item>
                  <el-menu-item index="/dashboard"><i class="el-icon-odometer" />使用说明</el-menu-item>
                  <el-menu-item index="/vuex"><i class="el-icon-plus" />vuex</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <i class="el-icon-s-flag icon" />首页配置
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/swiper"><i class="el-icon-picture" />Icon和按钮配置</el-menu-item>
                  <el-menu-item index="/choose"><i class="el-icon-star-on" />单选多选框</el-menu-item>
                  <el-menu-item index="/form"><i class="el-icon-sell" />Form 表单</el-menu-item>
                  <el-menu-item index="/recommend"><i class="el-icon-thumb" />为你推荐配置</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-sub-menu index="3">
                <template #title>
                  <i class="el-icon-menu icon" />模块管理
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/category"><i class="el-icon-menu" />分类管理</el-menu-item>
                  <el-menu-item index="/good" route="/good"><i class="el-icon-s-goods" />商品管理</el-menu-item>
                  <el-menu-item index="/guest"><i class="el-icon-user-solid" />会员管理</el-menu-item>
                  <el-menu-item index="/order"><i class="el-icon-s-order" />订单管理</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-sub-menu index="4">
                <template #title>
                  <i class="el-icon-lock icon" />系统管理
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/account"><i class="el-icon-lock" />修改密码</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </div>
        </el-aside>
        <!-- 右侧内容主体 -->
        <el-container class="content">
          <!-- 顶侧导航栏 -->
          <el-header>
            <HomeRightHeader></HomeRightHeader>
          </el-header>
          <!-- 主体内容 -->
          <el-main  class="main">
            <router-view></router-view>
          </el-main>
          <!-- 尾注部分 -->
          <el-footer>
            <FooterView></FooterView>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from './components/Home/HomeHeader.vue'
import HomeRightHeader from './components/Home/HomeRightHeader.vue'
import FooterView from './components/FooterView.vue'
export default {
  components: {
    HomeHeader,
    HomeRightHeader,
    FooterView
  },
  data () {
    return {
      activeIndex: '1',
      isCollapse: true
    }
  },
  props: {
    msg: String
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    // 使用this.$store.state.XXX可以直接访问到仓库中的状态
    console.log(this.$store.state.name)
  }
}
</script>

<style lang="less">
.home li{
    display: block;
    list-style-position: inside;
  }
.el-header {
    background-color: #373d41;
    display: flex;
    /* //设置显示为flex布局 */
    justify-content: space-between;
    /* //设置为flex左右布局 */
    padding-left: 0;
    /* //左内边距为0（Logo贴左边） */
    align-items: center;
    /* //元素上下居中（防止右边按钮贴上下边） */
    color: #fff;
    font-size: 40px;

    >div {
      /* //内嵌的div样式 */
      display: flex;
      align-items: center;
      /* //Logo和文字上下居中 */
      span {
        margin-left: 15px;
        /* //文字左侧设置间距，防止与Logo紧贴 */
      }
    }
  }
.aside {
    width: 190px!important;
    background-color: hsl(207, 61%, 48%);
    overflow: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
  .aside::-webkit-scrollbar {
    display: none;
  }
  .home-container {
    height: 100vh;
    border: 1px solid #eee;
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: hidden;
  }
  .main {
    height: calc(100vh - 100px);
    overflow: auto;
    padding: 10px;
  }
  .el-sub-menu {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    color: rgb(255, 255, 255);
  }
  .el-menu {
    border-right: none!important;
  }
  .el-sub-menu:first-child {
    border-top: none;
  }
  .el-sub-menu [class^="el-icon-"] {
    vertical-align: -1px!important;
    left: 0;
  }
  .icon {
    margin-right: 10px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .head > div {
    display: flex;
    align-items: center;
  }
  .head img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .head span {
    font-size: 20px;
    color: #ffffff;
  }
</style>
