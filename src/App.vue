<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/log">Session Logs</router-link> |
    <router-link to="/rules">Rules</router-link> |
    <router-link to="/monsters">Monsters</router-link> |
    <router-link to="/spells">Spells</router-link> |
    <router-link to="/npc">NPCs</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
