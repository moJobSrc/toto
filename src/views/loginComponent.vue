<template>
  <div class="login">
    <p>로그인</p>
          <div class="inputdiv">
        <img src="img/icon-person.png" />
        <input id=" phone" v-model="id" placeholder="전화번호" type="text">
      </div>
      <div class="inputdiv">
        <img src="img/icon-lock.png" />
        <input id="pw" placeholder="비밀번호" type="password">
      </div>
      <div class="loginbuttons">
        <button id="loginBtn" v-on:click="login()">로그인</button>
        <button id="registerBtn">회원가입</button>
      </div>
      <a id="findPw" href="#">비밀번호 찾기</a>
    <!-- <form id="loginform" name="login" action="/">
      <div class="inputdiv">
        <img src="img/icon-person.png" />
        <input id=" phone" placeholder="전화번호" type="text">
      </div>
      <div class="inputdiv">
        <img src="img/icon-lock.png" />
        <input id="pw" placeholder="비밀번호" type="password">
      </div>
      <div class="loginbuttons">
        <button id="loginBtn">로그인</button>
        <button id="registerBtn">회원가입</button>
      </div>
      <a id="findPw" href="#">비밀번호 찾기</a>
    </form> -->
  </div>
</template>
<script>
// const jwt = require('jsonwebtoken')
export default {
  data() {
    return {
      id: '',
      password: ''
    }
  },
  created() {
    this.$store.commit('logout');
  },
  methods: {
    login() {
      console.log('로그인')
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bSI6IiIsImlhdCI6MTYzNzE1OTMwOX0.miSERgFKd-ftJSJQtdEiu8yvUyMluV3DpeAwJpxjz-c'
      this.$store.commit('loginToken', token)
      // const user = { phoneNum: this.id }
      // const accessToken = jwt.sign(user, process.env.VUE_APP_ACCESS_TOKEN_SECRET)
      // console.log(accessToken)
    }
  }
}
</script>