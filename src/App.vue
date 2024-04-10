<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/log">Session Logs</router-link> |
    <router-link to="/rules">Rules</router-link> |
    <router-link to="/monsters">Bestiary</router-link> |
    <router-link to="/spells">Spells</router-link> |
    <router-link to="/npc">NPCs</router-link> |
    <router-link to="/pc">PCs</router-link>
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
body {
  background-color: rgb(236, 230, 230);
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

.container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  color: #333;
}

#monsterInput {
  width: 40%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#searchButton {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.monster-result {
  width: 45%;
  margin-top: 20px;
  margin-left: 27%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.UL-suggestion {
  width: 40%;
  border-radius: 0.25rem;
  background-color: white;
  border: 1px solid gray;
  justify-content: center;
  padding: 0.5rem 1rem;
  gap: 0.25rem;
  position: absolute;
  z-index: 10;
}

.suggestionListHeader {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
  font-weight: bold;
  border-bottom: 1px solid #e5e7eb;
}

.suggestionListContent {
  cursor: pointer;
}
.suggestionListContent:hover {
    background-color: #f0f4f8;
}
</style>
