# 笔记

## 加载vue

有两种方式，一种使用npm，vue-cli等这种方式。一种是比较简单的挂在html中

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## 新建vue对象

典型的js中新建对象的方式。其中el是vm对象的dom树挂载点。data是动态数据。

```
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'hello world'
    }
  })
</script>
```

## 插值

使用`{{}}`[mustache](https://mustache.github.io/)的方式来显示变量，允许js的表达式，但是不允许js的语句。所以要完成一些语句逻辑的话，需要指令来完成

## 指令

指令是带有前缀`v-`,比如有

- v-bind => 绑定变量，可以简化到只有一个`:`号

```
v-bind: id = 'message'  // message是Vue data中的变量
:id = 'message
```

- v-if

- v-else

- v-for

- v-show => 不显示，但是在dom中存在