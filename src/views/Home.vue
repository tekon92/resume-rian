<template>
  <div id="app">
    <Hero></Hero>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'
import Hero from '@/components/Hero'

export default {
  name: 'home',
  components: {
    Card,
    // Hero
  }
}
</script>
