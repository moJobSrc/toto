<template>
  <div class="login">
    <p>로그인</p>
    <form id="loginform" name="login" action="/">
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
    </form>
  </div>
</template>
<script>
  export default {

  }
</script>