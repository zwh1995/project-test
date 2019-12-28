<template>
  <div class="down-box">
     <router-link to="/movie">电影</router-link>
    <router-link to="/home">电影院</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>
<style lang="scss">
  .down-box{
    display: flex;
    width: 100%;
    height: 45px;
    a{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: gray;
      &.router-link-exact-active {
      color: red;
    }
    }
  }
</style>