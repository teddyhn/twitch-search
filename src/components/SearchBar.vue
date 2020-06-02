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
                const response = await fetch(`https://api.twitch.tv/kraken/channels/${this.query}`, {
                                            method: 'GET',
                                            headers: {
                                                'client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko'
                                            }
                                        });
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