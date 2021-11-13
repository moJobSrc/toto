<template>
    <header>
      <div class="empty"></div>
      <nav>
        <ul class="nav_links">
          <li><router-link to="/">상점</router-link></li>
          <li><router-link to="/">메인</router-link></li>
          <li><router-link to="/">광고</router-link></li>
        </ul>
      </nav>
      <router-link to="/login"><button type="button" name="login" id="login_button">로그인</button></router-link>
    </header>
</template>

<script>
export default {
  name: 'header',
}
</script>