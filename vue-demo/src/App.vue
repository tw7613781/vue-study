<template>
  <div id="app">
    {{message}} {{message + message}}
    <div :id="message"></div>
    <!-- <todo-item v-for="item in list" :title="item.title" :del="item.del"></todo-item> -->
    <TodoList>
      <TodoItem @delete="handleDelete" v-for="item in list" :title="item.title" :key="item.title" :del="item.del">
        <!-- <span slot="pre-icon">前置图标</span>
        <span slot="suf-icon">后置图标</span> -->
        <template v-slot:pre-icon="{value}">
          <span class="red">前置图标 {{value}}</span>
        </template>
        <template v-slot:suf-icon>
          <span>后置图标</span>
        </template>
      </TodoItem>
    </TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      message: 'hello world',
      list: [{
              title: '课程1',
              del: false
            }, {
              title: '课程2',
              del: true
          }]
      }
  },
  methods: {
    handleDelete(val) {
      console.log("handleDelete", val)
    }
  }
}
</script>
<style scoped>
.red {
  color: red;
}
</style>