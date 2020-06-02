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
    height: 50px;
    width: 30%;
    margin: 40vh auto 0 auto;
}

.search > input {
    width: 83%;
    padding-left: 0.5rem;
}

.search > button {
    width: 15%;
}
</style>