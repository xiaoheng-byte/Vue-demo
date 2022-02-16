<template>
  <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
    <!-- 右侧按钮区域 -->
    <div class="layout-header-right">
      <button type="button" class="btn btn-light" @click="onLogout">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    onLogout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header-container {
  height: 60px;
  border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
  height: 50px;
}
</style>