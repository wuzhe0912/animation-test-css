# Vue-router

2.0 version

在入口文件(main.js)可以看到->
```
import router from './router'
```
接著在子目錄(router)中的index.js可以看到引入->
```
import Router from 'vue-router'

Vue.use(Router)
```
子目錄(router)中的index.js，先在上方引入components內的組件頁面
```
e.g.

import Apple from '@/components/apple'
```
並在下方routes內建立映射表關係
```
  routes: [
    {
      path: '/apple',    //需要映射到相對應路徑
      component: Apple
    }
  ]
```
添加歷史模式，可以去除原生vue在路徑上的#，依賴 HTML5 History API 和服務器配置
[HTML5 History 模式](https://router.vuejs.org/zh-cn/essentials/history-mode.html)
```
  mode: 'history',
  routes: [
    {
      path: '/apple',
      component: Apple
    }
  ]
```
router-link，取代傳統href，在入口文件寫入
```
e.g.

    <button>
      <router-link to="apple">go to apple</router-link>
    </button>
```

# Vue router參數

在路徑後方建立參數
```
  routes: [
    {
      path: '/apple/:color',
      component: Apple
    }
  ]
```
並在組件頁面中執行參數
```
<template>
  <div class="apple">
    <h1>{{ msg }}</h1>
    <button @click="getParam">getParam</button>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'Apple test'
    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params)
    }
  }
}
</script>
```
此時在該組件頁面中的網址路徑上，輸入任何參數值
```
e.g.

http://localhost:8080/apple/red
//檢查console.log，即可看到參數被存入
```
若想參數渲染到頁面上，則在模板上寫入
```
e.g.

<p>{{ $route.params.color }}</p>
```
同時參數後方亦可加入其他值，例如類型
需注意被單引號所括入內容，都會被解讀為參數
```
path: '/apple/:color/detail/:type'

e.g.

http://localhost:8080/apple/red/detail/2
```

嵌套路由，即是子路由，當進入映射到的頁面，再轉到子頁面
```
//同樣要在上方引入該組件頁面
import RedApple from '@/components/redapple'

  routes: [
    {
      path: '/apple/:color',
      component: Apple
      children: [
        path: '/redapple',
        component: RedApple
      ]
    }
  ]
```
同時要在父級組建頁面，添加<router-view>來映射子組件
並添加跳轉子組件用的觸發button
```
    <router-view></router-view>
    <button>
      <router-link to="redapple">go to redapple</router-link>
    </button>
```
#### router-link
```
//單純的to路徑寫法
<router-link to="apple">go to apple</router-link>

//字符串表示的形式與觸發
<router-link to="'apple'">go to apple</router-link>
```
如果router-link在ul標籤內，可以透過添加tag，將router-link轉為li屬性
```
<router-link to="'apple'" tag="li">go to apple</router-link>
```
#### router重定向
path用來指定根目錄，再使用redirect指定homepage
```
  routes: [
    {
      path: '/',
      redirect: '/apple'    //指定homepage
    }
  ]
```
過渡特效
```
<transition class="fade">    //在CSS3調整過渡動畫
  <router-view></router-view>
</transition>
```