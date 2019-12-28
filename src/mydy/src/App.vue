<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <header class="header">
      猫眼电影
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <FooterBar />
    </footer>
  </div>
</template>
<script>
import FooterBar from './components/FooterBar'
export default {
  components:{
    FooterBar
  }
  
}
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header,.footer{
  width: 100%;
  height: 45px;
  background: red;
}
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.main{
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.footer{
  background: #fff;
  border-top: 1px solid #ccc;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
