<template>
<div class="nav">
  <div class="nav-box">
    <router-link to="/ryym">正在热映</router-link>
    <router-link to="/syym">即将上映</router-link>   
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>
<style lang="scss">
  .nav-box{
    width: 100%;
    height: 45px;
    display: flex;
    border-bottom: 1px solid #ccc; 
    a{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      &.router-link-exact-active {
       color: red;
     }
    }
  }
</style>