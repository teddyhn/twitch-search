<template>
  <div id="app">
    <div class="container">
      <search-bar @add:user="addUser" @set:isLoading="setIsLoading" />
      <b-spinner v-if="isLoading" />
      <div class="twitch-channel" v-if="twitchuser.display_name">
        <p class="display-name">{{ twitchuser.display_name }}</p>
        <p class="followers">{{ twitchuser.followers }}</p>
      </div>
      <div v-else-if="twitchuser.name && !twitchuser.display_name">
        <p class="error">No Twitch user found!</p>
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
      twitchuser: {}
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  height: 100%;
}

.twitch-channel {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin: 0 auto;
  border: 1px solid rgb(59, 59, 59);
  padding: 0.5rem;
}

.twitch-channel > p {
  margin: 0;
}
</style>
