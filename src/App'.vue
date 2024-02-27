<template>
    <div id="app">
        <router-view></router-view>
        <button v-if="showScrollButton" @click="scrollToTop">Top</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showScrollButton: false
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
};
</script>

<style>
button {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 18px;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>