<template lang="pug">
    #app
        h1 test
        router-link(to="/") Home
        router-view

    //- <div id="app">
    //-     <div id="nav">
    //-         <router-link to="/">Home</router-link> |
    //-         <router-link to="/about">About</router-link>
    //-     </div>
    //-     <router-view/>
    //- </div>
</template>

<style lang="scss">
    @import './assets/scss/styles.scss';
</style>
