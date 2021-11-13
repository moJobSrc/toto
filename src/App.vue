<template>
  <div id="app">
    <Header/>
    <div id="container" class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>
