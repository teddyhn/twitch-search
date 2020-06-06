<template>
  <form class="search" @submit.prevent="handleSubmit">
    <input class="form-input" placeholder="Twitch user" v-model="query">
    <button class="form-submit">Submit</button>
  </form>
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
                const response = await fetch(`https://twitch-search-backend.herokuapp.com/search/${this.query}`, { method: 'GET' })
                const data = await response.json()

                this.queriedUser = data
                this.$emit('add:user', this.queriedUser)
            } catch (error) {
                this.$emit('set:isLoading', false)
                this.$emit('add:user', null)
            }
        }
    }
  }
</script>

<style scoped>
input {
  font-family: Inter, sans-serif;
}

input:focus {
  outline: none;
}

button {
  border: none;
}

button:focus {
  outline: none;
}

.search {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.form-input {
  font-size: 16px;
  line-height: 24px;
  height: 48px;
  margin-bottom: 0;
  padding-right: 20px;
  padding-left: 20px;
  border: 1px #000;
  border-radius: 6px;
  background-color: hsla(0,0%,100%,.1);
  transition: .2s ease;
  color: #fff;
  width: 100%;
}

.form-input:focus {
  background-color: hsla(0,0%,100%,.25)
}

.form-submit {
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background-color: #3c5ccf;
  border-radius: 6px;
  padding: 9px 15px;
  margin-left: 12px;
  transition: .2s ease;
}

.form-submit:hover {
  box-shadow: inset 0 0 20px 20px rgba(0,0,0,.1);
}
</style>