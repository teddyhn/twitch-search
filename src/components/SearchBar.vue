<template>
  <div id="search-bar">
    <form class="search" @submit.prevent="handleSubmit">
      <input v-model="query" type="search">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'search-bar',
    data() {
        return {
            query: '',
            queriedUser: {}
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.$emit('set:isLoading', true)
                const response = await fetch(`https://twitch-search-backend.herokuapp.com/search/${this.query}`, { method: 'GET' });
                const data = await response.json()
                this.queriedUser = data
                this.$emit('add:user', this.queriedUser)
            } catch (error) {
                this.$emit('set:isLoading', false)
                console.error(error)
            }
        }
    }
  }
</script>

<style scoped>
#search-bar {
    margin-bottom: 0.5rem;
}

.search {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 40vh auto 0 auto;
}

.search > input {
    padding: 0.5rem;
    width: 100%;
    margin-right: 0.5rem;
}
</style>