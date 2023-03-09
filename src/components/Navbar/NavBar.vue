<script setup>
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
          <div class="routes">
          <router-link class="houses" :to="{ name: 'home' }">Houses</router-link>
          <RouterLink class="about" to="/about">About</RouterLink>
        </div>
        </nav>
      </div>
    </div>
    <div class="mobile-wrapper">
      <div class="mobile-navbar">
        <nav>
          <RouterLink class="houses" :to="{ name: 'home' }"
            ><img
              v-if="$route.name == 'home' || $route.name == 'detail' || $route.name == 'edit' || $route.name == 'create'"
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

<style scoped>
@media (min-width: 750px) {
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
    background-color: var(--background2);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 60px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home, .infoButton {
    max-width: 35px;
    align-items: center;
    top: 10px;
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
  margin-left: 15%;
  display: flex;
}

.routes, .houses , .about {
  margin-top: 15px;
  margin-left: 20px;
  font-size: 15px;
  font-family: var(--font-family);
  font-weight: 700;
  color: var(--tertiary);
  text-decoration: none;
}
.about {
  padding-left: 25px;
}

a.router-link-exact-active {
  color: var(--primary-text);
}

</style>
