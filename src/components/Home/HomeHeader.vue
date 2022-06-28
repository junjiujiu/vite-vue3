<template>
  <div class="header">
    <div>
      <img src="./logo.png" alt="" height="50px" />
      <span>二手市场后台管理系统</span>
    </div>
    <!-- <el-button type="info" @click="logout">退出</el-button> -->
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.header {
  align-items: center;
  width: 100%;
}
</style>
