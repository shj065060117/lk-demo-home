<template>
    <div id="app">
        <Header></Header>
        <router-view/>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    name: "index",
    data() {
        return {

        }
    },
    
    components: {Header},
    mounted() {

    },
    updated() {

    },
    methods: {

    }
}
</script>
<style scoped>
#app {
    margin: 0; padding: 0;  font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
}
</style>