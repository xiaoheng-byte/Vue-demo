<template>
  <!-- 标题 -->
  <h4 class="text-center">用户管理</h4>

  <!-- 用户列表 -->
  <table class="table table-bordered table-striped table-hover">
    <thead>
      <tr>
        <th>出道位</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>角色</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in userlist" :key="item.id">
        <td>{{ i + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.role }}</td>
        <td>
          <router-link :to="'/home/users/' + item.id">详情</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "MyUser",
  data() {
    return {
      userlist: [
        { id: 1, name: '刘宇', age: 20, role: 'dancer' },
        { id: 2, name: '赞多', age: 22, role: 'dancer' },
        { id: 3, name: '力丸', age: 27, role: 'dancer' },
        { id: 4, name: '米卡', age: 21, role: 'vocal' },
        { id: 5, name: '高卿尘', age: 21, role: 'vocal' },
        { id: 6, name: '林墨', age: 19, role: 'ace' },
        { id: 7, name: '伯远', age: 28, role: 'ace' },
        { id: 8, name: '张嘉元', age: 18, role: '?' },
        { id: 9, name: '尹浩宇', age: 17, role: 'vocal' },
        { id: 10, name: '周柯宇', age: 18, role: 'ace' },
        { id: 11, name: '刘彰', age: 21, role: 'rapper' },
      ],
    };
  },
};
</script> 
<style lang="less" scoped>
</style>