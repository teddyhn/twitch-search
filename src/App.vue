<template>
  <div id="app">
    <div class="container">
      <h2>Search for a Twitch user</h2>
      <search-bar @add:user="addUser" @set:query="setQuery" @set:isLoading="setIsLoading" />
      <div class="message">
        <div class="spinner" v-if="isLoading">
          <vue-simple-spinner size="medium" line-bg-color="#333" />
        </div>
        <div class="twitch-channel" v-if="twitchuser && twitchuser.display_name && !isLoading">
          <p class="display-name">{{ twitchuser.display_name }}</p>
          <p class="followers">Followers: {{ twitchuser.followers }}</p>
        </div>
        <div class="error" v-if="twitchuser === null && !isLoading">
          <p>No Twitch user found!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  components: {
    SearchBar
  },
  data() {
    return {
      isLoading: false,
      twitchuser: {},
    }
  },
  methods: {
    addUser(user) {
      this.twitchuser = user
      this.isLoading = false
    },
    setIsLoading(bool) {
      this.isLoading = bool
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');

body {
  box-sizing: border-box;
  background-color: #12141d;
  font-family: Inter, sans-serif;
  color: #333;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  background-color: hsla(0,0%,100%,.05);
  padding: 48px;
  max-width: 1296px;
  width: 33%;
  margin: 0 auto;
  border-radius: 12px;
}

.container h2 {
  text-align: left;
  color: #fff;
}

.message {
  font-size: 18px;
  height: 52px;
}

.message > div {
  color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.spinner {
  padding-top: 18px;
}

.spinner > div {
  margin: 0 auto;
}

.error p {
  margin-left: auto;
  margin-right: auto;
}
</style>
