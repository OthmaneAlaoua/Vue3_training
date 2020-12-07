<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 ">
        <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">{{item.title}}</router-link>
        <button v-if="isLoggedIn" class="mx-2 border rounded show" @click="logout">Logout</button>
        <button v-else class="mx-2 border rounded show" @click="$emit('open-login-modal')">Login</button>
    </nav>
</template>

<script>
    import firebase from "../utilities/firebase";

    export default {
        name : "AppHeader",

        data: function () {
            return {
                list: [
                    {title: "Dc Heroes", to: "/dc-heros"},
                    {title: "Calendar", to: "/calendar"},
                    {title: "Markdown", to: "/markdown"},
                    {title: "Slider", to: "/slider"},
                    {title: "Calculator", to: "/calculator"},
                    {title: "Modal", to: "/reuseable-modal"},
                ],
            }
        }
        ,
        methods: {
            logout: function () {
                firebase.auth().signOut().then(function () {
                }).catch(function () {
                });
            }
        },

        computed:{
          isLoggedIn(){
            return this.$store.state.isLoggedIn;
          }
        }
        ,
    }
</script>

<style scoped>

</style>