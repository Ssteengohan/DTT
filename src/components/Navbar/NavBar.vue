<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

  <header>
    <div class="wrapper">
      <div class="navbar">
        <nav>
          <img
            alt="DTT logo"
            class="logo"
            src="@/assets/dtt/dtt-logo.png"
          />
          <RouterLink class="houses" to="/">Houses</RouterLink>
          <RouterLink class="about" to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
    <div class="mobile-wrapper">
      <div class="mobile-navbar">
        <nav>
          <RouterLink class="houses" to="/"
            ><img
              v-if="$route.name == 'home'"
              class="home"
              src="@/assets/dtt/home-red.png" /><img
              v-else
              class="home"
              src="@/assets/dtt/home.png"
          /></RouterLink>
          <RouterLink class="about" to="/about"
            ><img
              v-if="$route.name == 'about'"
              class="infoButton"
              src="@/assets/dtt/info-red.png" /><img
              v-else
              class="infoButton"
              src="@/assets/dtt/info.png"
          /></RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
@media (min-width: 751px) {
  .mobile-wrapper {
    display: none;
  }
}
@media (max-width: 750px) {
  .wrapper {
    display: none;
  }

  .mobile-wrapper {
    display: block;
    display: flex;
    align-items: center;
    background-color: var(--background2);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    height: 60px;
  }
  .home,
  .infoButton {
    width: 5vw;
    align-items: center;
    top: 10px;
  }
  .infoButton {
    margin-left: 100px;
  }
}
nav {
  display: flex;
  align-items: center;
  
}
.logo {
  width: 120px;
  margin-top: 15px;
}

.wrapper {
  background-color: var(--background2);
  width: 100%;
  height: 70px;
}

.navbar {
  margin-left: 20%;
  display: flex;
}

.houses,
.about {
  margin-left: 40px;
  font-size: 15px;
  font-family: var(--font-family);
  font-weight: 700;
  color: var(--tertiary);
  text-decoration: none;
}
.about {
  padding-left: 20px;
}

a.router-link-exact-active {
  color: var(--primary-text);
}

</style>
