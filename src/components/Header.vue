<template>
  <header class="global-header">
    <div class="nav-outer">
      <div class="nav">
        <div class="logo">
          <img src="/IMG/logo.png" alt="logo">
        </div>
        <ul class="menu-list">
          <li v-for="(items, index) in navList" :key="index" class="menu-list-items" @click="router.push(items.path)">
            <a href="javascript:void(0)" class="menu-list-items" :class="{ 'nav-list-active': $route.name === items.name }">{{ $t(items.transName) }}</a>
          </li>
          <LanguageSelecter />
        </ul>
        <div class="menu-buttom">
          <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="60">
            <path
                  class="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
            <path
                  class="line middle"
                  d="m 30,50 h 40" />
            <path
                  class="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import router from '/@/router/index'
import LanguageSelecter from '/@/components/modal/LanguageSelecter.vue'
interface NavList {
  name: string
  path: string
  component?: string
  meta?: string
  transName: string
}
const navList: Array<NavList> = [{
  name: 'Home',
  path: '/',
  transName: 'Nav.HomePageTag'
},{
  name: 'Personal',
  path: '/personal',
  transName: 'Nav.InfoPageTag'
}]
</script>